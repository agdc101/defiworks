<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ErrorController extends AbstractController
{
    #[Route('/transaction-error', name: 'app_error')]
    public function index(): Response
    {
        return $this->render('error/error.html.twig');
    }
}