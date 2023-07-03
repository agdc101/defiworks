<?php

namespace App\Services;

use App\Entity\User;
use App\Exceptions\UserNotFoundException;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class UserServices
{
   private EntityManagerInterface $entityManager;
   private RequestStack $requestStack;
   private UserRepository $userRepository;

   public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, UserRepository $userRepository)
   {
      $this->entityManager = $entityManager;
      $this->requestStack = $requestStack;
      $this->userRepository = $userRepository;
   }


   /**
    * @throws UserNotFoundException
    */
   public function removeUser(): void
   {
      $user = $this->userRepository->findAuthenticatedUser();
      if (!$user instanceof User) {
         throw new UserNotFoundException('User not found');
      }
      $this->entityManager->remove($user);
      $this->entityManager->flush();

      $request = $this->requestStack->getCurrentRequest();
      $request->getSession()->invalidate();

   }
}
