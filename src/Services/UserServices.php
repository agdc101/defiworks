<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;

class UserServices extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private RequestStack $requestStack;

    public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack)
    {
        $this->entityManager = $entityManager;
        $this->requestStack = $requestStack;
    }

    public function removeUser(): void
    {
        $user = $this->getUser();
        $this->entityManager->remove($user);
        $this->entityManager->flush();

        $request = $this->requestStack->getCurrentRequest();
        $session = $request->getSession();
        $session->invalidate();
        $this->container->get('security.token_storage')->setToken(null);
    }
}
