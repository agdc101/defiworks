<?php

namespace App\Controller;

use App\Form\UpdateUserDetailsType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserAccountController extends AbstractController
{
    #[Route('/user-account', name: 'app_user_account')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(UpdateUserDetailsType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('update_success', 'Thank You. Your details have been updated.');
        }

        return $this->render('user-account/index.html.twig', [
            'controller_name' => 'UserAccountController',
            'updateUserForm' => $form->createView(),
        ]);
    }
}
