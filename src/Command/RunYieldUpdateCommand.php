<?php

namespace App\Command;

use App\Entity\Deposits;
use App\Entity\User;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'run-yield-update',
    description: 'pays out yield to users'
)]
class RunYieldUpdateCommand extends Command
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $responseApy = getApy();
        end($responseApy);
        $apyValue = prev($responseApy);
        $dailyYield = $apyValue / 365;

        $users = $this->entityManager->getRepository(User::class)->findAll();

        foreach ($users as $user) {
            $userId = $user->getId();
            $balance = $user->getBalance();

            $currentDate = new \DateTimeImmutable();
            $startDate = $currentDate->modify('-1 day')->setTime(0, 0, 0);
            $endDate = $currentDate->modify('+1 hour');

            $withdrawalsToday = $this->entityManager->getRepository(Withdrawals::class)
                ->createQueryBuilder('w')
                ->where('w.user_id = :userId')
                ->andWhere('w.timestamp BETWEEN :startDate AND :endDate')
                ->setParameters([
                    'userId' => $userId,
                    'startDate' => $startDate,
                    'endDate' => $endDate,
                ])
                ->getQuery()
                ->getResult();

            // if no withdrawals today and balance is greater than 0, user accrues yield.
            if (!$withdrawalsToday && $balance > 0) {

                $depositsToday = $this->entityManager->getRepository(Deposits::class)
                    ->createQueryBuilder('d')
                    ->where('d.user_id = :userId')
                    ->andWhere('d.timestamp BETWEEN :startDate AND :endDate')
                    ->setParameters([
                        'userId' => $userId,
                        'startDate' => $startDate,
                        'endDate' => $endDate,
                    ])
                    ->getQuery()
                    ->getResult();

                $ineligibleDeposit = array_reduce($depositsToday, function ($sum, $deposit) {
                    return $sum + $deposit->getUsdAmount();
                }, 0);

                $result = ($balance + ($dailyYield / 100 * ($balance - $ineligibleDeposit))) * 100 / 100;
                $valueAdded = $result - $balance;

                //output results to log file.
                file_put_contents("./output-log.txt","
                    'User ID: '$userId,
                    'Original balance: '$balance,
                    'Yield accrued on: '$balance - $ineligibleDeposit,
                    'Ineligible Deposits: '$ineligibleDeposit,
                    'Daily Yield: '$dailyYield,
                    '============================',
                    'Result: '$result,
                    'Value Added: '$valueAdded,
                    '============================',
                ");

                $user->setProfit($user->getProfit() + $valueAdded);
                $user->setBalance($result);

                $this->entityManager->flush();

            }
        }

        return Command::SUCCESS;
    }
}
