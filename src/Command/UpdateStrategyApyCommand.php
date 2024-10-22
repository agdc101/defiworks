<?php

namespace App\Command;

use App\Entity\StrategyApy;
use Doctrine\ORM\EntityManagerInterface;
use App\Services\CronServices;
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
    private CronServices $cronServices;

    public function __construct(EntityManagerInterface $entityManager, CronServices $cronServices)
    {
        $this->entityManager = $entityManager;
        $this->cronServices = $cronServices;

        parent::__construct();
    }

    public function logNewApyData(): void
    {
        try {
            $vaultData = $this->cronServices->getVaultData();
    
            $apyData = $vaultData['responseData'];
            $newApyLog = $vaultData['yieldApy'];
    
            $averageApys = array_map(function ($data) {
                return $this->cronServices->getAverageApys($data);
            }, $apyData);
    
            $weekAvg = array_column($averageApys, 'weekAverage');
            $monthAvg = array_column($averageApys, 'monthAverage');
            $yearAvg = array_column($averageApys, 'yearAverage');
    
            $weekApyAvg = round(array_sum($weekAvg) / count($weekAvg), 2);
            $monthApyAvg = round(array_sum($monthAvg) / count($monthAvg), 2);
            $yearApyAvg = round(array_sum($yearAvg) / count($yearAvg), 2);
    
            $strategyApy = (new StrategyApy())
                ->setApy($newApyLog)
                ->setWeekAvg($weekApyAvg)
                ->setMonthAvg($monthApyAvg)
                ->setYear1Avg($yearApyAvg)
                ->setTimestamp(new \DateTimeImmutable());
    
            $this->entityManager->persist($strategyApy);
            $this->entityManager->flush();
    
            echo 'APY data saved successfully';
        } catch (\Exception $e) {
            throw new ApyDataException($e->getMessage());
        }
    }
    

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->logNewApyData();

        return Command::SUCCESS;
    }
}
