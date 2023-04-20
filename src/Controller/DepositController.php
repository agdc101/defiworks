<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class DepositController extends AbstractController
{
    #[Route('/deposit', name: 'app_deposit')]
    public function renderDeposit(): Response
    {
        return $this->render('deposit/deposit.html.twig');
    }

    #[Route('/deposit/confirm-deposit', name: 'app_confirm_deposit')]
    public function renderDepositConfirm(): Response
    {
        return $this->render('confirm_deposit/confirm-deposit.html.twig');
    }

    #[Route('/deposit/deposit-confirmation', name: 'app_deposit_confirmation')]
    public function renderDepositConfirmedMessage(MailerInterface $mailer): Response
    {
        //get deposit information
        $userEmail = $this->getUser()->getEmail();

        $email = (new Email())
            ->from('admin@defiworks.co.uk')
            ->to('admin@defiworks.co.uk')
            ->subject('New Deposit')
            ->text('Sending emails is fun again!')
            ->html("$userEmail has apparently made a new new deposit - test");

        $mailer->send($email);

        return $this->render('deposit_confirmation/deposit-confirmation.html.twig');
    }
}
