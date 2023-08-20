<?php

namespace App\Controller;

use App\Exceptions\UserNotFoundException;
use App\Form\UpdateUserDetailsType;
use App\Services\UserServices;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserAccountController extends AbstractController
{
    #[Route('/user-account', name: 'app_user_account')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UpdateUserDetailsType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('update_success', 'Your details have been updated successfully.');
        }

        return $this->render('user-account/user-account.html.twig', [
            'controller_name' => 'UserAccountController',
            'updateUserForm' => $form->createView(),
        ]);
    }

    #[Route('/user-account/close-user-account', name: 'app_close_user_account')]
    public function displayCloseLanding(): Response
    {
        return $this->render('user-account/close-account.html.twig');
    }


   /**
    * @throws NotFoundExceptionInterface
    * @throws UserNotFoundException
    * @throws ContainerExceptionInterface
    */
   #[Route('/user-account/close-user-account/confirm', name: 'app_close_user_account_confirm')]
    public function close(UserServices $userServices): Response
    {
        $userServices->removeUser();
        $this->container->get('security.token_storage')->setToken(null);

        $this->addFlash('account_closed', 'Sorry to see you go. Your account has been successfully closed.');

        return $this->redirectToRoute('app_home');
    }
}
