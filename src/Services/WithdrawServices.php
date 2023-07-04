<?php

namespace App\Services;

use App\Entity\User;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;

class WithdrawServices
{
   private UserRepository $userRepository;

   public function __construct(UserRepository $userRepository)
   {
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
   public function checkWithdrawalSum($usd) : bool
   {
      $user = $this->getUserOrThrowException();
      $userBalance = $user->getBalance();
      if ($usd > $userBalance) {
         return false;
      } else {
         return true;
      }
   }
}
