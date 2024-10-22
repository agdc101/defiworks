<?php

namespace App\Controller;

use App\Exceptions\UserNotFoundException;
use App\Form\UpdateUserDetailsType;
use App\Services\UserServices;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ResetPasswordRequestRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\ResetPasswordRequest;

class UserAccountController extends BaseController
{
    #[Route('/user-account', name: 'app_user_account')]
    public function index(): Response
    {
        return $this->render('user-account/user-account.html.twig');
    }

    #[Route('/user-account/update-details', name: 'app_update_details')]
    public function displayUpdateDetailsTemplate(Request $request, EntityManagerInterface $entityManager): Response
    {

        $user = $this->appServices->getUserOrThrowException();
        $form = $this->createForm(UpdateUserDetailsType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('update_success', 'Your details have been updated successfully.');
        }

        return $this->render('user-account/update-details.html.twig', [
            'updateUserForm' => $form->createView()
        ]);
    }

    #[Route('/user-account/close-user-account', name: 'app_close_user_account')]
    public function displayCloseAccount(): Response
    {
        return $this->render('user-account/close-account.html.twig');
    }


   /**
    * @throws NotFoundExceptionInterface
    * @throws UserNotFoundException
    * @throws ContainerExceptionInterface
    */
   #[Route('/user-account/close-user-account/confirm', name: 'app_close_user_account_confirm')]
    public function close(UserServices $userServices, ResetPasswordRequestRepository $resetPasswordRequestRepository, EntityManagerInterface $entityManager): Response
    {
        $user = $this->appServices->getUserOrThrowException();

        $userPasswordRequest = $resetPasswordRequestRepository->findResetPasswordRequestByUserId($user->getId());  
        
        if ($userPasswordRequest) {
            $resetPasswordRequestRepository->remove($userPasswordRequest);
            $entityManager->flush();
        }

        $userServices->removeUser();
        $this->container->get('security.token_storage')->setToken(null);

        $this->addFlash('account_closed', 'Sorry to see you go. Your account has been successfully closed.');

        return $this->redirectToRoute('app_home');
    }
}
