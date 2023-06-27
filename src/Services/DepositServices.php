<?php

use App\Entity\Deposits;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class DepositProcessor
{
    private $mailer;

    public function __construct(EntityManagerInterface $entityManager, MailerInterface $mailer)
    {
        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
    }

}
