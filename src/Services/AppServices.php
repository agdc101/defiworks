<?php

namespace App\Services;

use App\Entity\User;
use App\Entity\Deposits;
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
   private function getUserOrThrowException(): User
   {
      $user = $this->userRepository->findAuthenticatedUser();
      if (!$user instanceof User) {
         throw new UserNotFoundException('User not found');
      }
      return $user;
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

   //build and send email to admin requesting withdrawal

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

      if ($type === 'withdrawal') {
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
