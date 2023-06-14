<?php

namespace App\Command;

use App\Entity\Deposits;
use App\Entity\User;
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
        $llamaApi = 'https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e0040488f97f';
        $commission = 0.85;
        $responseApy = getApy($llamaApi, $commission);
        end($responseApy);
        $apyValue = prev($responseApy);
        $dailyYield = $apyValue / 365;

        $users = $this->entityManager->getRepository(User::class)->findAll();

        foreach ($users as $user) {
            $userId = $user->getId();
            $balance = $user->getBalance();

            $currentDate = new \DateTimeImmutable();
            $startDate = $currentDate->setTime(0, 0, 0);
            $endDate = $currentDate->setTime(23, 59, 59);

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

            $dailyDeposit = array_reduce($depositsToday, function ($sum, $deposit) {
                return $sum + $deposit->getUsdAmount();
            }, 0);

            $result = floor(($balance + ($dailyYield / 100 * ($balance - $dailyDeposit))) * 100) / 100;

            $user->setBalance($result);
        }

        $this->entityManager->flush();

        return Command::SUCCESS;
    }
}
