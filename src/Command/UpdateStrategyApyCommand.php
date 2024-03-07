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
    description: 'Add a short description for your command',
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
        $vaultData = $this->appServices->getVaultData();

        if (empty($vaultData['error'])) {
            $apyData = $vaultData['responseData'];
            $newApyLog = $vaultData['liveAPY'];
        } else {
            throw new ApyDataException('Error fetching APY data');
            exit;
        }

        foreach ($apyData as $index => $data) {
            $averageApys[$index] = $this->appServices->getAverageApys($data);
        }    

        foreach ($averageApys as $index => $data) {
            $weekAvg[$index] = $data['weekAverage'];
            $monthAvg[$index] = $data['monthAverage'];
            $yearAvg[$index] = $data['yearAverage'];

        }

        //find the average of the averages
        $weekApy = array_sum($weekAvg) / count($weekAvg);
        $monthApy = array_sum($monthAvg) / count($monthAvg);
        $yearApy = array_sum($yearAvg) / count($yearAvg);

        $strategyApy = (new StrategyApy())
            ->setApy(round($newApyLog, 2))
            ->setMonth3Avg(round($weekApy, 2))
            ->setMonth6Avg(round($monthApy, 2))
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
