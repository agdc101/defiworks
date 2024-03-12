<?php

namespace App\Services;

use App\Exceptions\TransactionConfirmationException;

class AdminServices
{

   /**
    * @throws TransactionConfirmationException
    */
   public function verifyTransactionUpdateUserBalance($type, $transaction, $user) : void
   {
      if (!$transaction || $transaction->isIsVerified()) {
         throw new TransactionConfirmationException();
      }
      $transaction->setIsVerified(true);
      $user->setCurrentProfit(0);

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