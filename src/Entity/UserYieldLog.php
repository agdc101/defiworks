<?php

namespace App\Entity;

use App\Repository\UserYieldLogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserYieldLogRepository::class)]
class UserYieldLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $user_id = null;

    #[ORM\Column(length: 510)]
    private ?string $log_result = null;

    #[ORM\Column]
    private ?float $original_balance = null;

    #[ORM\Column]
    private ?float $ineligible_deposits = null;

    #[ORM\Column]
    private ?float $valueAdded = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $timestamp = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getLogResult(): ?string
    {
        return $this->log_result;
    }

    public function setLogResult(string $log_result): self
    {
        $this->log_result = $log_result;

        return $this;
    }

    public function getOriginalBalance(): ?float
    {
        return $this->original_balance;
    }

    public function setOriginalBalance(float $original_balance): static
    {
        $this->original_balance = $original_balance;

        return $this;
    }

    public function getIneligibleDeposits(): ?float
    {
        return $this->ineligible_deposits;
    }

    public function setIneligibleDeposits(float $ineligible_deposits): static
    {
        $this->ineligible_deposits = $ineligible_deposits;

        return $this;
    }

    public function getValueAdded(): ?float
    {
        return $this->valueAdded;
    }

    public function setValueAdded(float $valueAdded): static
    {
        $this->valueAdded = $valueAdded;

        return $this;
    }

    public function getTimestamp(): ?\DateTimeInterface
    {
        return $this->timestamp;
    }

    public function setTimestamp(\DateTimeInterface $timestamp): self
    {
        $this->timestamp = $timestamp;

        return $this;
    }
}
