<?php

namespace App\Command;

use App\Entity\StrategyApy;
use Doctrine\ORM\EntityManagerInterface;
use App\Services\AppServices;
use App\Exceptions\ApyDataException;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'update-strategy-apy',
    description: 'Update the strategy APY data.',
)]
class UpdateStrategyApyCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private AppServices $appServices;

    public function __construct(EntityManagerInterface $entityManager, AppServices $appServices)
    {
      $this->entityManager = $entityManager;
      $this->appServices = $appServices;

      parent::__construct();
    }

    public function logNewApyData(): void
    {
        $responseData = $this->appServices->getVaultData();

        if (empty($responseData['error'])) {
            $apyData = $responseData['responseData'];
            $newApyLog = $responseData['liveAPY'];
        } else {
            throw new ApyDataException('Error fetching APY data');
            exit;
        }

        $averageApys = $this->appServices->getAverageApys($apyData);
        $month3Apy = $averageApys['threeMonthAverage'];
        $month6Apy = $averageApys['sixMonthAverage'];
        $yearApy = $averageApys['yearAverage'];

        $strategyApy = (new StrategyApy())
            ->setApy(round($newApyLog, 2))
            ->setMonth3Avg(round($month3Apy, 2))
            ->setMonth6Avg(round($month6Apy, 2))
            ->setYear1Avg(round($yearApy, 2))
            ->setTimestamp(new \DateTimeImmutable());
        $this->entityManager->persist($strategyApy);
        $this->entityManager->flush();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->logNewApyData();

        return Command::SUCCESS;
    }
}
