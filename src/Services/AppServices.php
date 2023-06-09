<?php

namespace App\Services;

use App\Entity\User;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpClient\HttpClient;
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
   private EntityManagerInterface $entityManager;
   private MailerInterface $mailer;

   public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager, MailerInterface $mailer)
    {
         $this->userRepository = $userRepository;
         $this->entityManager = $entityManager;
         $this->mailer = $mailer;
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

   /**
    * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    */
   public function getApy() : array
   {
      $nexAPY = 11;
      $commission = 0.85;
      $client = HttpClient::create();
      $response = $client->request('GET', 'https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e0040488f97f');
      $statusCode = $response->getStatusCode();

      // if response is not 404, return status code
      if ($statusCode !== 200) {
         return [
            'liveAPY' => 4.5,
            'statusCode' => $statusCode
         ];
      } else {
         $responseData = $response->toArray()['data'];
         $responseApy = end($responseData)['apy'];
         //the live apy. (get the average APY of $nexAPY and $responseApy)
         $avrResponseLiveApy = (($responseApy + $nexAPY) / 2)*$commission;

         if ($avrResponseLiveApy < 4.75) {
            $commission = 0.90;
         } else if ($avrResponseLiveApy > 6.75) {
            $commission = 0.80;
         }

         return [
            'liveAPY' => $avrResponseLiveApy,
            'reaperApy' => $responseApy,
            'responseData' => $responseData,
            'commission' => $commission,
            'statusCode' => $statusCode
         ];
      }
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

      if ($type === 'withdraw') {
         $email = (new Email())
            ->from('admin@defiworks.co.uk')
            ->to('admin@defiworks.co.uk')
            ->subject('New Withdrawal Request')
            ->html(
               "$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString 
             <br/><br/> confirm by going to <a href='http://localhost:8000/admin/confirm-withdraw/$Id'>https://defiworks.co.uk/admin/confirm-withdraw/$Id</a>
             <br/><br/>220590{$sc}{$ac}030292"
            );
      } else {
         $email = (new Email())
            ->from('admin@defiworks.co.uk')
            ->to('admin@defiworks.co.uk')
            ->subject('New Deposit - Confirmation required')
            ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount ($$usdAmount) at $dateString 
                <br><br> confirm by going to <a href='http://localhost:8000/admin/confirm-deposit/$Id'>https://defiworks.co.uk/admin/confirm-deposit/$Id</a>");
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
      $httpClient = HttpClient::create();
      try {
         $response = $httpClient->request('GET', $api);
         return $response->toArray();
      } catch (ClientExceptionInterface $e) {
         return ['error' => $e->getMessage()];
      }
   }

}
