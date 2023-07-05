<?php

namespace App\Services;

use App\Exceptions\UserNotFoundException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class UserServices
{
   private EntityManagerInterface $entityManager;
   private RequestStack $requestStack;
   private AppServices $appServices;

   public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, AppServices $appServices)
   {
      $this->entityManager = $entityManager;
      $this->requestStack = $requestStack;
      $this->appServices = $appServices;
   }

   /**
    * @throws UserNotFoundException
    */
   public function removeUser(): void
   {
      $user = $this->appServices->getUserOrThrowException();

      $this->entityManager->remove($user);
      $this->entityManager->flush();

      $request = $this->requestStack->getCurrentRequest();
      $request->getSession()->invalidate();
   }
}
