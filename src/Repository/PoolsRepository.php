<?php

namespace App\Repository;

use App\Entity\Pools;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Pools>
 *
 * @method Pools|null find($id, $lockMode = null, $lockVersion = null)
 * @method Pools|null findOneBy(array $criteria, array $orderBy = null)
 * @method Pools[]    findAll()
 * @method Pools[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PoolsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pools::class);
    }

//    /**
//     * @return Pools[] Returns an array of Pools objects
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

//    public function findOneBySomeField($value): ?Pools
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
