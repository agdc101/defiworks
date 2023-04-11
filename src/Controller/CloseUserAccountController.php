<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CloseUserAccountController extends AbstractController
{
    #[Route('/close/user/account', name: 'app_close_user_account')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $entityManager->remove($user);
        $entityManager->flush();

        $this->addFlash('account_closed', 'Sorry to see you go. Your account has been successfully closed.');

        return $this->redirectToRoute('app_home');
    }
}
