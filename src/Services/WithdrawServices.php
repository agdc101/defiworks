<?php

namespace App\Services;
use App\Exceptions\UserNotFoundException;

class WithdrawServices
{
   private AppServices $appServices;

   public function __construct(AppServices $appServices)
   {
      $this->appServices = $appServices;
   }

   /**
    * @throws UserNotFoundException
    */
   //get user balance and format to 2 decimal places
   public function getFormattedBalance() : float
   {
      $user = $this->appServices->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);
      //round $userBalance down to 2 decimal places
      return floor($userBalance * 100) / 100;
   }

   /**
    * @throws UserNotFoundException
    */
   public function checkWithdrawalSum($usd) : bool
   {
      $user = $this->appServices->getUserOrThrowException();
      $userBalance = $user->getBalance();
      if ($usd > $userBalance) {
         return false;
      } else {
         return true;
      }
   }
}
