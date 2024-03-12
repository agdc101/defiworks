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

    public function getAllData(): array
    {
        return $this->findAll();
    }

    public function returnLatestlog(): ?StrategyApy
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.timestamp', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
    
    public function getCurrentApy(): float
    {
       return $this->createQueryBuilder('s')
          ->select('s.apy')
          ->orderBy('s.timestamp', 'DESC')
          ->setMaxResults(1)
          ->getQuery()
          ->getSingleScalarResult();
 
    }


}
