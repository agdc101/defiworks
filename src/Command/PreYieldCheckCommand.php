<?php

namespace App\Command;

use App\Entity\StrategyApy;
use App\Repository\StrategyApyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'pre-yield-check',
    description: 'Check the APY has been updated before running the yield command, if not set a default.',
)]
class PreYieldCheckCommand extends Command
{

    private StrategyApyRepository $strategyApyRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager, StrategyApyRepository $strategyApyRepository)
    {
      $this->strategyApyRepository = $strategyApyRepository;
        $this->entityManager = $entityManager;

      parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $mostRecentApy = $this->strategyApyRepository->returnLatestlog();
        $apyDate = $mostRecentApy->getTimestamp();
        $now = new \DateTime();

        //check if $apyDate is today
        if ($apyDate->format('Y-m-d') == $now->format('Y-m-d')) {
            echo "APY data is up to date\n";
        } else {
            $defaultApy = 4.04;
            $strategyApy = (new StrategyApy())
                ->setApy($defaultApy)
                ->setWeekAvg($mostRecentApy->getWeekAvg())
                ->setMonthAvg($mostRecentApy->getMonthAvg())
                ->setMonth3Avg($mostRecentApy->getMonth3Avg())
                ->setMonth6Avg($mostRecentApy->getMonth6Avg())
                ->setYear1Avg($mostRecentApy->getYear1Avg())
                ->setTimestamp(new \DateTimeImmutable());
            $this->entityManager->persist($strategyApy);
            $this->entityManager->flush();
            echo "APY data is not up to date. default set\n";
        }

        return Command::SUCCESS;
    }
}
