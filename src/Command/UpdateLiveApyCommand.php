<?php

namespace App\Command;

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
    name: 'update-live-apy',
    description: 'updates the current live APY',
)]
class UpdateLiveApyCommand extends Command
{
    private CronServices $cronServices;

    public function __construct(CronServices $cronServices)
    {
        $this->cronServices = $cronServices;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        try {
            $this->cronServices->getVaultData(true);
            echo "Live APY updated\n";
        } catch (\RuntimeException $e){
            echo "Caught RuntimeException: " . $e->getMessage();
        }

        return Command::SUCCESS;
    }
}
