<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WithdrawalController extends AbstractController
{
    #[Route('/withdrawal', name: 'app_withdrawal')]
    public function index(): Response
    {
        //get user balance
        $balance = $this->getUser()->getBalance();
        return $this->render('withdrawal/withdrawal.html.twig', [
            'maxWithdraw' => $balance,
        ]);
    }
}
