<?php

namespace App\Services;

use App\Entity\Deposits;
use App\Entity\Withdrawals;
use App\Exceptions\UserNotFoundException;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
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
   public function getPendingBalance() : float {
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

   public function getAverageApys($data): array {
      $nexoApy = 11;
      $averages = [];
  
      $averages['threeMonthAverage'] = $this->calculateAverage($data, $nexoApy, 90);
      $averages['sixMonthAverage'] = $this->calculateAverage($data, $nexoApy, 180);
      $averages['twelveMonthAverage'] = $this->calculateAverage($data, $nexoApy, 365);
  
      return $averages;
   }


   /**
    * @throws DecodingExceptionInterface
    */
   private function calculateAverage($data, $nexoApy, $period): float {
      $d = [];
      for ($i = (count($data) - $period); $i < count($data); $i++) {
         if (isset($data[$i]['apy'])) {
            $d[] = (($data[$i]['apy'] + $nexoApy) / 2 * 0.85);
         } else {
            throw new DecodingExceptionInterface('Error decoding data, no APY data');
         }
      }

      return array_sum($d) / count($d);
   }

}