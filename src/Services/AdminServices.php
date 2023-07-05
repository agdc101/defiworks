<?php

namespace App\Services;

use App\Entity\User;
use App\Exceptions\TransactionConfirmationException;
use Doctrine\ORM\EntityManagerInterface;

class AdminServices
{
   private EntityManagerInterface $entityManager;

   public function __construct(EntityManagerInterface $entityManager)
   {
      $this->entityManager = $entityManager;
   }

   /**
    * @throws TransactionConfirmationException
    */
   public function verifyTransactionUpdateUserBalance($type, $transaction, $user) : void
   {
      if (!$transaction || $transaction->isIsVerified()) {
         throw new TransactionConfirmationException();
      }
      $transaction->setIsVerified(true);

      if ($type === 'withdraw') {
         $user->setBalance($user->getBalance() - $transaction->getUsdAmount());
         if ($user->getBalance() < 0.01) {
            $user->setBalance(null);
         }
      } else {
         $user->setBalance($user->getBalance() + $transaction->getUsdAmount());
      }

   }

}