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
         ->setGbpAmount($cleanGbp)
         ->setUsdAmount($cleanUsd);

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