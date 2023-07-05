<?php

namespace App\Services;

use App\Entity\Deposits;
use App\Entity\Withdrawals;
use App\Exceptions\UserNotFoundException;
use Doctrine\ORM\EntityManagerInterface;

class DashboardServices
{
   private EntityManagerInterface $entityManager;
   private AppServices $appServices;

   public function __construct(EntityManagerInterface $entityManager, AppServices $appServices)
   {
      $this->entityManager = $entityManager;
      $this->appServices = $appServices;
   }

   /**
    * @throws UserNotFoundException
    */
   public function getPendingBalance() : float
   {
      $user = $this->appServices->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);

      $unverifiedDeposits = $this->entityManager->getRepository(Deposits::class)->findOneBy([
         'user_id' => $user->getId(),
         'is_verified' => false
      ]);
      $unverifiedWithdrawals = $this->entityManager->getRepository(Withdrawals::class)->findOneBy([
         'user_id' => $user->getId(),
         'is_verified' => false
      ]);

      if ($unverifiedWithdrawals) {
         return (float)$userBalance - $unverifiedWithdrawals->getUsdAmount();
      }
      if ($unverifiedDeposits) {
         return (float)$userBalance + $unverifiedDeposits->getUsdAmount();
      }
      return 0;
   }

}