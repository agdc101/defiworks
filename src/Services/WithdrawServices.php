<?php

namespace App\Services;

use App\Entity\User;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WithdrawServices extends AbstractController
{
   private EntityManagerInterface $entityManager;

   public function __construct(EntityManagerInterface $entityManager)
      {
         $this->entityManager = $entityManager;
      }

    //get user balance and format it
   /**
    * @throws Exception
    */
   public function getFormattedBalance() : float
      {
        $user = $this->getUser();
        if($user instanceof User) {
            $userBalance = number_format($user->getBalance(), 3);
        } else {
           throw new Exception('User not found');
        }
        //round $userBalance down to 2 decimal places
        return floor($userBalance * 100) / 100;
      }

   /**
    * @throws Exception
    */
   //build new withdrawal object
   public function buildWithdrawal($usd, $gbp) : Withdrawals
    {
       $user = $this->getUser();
       $withdrawal = new Withdrawals();
       if ($user instanceof User) {
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
         throw new Exception('Error building withdrawal object. User not found.');
    }
}
