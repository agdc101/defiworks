<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin/confirm-deposit/{slug}', name: 'app_admin')]
    public function confirmDeposit(int $slug = 0): Response
    {
        return $this->render('admin/admin.html.twig', [
            'slug' => $slug,
        ]);
    }
}
