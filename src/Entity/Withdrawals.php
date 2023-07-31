<?php

namespace App\Entity;

use App\Repository\WithdrawalsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WithdrawalsRepository::class)]
class Withdrawals
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $user_id = null;

    #[ORM\Column(length: 255)]
    private ?string $user_email = null;

    #[ORM\Column]
    private ?float $gbp_amount = null;

    #[ORM\Column]
    private ?float $usd_amount = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $timestamp = null;

    #[ORM\Column]
    private ?bool $is_verified = null;

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

    public function getUserEmail(): ?string
    {
        return $this->user_email;
    }

    public function setUserEmail(string $user_email): self
    {
        $this->user_email = $user_email;

        return $this;
    }

    public function getGbpAmount(): ?string
    {
        return $this->gbp_amount;
    }

    public function setGbpAmount(string $gbp_amount): self
    {
        $this->gbp_amount = $gbp_amount;

        return $this;
    }

    public function getUsdAmount(): ?float
    {
        return $this->usd_amount;
    }

    public function setUsdAmount(float $usd_amount): self
    {
        $this->usd_amount = $usd_amount;

        return $this;
    }

    public function getTimestamp(): ?\DateTimeImmutable
    {
        return $this->timestamp;
    }

    public function setTimestamp(\DateTimeImmutable $timestamp): self
    {
        $this->timestamp = $timestamp;

        return $this;
    }

    public function isIsVerified(): ?bool
    {
        return $this->is_verified;
    }

    public function setIsVerified(bool $is_verified): self
    {
        $this->is_verified = $is_verified;

        return $this;
    }
}
