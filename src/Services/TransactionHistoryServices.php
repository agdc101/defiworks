<?php

namespace App\Services;

use App\Entity\Deposits;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;

class TransactionHistoryServices
{
   private EntityManagerInterface $entityManager;

   public function __construct(EntityManagerInterface $entityManager)
   {
      $this->entityManager = $entityManager;
   }

   public function getUserWithdrawals($userId) {
      return $this->entityManager->getRepository(Withdrawals::class)
         ->createQueryBuilder('w')
         ->where('w.user_id = :userId')
         ->setParameter('userId', $userId)
         ->getQuery()
         ->getResult();
   }

   public function getUserDeposits($userId) {
      return $this->entityManager->getRepository(Deposits::class)
         ->createQueryBuilder('w')
         ->where('w.user_id = :userId')
         ->setParameter('userId', $userId)
         ->getQuery()
         ->getResult();
   }

   public function convertEntityToArray($entity) : array
   {
      return [
         'id' => $entity->getId(),
         'usd_amount' => $entity->getUsdAmount(),
         'gbp_amount' => $entity->getGbpAmount(),
         'timestamp' => $entity->getTimestamp(),
         'is_verified' => $entity->isIsVerified(),
      ];
   }

   public function mapEntityToArray($entities) : array
   {
      $array = [];
      foreach ($entities as $entity) {
         $array[] = $this->convertEntityToArray($entity);
      }
      return $array;
   }

}