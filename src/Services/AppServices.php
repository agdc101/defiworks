<?php

namespace App\Services;

use Exception;
use App\Entity\User;
use App\Entity\StrategyApy;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use App\Exceptions\ApyDataException;

class AppServices
{
   private UserRepository $userRepository;
   private EntityManagerInterface $entityManager;
   private MailerInterface $mailer;
   private HttpClientInterface $client;

   public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager, MailerInterface $mailer, HttpClientInterface $client)
    {
         $this->userRepository = $userRepository;
         $this->entityManager = $entityManager;
         $this->mailer = $mailer;
         $this->client = $client;
    }

   /**
    * @throws UserNotFoundException
    */
   public function getUserOrThrowException(): User
   {
      $user = $this->userRepository->findAuthenticatedUser();
      if (!$user instanceof User) {
         throw new UserNotFoundException('User not found');
      }
      return $user;
   }

   public function getCurrentApy(): float
   {
      return $apyValue = $this->entityManager->getRepository(StrategyApy::class)
         ->createQueryBuilder('s')
         ->select('s.apy')
         ->orderBy('s.timestamp', 'DESC')
         ->setMaxResults(1)
         ->getQuery()
         ->getSingleScalarResult();

   }

   /**
   * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
   * @throws ServerExceptionInterface
   * @throws RedirectionExceptionInterface
   * @throws DecodingExceptionInterface
   * @throws ClientExceptionInterface
   */
   public function getVaultData(): array
   {
      $nexAPY = 11;
      $defaultLiveAPY = 6.99;
      $commission = 0.85;
  
      try {
         $response = $this->client->request('GET', 'https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e1040488f97f', ['timeout' => 5]);
         $statusCode = $response->getStatusCode();

          if ($statusCode !== 200) {
               return [
                  'liveAPY' => $defaultLiveAPY,
                  'statusCode' => $statusCode,
                  'error' => 'Error fetching data from API'
               ];
          } else {
               // Get the newest APY from the response
               $responseData = $response->toArray()['data'];
               $responseApy = end($responseData)['apy'];

               // Adjust commission based on live APY
               if ($responseApy < 4.75) {
                  $commission = 0.90;
               } elseif ($responseApy > 6.75) {
                  $commission = 0.80;
               }
               $avrResponseLiveApy = (($responseApy + $nexAPY) / 2) * $commission;
  
               return [
                  'liveAPY' => $avrResponseLiveApy,
                  'responseData' => $responseData,
                  'statusCode' => $statusCode,
               ];
         }
      } catch (TransportExceptionInterface $e) {
          return [
              'liveAPY' => $defaultLiveAPY,
              'statusCode' => 503,
              'error' => $e->getMessage(),
          ];
      }
  }

   /**
   * @throws ApyDataException
   */
   private function calculateAverage($data, $nexoApy, $period): float {
      $averages = [];

      for ($i = (count($data) - $period); $i < count($data); $i++) {
         if (isset($data[$i]['apy'])) {
            $apy = $data[$i]['apy'];

            $commission = 0.85;

            if ($apy < 4.75) {
               $commission = 0.90;
            } elseif ($apy > 6.75) {
               $commission = 0.80;
            }
            $averages[] = (($apy + $nexoApy) / 2 * $commission);

         } else {
            throw new ApyDataException('Missing "apy" value in the data.');
         }
      }
      return array_sum($averages) / count($averages);
   }

   public function getAverageApys($data): array {
      $nexoApy = 11;
      $averages = [];

      $averages['threeMonthAverage'] = $this->calculateAverage($data, $nexoApy, 90);
      $averages['sixMonthAverage'] = $this->calculateAverage($data, $nexoApy, 180);
      $averages['yearAverage'] = $this->calculateAverage($data, $nexoApy, 365);

      return $averages;
   }  

   public function addZeroToValue($value) : string
   {
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
   public function buildAndPersistTransaction($transaction, $gbp, $usd) : void
   {
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
   public function buildAndSendEmail($type, $object, $sc, $ac): void
   {
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
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface|\Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
    */
   public function getGeckoData($api) : array
   {
      try {
         $response = $this->client->request('GET', $api, ['timeout' => 5]);
         return $response->toArray();
      } catch (ClientExceptionInterface $e) {
         return ['error' => $e->getMessage()];
      }
   }

   public function getSiteTVL() : float
   {
      $users = $this->userRepository->findAll();
      $totalBalance = 0;
      foreach ($users as $user) {
         $totalBalance += $user->getBalance();
      }
      return $totalBalance;
   }

}
