<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ErrorController extends AbstractController
{
    #[Route('/transaction-pending', name: 'app_error')]
    public function index(): Response
    {
        return $this->render('pending_transaction_error/pending_transaction_error.html.twig');
    }
}
