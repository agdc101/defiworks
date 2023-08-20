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

class RouteSubscriber implements EventSubscriberInterface
{
    private TokenStorageInterface $tokenStorage;
    private EntityManagerInterface $entityManager;

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

        if ((str_starts_with($pathInfo, '/withdraw') || str_starts_with($pathInfo, '/deposit')) && !str_ends_with($pathInfo, 'success')) {
           $token = $this->tokenStorage->getToken();

            if (!$session->get('userPin')) {
               $event->setResponse(new RedirectResponse($request->getUriForPath('/enter-pin')));
            } else {

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
                 $event->setResponse(new RedirectResponse($request->getUriForPath('/transaction-pending')));
               }
            }
        } else if (str_starts_with($pathInfo, '/dashboard')) {
            if (!$session->get('userPin')) {
                $event->setResponse(new RedirectResponse($request->getUriForPath('/enter-pin')));
            }
        }

         // Check if user has started a deposit or withdrawal
        if (str_starts_with($pathInfo, '/deposit') && (str_ends_with($pathInfo, 'details') || str_ends_with($pathInfo, 'success'))) {
           if (!$request->getSession()->has('gbpDeposit')) {
              $event->setResponse(new RedirectResponse($request->getUriForPath('/deposit')));
           }
        }

        if (str_starts_with($pathInfo, '/withdraw') && (str_ends_with($pathInfo, 'details') || str_ends_with($pathInfo, 'confirm'))) {
            if (!$request->getSession()->has('gbpWithdrawal')) {
                $event->setResponse(new RedirectResponse($request->getUriForPath('/withdraw')));
            }
        }

        // if $pathinfo is /enter-pin or /transaction-history and user is not verified redirect to login
        if (str_starts_with($pathInfo, '/enter-pin') || str_starts_with($pathInfo, '/transaction-history') || str_starts_with($pathInfo, '/user-account')) {
            $token = $this->tokenStorage->getToken();
            $user = $token->getUser();
            if (!$user->isVerified()) {
                $event->setResponse(new RedirectResponse($request->getUriForPath('/login')));
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
