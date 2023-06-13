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
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Validator\Constraints\Date;

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
        $nexApy = 11;
        $apyValue = reset($responseApy);
        $totalApy = (($apyValue + $nexApy) / 2) * $commission;
        $dailyYield = $totalApy / 365;

        $userRepository = $this->entityManager->getRepository(User::class);
        $depositsRepository = $this->entityManager->getRepository(Deposits::class);
        $users = $userRepository->findAll();
        $deposits = $depositsRepository->findAll();


        foreach ($users as $user) {
            //get user id
            $userId = $user->getId();

            $currentDate = new \DateTimeImmutable();
            $formattedDate = $currentDate->format('Y-m-d');

            $depositsToday = $depositsRepository->findBy([
                'user_id' => $userId,
                'timestamp' => $currentDate
            ]);

            foreach ($depositsToday as $deposit) {
                $formattedDate = $deposit->getTimestamp()->format('Y-m-d H:i:s');
                $output->writeln($formattedDate);
            }
        }


        return Command::SUCCESS;
    }
}
