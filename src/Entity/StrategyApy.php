<?php

namespace App\Entity;

use App\Repository\StrategyApyRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StrategyApyRepository::class)]
class StrategyApy
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?float $apy = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $timestamp = null;

    #[ORM\Column(type: Types::FLOAT, nullable: true)]
    private ?float $month3Avg = null;

    #[ORM\Column(type: Types::FLOAT, nullable: true)]
    private ?float $month6Avg = null;

    #[ORM\Column(type: Types::FLOAT, nullable: true)]
    private ?float $year1Avg = null;

    #[ORM\Column(type: Types::FLOAT, nullable: true)]
    private ?float $weekAvg = null;

    #[ORM\Column(type: Types::FLOAT, nullable: true)]
    private ?float $monthAvg = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getApy(): ?float
    {
        return $this->apy;
    }

    public function setApy(float $apy): static
    {
        $this->apy = $apy;

        return $this;
    }

    public function getTimestamp(): ?\DateTimeInterface
    {
        return $this->timestamp;
    }

    public function setTimestamp(\DateTimeInterface $timestamp): static
    {
        $this->timestamp = $timestamp;

        return $this;
    }

    public function getMonth3Avg(): ?float
    {
        return $this->month3Avg;
    }

    public function setMonth3Avg(?float $month3Avg): static
    {
        $this->month3Avg = $month3Avg;

        return $this;
    }

    
    public function getMonth6Avg(): ?float
    {
        return $this->month6Avg;
    }

    public function setMonth6Avg(?float $month6Avg): static
    {
        $this->month6Avg = $month6Avg;

        return $this;
    }

    public function getYear1Avg(): ?float
    {
        return $this->year1Avg;
    }

    public function setYear1Avg(?float $year1Avg): static
    {
        $this->year1Avg = $year1Avg;

        return $this;
    }

    public function getWeekAvg(): ?float
    {
        return $this->weekAvg;
    }

    public function setWeekAvg(?float $weekAvg): static
    {
        $this->weekAvg = $weekAvg;

        return $this;
    }

    public function getMonthAvg(): ?float
    {
        return $this->monthAvg;
    }

    public function setMonthAvg(?float $monthAvg): static
    {
        $this->monthAvg = $monthAvg;

        return $this;
    }
}
