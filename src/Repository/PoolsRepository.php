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

    public function returnAllActivePools(): array
    {
        return $this->createQueryBuilder('p')
            ->Where('p.isEnabled = :val')
            ->setParameter('val', true)
            ->getQuery()
            ->getResult()
        ;
    }

    public function returnAllPools(): array
    {
        return $this->findAll();
    }
    

}
