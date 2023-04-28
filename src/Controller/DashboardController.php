<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        // getReaperApy is defined in helpers.php
        getReaperApy($this->getParameter('llama_api'), $this->getParameter('commission'));
        $responseApy = getReaperApy($this->getParameter('llama_api'), $this->getParameter('commission'));

        if (end($responseApy) !== 200) {
            return $this->render('homepage/index.html.twig');
        }

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $this->getUser()->getFirstName(),
            'apy' => reset($responseApy)
        ]);
    }
}
