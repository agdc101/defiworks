<?php

namespace App\Services;

use App\Entity\User;
use App\Entity\Deposits;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class DepositServices
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
   public function buildAndPersistDeposit($deposit, $gbp, $usd) : void
    {
      $user = $this->getUserOrThrowException();
      $cleanGbp = str_replace(',', '', $gbp);
      $cleanUsd = str_replace(',', '', $usd);

      $deposit
         ->setIsVerified(false)
         ->setTimestamp(new \DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
         ->setUserEmail($user->getEmail())
         ->setUserId($user->getId())
         ->setGbpAmount($cleanGbp)
         ->setUsdAmount($cleanUsd);

       $this->entityManager->persist($deposit);
       $this->entityManager->flush();
    }

   //build and send email to admin requesting withdrawal

   /**
    * @throws TransportExceptionInterface
    * @throws UserNotFoundException
    */
   public function buildAndSendEmail($deposit): void
   {
      $user = $this->getUserOrThrowException();
      list($firstName, $lastName, $userEmail) = [$user->getFirstName(), $user->getLastName(), $user->getEmail()];
      list($gbpAmount, $usdAmount, $date, $depositId) = [$deposit->getGbpAmount(), $deposit->getUsdAmount(), $deposit->getTimestamp(), $deposit->getId()];

      $dateString = $date->format('H:i:s Y-m-d');
      $email = (new Email())
         ->from('admin@defiworks.co.uk')
         ->to('admin@defiworks.co.uk')
         ->subject('New Deposit - Confirmation required')
         ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount ($$usdAmount) at $dateString <br><br> confirm by going to <a href='http://localhost:8000/admin/confirm-deposit/$depositId'>https://defiworks.co.uk/admin/confirm-deposit/$depositId</a>");
      $this->mailer->send($email);
   }

}
