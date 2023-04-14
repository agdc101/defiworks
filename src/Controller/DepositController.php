<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DepositController extends AbstractController
{
    #[Route('/deposit', name: 'app_deposit')]
    public function index(): Response
    {
        return $this->render('deposit/deposit.html.twig', [
            'controller_name' => 'DepositController',
        ]);
    }
}
