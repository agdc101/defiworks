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
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class AppServices
{
   private UserRepository $userRepository;
   private PoolsRepository $poolsRepository;
   private PerformanceRatesRepository $performanceRatesRepository;
   private EntityManagerInterface $entityManager;
   private MailerInterface $mailer;
   private HttpClientInterface $client;
   private ParameterBagInterface $parameterBag;

   public function __construct(UserRepository $userRepository, PoolsRepository $poolsRepository, PerformanceRatesRepository $performanceRatesRepository, EntityManagerInterface $entityManager, MailerInterface $mailer, HttpClientInterface $client, ParameterBagInterface $parameterBag)
   {
      $this->userRepository = $userRepository;
      $this->performanceRatesRepository = $performanceRatesRepository;
      $this->poolsRepository = $poolsRepository;
      $this->entityManager = $entityManager;
      $this->mailer = $mailer;
      $this->client = $client;
      $this->parameterBag = $parameterBag;
   }

   /**
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

   private function returnPerformanceRates($apy) {
      $performanceRates = $this->performanceRatesRepository->findAll();
      
      foreach ($performanceRates as $rate) {
         if ($apy > $rate->getApy()) {
            return $rate->getRate();
         }
      }
   }  

   /**
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

   // Calculate the live APY using the determined commission rate
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

   public function getAverageApys($data): array {
      $nexoApy = 9;
      $averages = [];

      $averages['weekAverage'] = $this->calculateAverage($data, $nexoApy, 7);
      $averages['monthAverage'] = $this->calculateAverage($data, $nexoApy, 30);
      $averages['yearAverage'] = $this->calculateAverage($data, $nexoApy);

      return $averages;
   }  

   public function addZeroToValue($value) : string {
      $formatUsd = $value;
      if (strlen(substr(strrchr($value, "."), 1)) == 1) {
         $formatUsd = $value . '0';
      }
      return $formatUsd;
   }

   /**
    * @throws UserNotFoundException
    * @throws Exception
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
            ->from($this->parameterBag->get('admin_email'))
            ->to($this->parameterBag->get('admin_email'))
            ->subject('New Withdrawal Request')
            ->html(
               "$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString 
             <br/><br/> confirm by going to <a href='$withdrawLink'>https://defiworks.co.uk/admin/confirm-withdraw/$Id</a>
             <br/><br/>220590{$sc}{$ac}030292"
            );
      } else {
         $email = (new Email())
            ->from($this->parameterBag->get('admin_email'))
            ->to($this->parameterBag->get('admin_email'))
            ->subject('New Deposit - Confirmation required')
            ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount ($$usdAmount) at $dateString 
                <br><br> confirm by going to <a href='$depositLink'>https://defiworks.co.uk/admin/confirm-deposit/$Id</a>");
      }
      $this->mailer->send($email);
   }

   /**
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface|\Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
    */
   public function getGeckoData($api) : array {
      try {
         $response = $this->client->request('GET', $api, ['timeout' => 5]);
         return $response->toArray();
      } catch (ClientExceptionInterface $e) {
         return ['error' => $e->getMessage()];
      }
   }

   public function getSiteTVL() : float {
      $users = $this->userRepository->findAll();
      $totalBalance = 0;
      foreach ($users as $user) {
         $totalBalance += $user->getBalance();
      }
      return $totalBalance;
   }

}