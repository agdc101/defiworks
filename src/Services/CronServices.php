<?php

namespace App\Services;

use Exception;
use App\Entity\User;
use App\Entity\Pools;
use App\Entity\PerformanceRates;
use App\Entity\LiveApyLog;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;
use App\Repository\PerformanceRatesRepository;
use App\Repository\PoolsRepository;
use App\Exceptions\ApyDataException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;

class CronServices
{
   private UserRepository $userRepository;
   private PoolsRepository $poolsRepository;
   private PerformanceRatesRepository $performanceRatesRepository;
   private EntityManagerInterface $entityManager;
   private MailerInterface $mailer;
   private HttpClientInterface $client;

   public function __construct(UserRepository $userRepository, PoolsRepository $poolsRepository, PerformanceRatesRepository $performanceRatesRepository, EntityManagerInterface $entityManager, MailerInterface $mailer, HttpClientInterface $client)
   {
      $this->userRepository = $userRepository;
      $this->performanceRatesRepository = $performanceRatesRepository;
      $this->poolsRepository = $poolsRepository;
      $this->entityManager = $entityManager;
      $this->mailer = $mailer;
      $this->client = $client;
   }

   /**
    * private function updates the apy log table with the new live apy to show on the homepage
    * @param float $apy
    * @throws RuntimeException
   */
   private function updateApyLog($apy) : void {
      try {
         $newApyLog = (new LiveApyLog())
            ->setApy($apy)
            ->setTimestamp(new \DateTimeImmutable('now', new \DateTimeZone('Europe/London')));
         $this->entityManager->persist($newApyLog);
         $this->entityManager->flush();
      } catch (\RuntimeException $e) {
         echo $e->getMessage();
      }
   }

   /**
    * private function returns the performance rate based on the apy
    * @param float $apy
   */
   private function returnPerformanceRates($apy) {
      $performanceRates = $this->performanceRatesRepository->findAll();
      
      foreach ($performanceRates as $rate) {
         if ($apy > $rate->getApy()) {
            return $rate->getRate();
         }
      }
   }  

   /**
    * public function returns either the live apy or the yield apy depending on the getLive parameter, as well as the data from the llama API and status code,
    * an average apy is calculated based on the active pools then a commission rate is determined, then an apy is calculated using the determined commission rate and the average apy
    * If $getLive is true, the apy is logged in the apy log table
    * 
    * @param bool $getLive
    * 
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
   */
  public function getVaultData($getLive=false): array {
      $apys = ['nexo' => 9];
      $responseData = [];
      $statusCode = null;

      // Get all active pools from the database
      $activePools = $this->poolsRepository->returnAllActivePools();

      foreach ($activePools as $pool) {
         $poolId = $pool->getPoolId();
         $poolName = $pool->getPoolName();

         try {
            $response = $this->client->request('GET', "https://yields.llama.fi/chart/$poolId", ['timeout' => 5]);
            $statusCode = $response->getStatusCode();

            if ($statusCode !== 200) {
               throw new \RuntimeException('Error fetching data from API');
            } else {
               $responseData[$poolName] = $response->toArray()['data'];
               $liveApy = end($responseData[$poolName])['apy'];
               $yieldApy = prev($responseData[$poolName])['apy'];

               if ($getLive) {
                  $apys[$poolName] = $liveApy;
               } else {
                  $apys[$poolName] = $yieldApy;
               }

               $pool->setPoolApy($yieldApy);
               $this->entityManager->persist($pool);
               $this->entityManager->flush();
            }
         } catch (\RuntimeException $e) {
            echo "Caught RuntimeException: " . $e->getMessage();
         }
      }

      // Calculate the average APY of all pools
      $averageApy = array_sum($apys) / count($apys);
      
      // Determine the commission rate based on the average APY
      $commission = $this->returnPerformanceRates($averageApy);

      // Calculate the APY using the determined commission rate
      $avrResponseLiveApy = $averageApy * $commission;

      if ($getLive) {
         $this->updateApyLog($avrResponseLiveApy);
      }

      return [
         'yieldApy' => $avrResponseLiveApy,
         'responseData' => $responseData,
         'statusCode' => $statusCode,
      ];
    }


   /**
    * private function calculates the average apy based on the data and the nexo apy, if a period is provided, the average is calculated based on the period
    * If period is NULL the average is calculated based on the entire data length
    * 
    * @param array $data
    * @param float $nexoApy
    * @param int|null $period
    * 
    * @throws ApyDataException
   */
   private function calculateAverage($data, $nexoApy, $period=NULL): float {
      $averages = [];
      if ($period === NULL) {
         $period = count($data);
      }

      for ($i = (count($data) - $period); $i < count($data); $i++) {
         if (isset($data[$i]['apy'])) {
            $apy = $data[$i]['apy'];

            $commission = $this->returnPerformanceRates($apy);

            $averages[] = (($apy + $nexoApy) / 2 * $commission);

         } else {
            throw new ApyDataException('Missing apy value in the data.');
         }
      }

      return array_sum($averages) / count($averages);
   }


   /**
    * public function returns an array of the average apys based on the data provided,
    * this is used to display the average apys on the dash, is called from the UpdateStrategyApyCommand
    * @param array $data
   */
   public function getAverageApys($data): array {
      $nexoApy = 9;
      $averages = [];

      $averages['weekAverage'] = $this->calculateAverage($data, $nexoApy, 7);
      $averages['monthAverage'] = $this->calculateAverage($data, $nexoApy, 30);
      $averages['yearAverage'] = $this->calculateAverage($data, $nexoApy);

      return $averages;
   }  

}