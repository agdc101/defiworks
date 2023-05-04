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
        return $this->render('withdrawal/withdrawal.html.twig', [
            'controller_name' => 'WithdrawalController',
        ]);
    }
}
