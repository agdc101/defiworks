<?php

namespace App\Repository;

use App\Entity\LiveApyLog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LiveApyLog>
 *
 * @method LiveApyLog|null find($id, $lockMode = null, $lockVersion = null)
 * @method LiveApyLog|null findOneBy(array $criteria, array $orderBy = null)
 * @method LiveApyLog[]    findAll()
 * @method LiveApyLog[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LiveApyLogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LiveApyLog::class);
    }

    public function returnLatestlog()
    {
        return $this->createQueryBuilder('l')
            ->orderBy('l.timestamp', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

}
