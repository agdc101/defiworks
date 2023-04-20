<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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

    #[Route('/deposit//deposit-confirmation', name: 'app_deposit_confirmation')]
    public function renderDepositConfirmedMessage(): Response
    {
        return $this->render('confirm_deposit/confirm-deposit.html.twig');
    }
}
