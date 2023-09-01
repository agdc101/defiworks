<?php

namespace App\Command;

use App\Entity\Deposits;
use App\Entity\User;
use App\Entity\UserYieldLog;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use App\Services\AppServices;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

#[AsCommand(
    name: 'run-yield-update',
    description: 'adds the daily yield to user balances'
)]
class RunYieldUpdateCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private AppServices $appServices;

    public function __construct(EntityManagerInterface $entityManager, AppServices $appServices)
    {
      $this->entityManager = $entityManager;
      $this->appServices = $appServices;

      parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

   /**
    * @throws TransportExceptionInterface
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    */
   protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $responseApy = $this->appServices->getApy();
        end($responseApy);
        $apyValue = prev($responseApy);
        $dailyYield = $apyValue / 365;

       $users = $this->entityManager->getRepository(User::class)
          ->createQueryBuilder('u')
          ->getQuery()
          ->getResult();

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

               $logResult = "User ID: $userId, Original balance: $balance, Ineligible Deposits: $ineligibleDeposit, Result: $result, Value Added: $valueAdded";
               // log yield result
               $output->writeln($logResult);
               $userYieldLog = (new UserYieldLog())
                  ->setUserId($userId)
                  ->setLogResult($logResult)
                  ->setTimestamp(new \DateTimeImmutable());

               $user
                  ->setProfit($user->getProfit() + $valueAdded)
                  ->setCurrentProfit($user->getCurrentProfit() + $valueAdded)
                  ->setBalance($result);

               $this->entityManager->persist($userYieldLog);
               $this->entityManager->persist($user);
               $this->entityManager->flush();
            }
        }
        return Command::SUCCESS;
    }
}
