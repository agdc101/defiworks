<?php

namespace App\EventSubscriber;

use App\Entity\Deposits;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class WithdrawSubscriber implements EventSubscriberInterface
{
    private $tokenStorage;
    private $entityManager;

    public function __construct(TokenStorageInterface $tokenStorage, EntityManagerInterface $entityManager)
    {
        $this->tokenStorage = $tokenStorage;
        $this->entityManager = $entityManager;
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        $session = $request->getSession();
        $pathInfo = $request->getPathInfo();

        if (str_starts_with($pathInfo, '/withdraw') || str_starts_with($pathInfo, '/deposit')) {
            if (!$session->get('userPin')) {
                $event->setResponse(new RedirectResponse($request->getUriForPath('/enter-pin')));
            } else {
                $token = $this->tokenStorage->getToken();

                if (!$token) {
                    // Redirect or handle the case when no user token is available
                    $event->setResponse(new RedirectResponse($request->getUriForPath('/login')));
                    return;
                }

                $user = $token->getUser();
                $userId = $user?->getId();

                // Check if user has a pending withdrawal
                $unverifiedWithdrawals = $this->entityManager->getRepository(Withdrawals::class)->findOneBy([
                    'user_id' => $userId,
                    'is_verified' => false
                ]);

                // Check if user has a pending withdrawal
                $unverifiedDeposits = $this->entityManager->getRepository(Deposits::class)->findOneBy([
                    'user_id' => $userId,
                    'is_verified' => false
                ]);

                if ($unverifiedWithdrawals || $unverifiedDeposits) {
                    $event->setResponse(new RedirectResponse($request->getUriForPath('/transaction-error')));
                }
            }
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}