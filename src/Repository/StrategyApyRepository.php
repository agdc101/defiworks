<?php

namespace App\Repository;

use App\Entity\StrategyApy;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<StrategyApy>
 *
 * @method StrategyApy|null find($id, $lockMode = null, $lockVersion = null)
 * @method StrategyApy|null findOneBy(array $criteria, array $orderBy = null)
 * @method StrategyApy[]    findAll()
 * @method StrategyApy[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StrategyApyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StrategyApy::class);
    }

//    /**
//     * @return StrategyApy[] Returns an array of StrategyApy objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?StrategyApy
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
