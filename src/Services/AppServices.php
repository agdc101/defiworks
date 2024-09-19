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

class AppServices
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
    * public function returns the authenticated user or throws an exception if the user is not found (logged in)
    * @throws UserNotFoundException
    */
   public function getUserOrThrowException(): User {
      $user = $this->userRepository->findAuthenticatedUser();
      if (!$user instanceof User) {
         throw new UserNotFoundException('User not found');
      }
      return $user;
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


   /**
    * public function that adds a zero to the value if the value has only one decimal place
    * @param float $value
   */
   public function addZeroToValue($value) : string {
      $formatUsd = $value;
      if (strlen(substr(strrchr($value, "."), 1)) == 1) {
         $formatUsd = $value . '0';
      }
      return $formatUsd;
   }


   /**
    * public function that builds and persists a transaction to the database
    * @param object $transaction
    * @param int $gbp
    * @param int $usd

    * @throws UserNotFoundException
    */
   public function buildAndPersistTransaction($transaction, $gbp, $usd) : void {
      $user = $this->getUserOrThrowException();
      $cleanGbp = str_replace(',', '', $gbp);
      $cleanUsd = str_replace(',', '', $usd);

      $transaction
         ->setIsVerified(false)
         ->setTimestamp(new \DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
         ->setUserEmail($user->getEmail())
         ->setUserId($user->getId())
         ->setGbpAmount(floatval($cleanGbp))
         ->setUsdAmount(floatval($cleanUsd));

      $this->entityManager->persist($transaction);
      $this->entityManager->flush();
   }


   /**
    * public function that builds and sends a transaction email to the admin based on the type of transaction
    * @param string $type
    * @param object $object
    * @param string $sc (sort code)
    * @param string $ac (acc number)
    *
    * @throws TransportExceptionInterface
    * @throws UserNotFoundException
   */
   public function buildAndSendEmail($type, $object, $sc, $ac): void {
      $user = $this->getUserOrThrowException();
      list($firstName, $lastName, $userEmail) = [$user->getFirstName(), $user->getLastName(), $user->getEmail()];
      list($gbpAmount, $usdAmount, $date, $Id) = [$object->getGbpAmount(), $object->getUsdAmount(), $object->getTimestamp(), $object->getId()];
      $dateString = $date->format('H:i:s Y-m-d');
      $withdrawLink = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/admin/confirm-withdraw/$Id";
      $depositLink = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/admin/confirm-deposit/$Id";

      if ($type === 'withdraw') {
         $email = (new Email())
            ->from('admin@defiworks.co.uk')
            ->to('admin@defiworks.co.uk')
            ->subject('New Withdrawal Request')
            ->html(
               "$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString 
             <br/><br/> confirm by going to <a href='$withdrawLink'>https://defiworks.co.uk/admin/confirm-withdraw/$Id</a>
             <br/><br/>220590{$sc}{$ac}030292"
            );
      } else {
         $email = (new Email())
            ->from('admin@defiworks.co.uk')
            ->to('admin@defiworks.co.uk')
            ->subject('New Deposit - Confirmation required')
            ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount ($$usdAmount) at $dateString 
                <br><br> confirm by going to <a href='$depositLink'>https://defiworks.co.uk/admin/confirm-deposit/$Id</a>");
      }
      $this->mailer->send($email);
   }


   /**
    * public function that returns the gecko data from the API - (currently peg for usdc arb)
    * @throws ClientExceptionInterface
   */
   public function getGeckoData($api) : array {
      try {
         $response = $this->client->request('GET', $api, ['timeout' => 5]);
         return $response->toArray();
      } catch (ClientExceptionInterface $e) {
         return ['error' => $e->getMessage()];
      }
   }

   /**
    * public function that returns the total TVL of the site
   */
   public function getSiteTVL() : float {
      $users = $this->userRepository->findAll();
      $totalBalance = 0;
      foreach ($users as $user) {
         $totalBalance += $user->getBalance();
      }
      return $totalBalance;
   }

}