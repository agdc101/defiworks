<?php

namespace App\Repository;

use App\Entity\PerformanceRates;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PerformanceRates>
 *
 * @method PerformanceRates|null find($id, $lockMode = null, $lockVersion = null)
 * @method PerformanceRates|null findOneBy(array $criteria, array $orderBy = null)
 * @method PerformanceRates[]    findAll()
 * @method PerformanceRates[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PerformanceRatesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PerformanceRates::class);
    }

//    /**
//     * @return PerformanceRates[] Returns an array of PerformanceRates objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PerformanceRates
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
