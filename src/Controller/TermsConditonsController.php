<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TermsConditonsController extends AbstractController
{
    #[Route('/terms', name: 'app_terms_conditons')]
    public function renderTerms(): Response
    {
        return $this->render('terms_conditons/index.html.twig');
    }

    #[Route('/privacy-policy', name: 'app_privacy')]
    public function renderPrivacy(): Response
    {
        return $this->render('privacy_policy/index.html.twig');
    }

    #[Route('/strategy-terms', name: 'app_strategy_terms')]
    public function renderStrategyTerms(): Response
    {
        return $this->render('strategy_terms/index.html.twig');
    }
}
