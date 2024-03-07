<?php

namespace App\Entity;

use App\Repository\PoolsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PoolsRepository::class)]
class Pools
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $poolId = null;

    #[ORM\Column(length: 255)]
    private ?string $poolName = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $poolApy = null;

    #[ORM\Column]
    private ?bool $isEnabled = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoolId(): ?string
    {
        return $this->poolId;
    }

    public function setPoolId(string $poolId): static
    {
        $this->poolId = $poolId;

        return $this;
    }

    public function getPoolName(): ?string
    {
        return $this->poolName;
    }

    public function setPoolName(string $poolName): static
    {
        $this->poolName = $poolName;

        return $this;
    }

    public function getPoolApy(): ?float
    {
        return $this->poolApy;
    }

    public function setPoolApy(float $poolApy): static
    {
        $this->poolApy = $poolApy;

        return $this;
    }

    public function getIsEnabled(): ?bool
    {
        return $this->isEnabled;
    }

    public function setIsEnabled(bool $isEnabled): static
    {
        $this->isEnabled = $isEnabled;

        return $this;
    }

}
