<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RootController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // getReaperApy is defined in helpers.php
        $responseApy = getApy();

        dd($responseApy);

        if (end($responseApy) !== 200) {
          return $this->render('homepage/index.html.twig');
        }

        return $this->render('homepage/index.html.twig',
            ['liveApy' => reset($responseApy)]
        );
    }
}
