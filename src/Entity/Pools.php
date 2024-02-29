<?php

namespace App\Entity;

use App\Repository\PoolsRepository;
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

    #[ORM\Column]
    private ?bool $isEnabled = null;

    #[ORM\Column]
    private ?int $poolApy = null;

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

    public function isIsEnabled(): ?bool
    {
        return $this->isEnabled;
    }

    public function setIsEnabled(bool $isEnabled): static
    {
        $this->isEnabled = $isEnabled;

        return $this;
    }

    public function getPoolApy(): ?int
    {
        return $this->poolApy;
    }

    public function setPoolApy(int $poolApy): static
    {
        $this->poolApy = $poolApy;

        return $this;
    }
}
