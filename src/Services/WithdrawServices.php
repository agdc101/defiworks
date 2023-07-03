<?php

namespace App\Services;

use App\Entity\User;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use App\Exceptions\UserNotFoundException;
use Symfony\Component\Mime\Email;
use App\Repository\UserRepository;

class WithdrawServices
{
   private EntityManagerInterface $entityManager;
   private UserRepository $userRepository;

   public function __construct(EntityManagerInterface $entityManager, UserRepository $userRepository)
   {
      $this->entityManager = $entityManager;
      $this->userRepository = $userRepository;
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
    */
   //get user balance and format to 2 decimal places
   public function getFormattedBalance() : float
   {
      $user = $this->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);
      //round $userBalance down to 2 decimal places
      return floor($userBalance * 100) / 100;
   }

   /**
    * @throws UserNotFoundException
    */
   //build withdrawal object
   public function buildWithdrawal($usd, $gbp) : Withdrawals
   {
      $user = $this->getUserOrThrowException();

      $withdrawal = new Withdrawals();
      //set default values for deposit
      $cleanGbp = str_replace(',', '', $gbp);
      $cleanUsd = str_replace(',', '', $usd);
      $withdrawal
       ->setIsVerified(false)
       ->setTimestamp(new \DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
       ->setUserEmail($user->getEmail())
       ->setUserId($user->getId())
       ->setUsdAmount(floatval($cleanUsd))
       ->setGbpAmount(floatval($cleanGbp));

      //withdrawal object persisted to database
      $this->entityManager->persist($withdrawal);
      $this->entityManager->flush();

      return $withdrawal;
   }

   /**
    * @throws UserNotFoundException
    */
   //build and send email to admin requesting withdrawal
   public function buildAndSendEmail($sc, $ac, $withdrawal): Email
    {
      $user = $this->getUserOrThrowException();
      list($firstName, $lastName, $userEmail) = [$user->getFirstName(), $user->getLastName(), $user->getEmail()];
      list($gbpAmount, $date, $withdrawalId) = [$withdrawal->getGbpAmount(), $withdrawal->getTimestamp(), $withdrawal->getId()];

      $dateString = $date->format('H:i:s Y-m-d');
      return (new Email())
       ->from('admin@defiworks.co.uk')
       ->to('admin@defiworks.co.uk')
       ->subject('New Withdrawal Request')
       ->html(
       "$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString 
             <br/><br/> confirm by going to <a href='http://localhost:8000/admin/confirm-withdraw/$withdrawalId'>https://defiworks.co.uk/admin/confirm-withdraw/$withdrawalId</a>
             <br/><br/>220590{$sc}{$ac}030292"
       );
    }

    public function clearSession() : void
    {
      $this->entityManager->clear();
    }
}
