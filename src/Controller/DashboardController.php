<?php

namespace App\Controller;

use App\Exceptions\UserNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use App\Services\DashboardServices;
use App\Services\AppServices;

class DashboardController extends AbstractController
{
   /**
    * @throws TransportExceptionInterface
    * @throws UserNotFoundException
    * @throws ServerExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    * @throws RedirectionExceptionInterface
    */
   #[Route('/dashboard', name: 'app_dashboard')]
    public function renderDashboard(AppServices $appServices, DashboardServices $dashboardServices ): Response
    {
      $responseApy = getApy();
      $user = $appServices->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);

      $pendingBalance = $dashboardServices->getPendingBalance();
      $profit = number_format($user->getProfit(), 3);
      $growth = (($profit / $userBalance) * 100);

      return $this->render('dashboard/dashboard.html.twig', [
         'user' => $user->getFirstName(),
         'liveApy' => reset($responseApy),
         'balance' => $userBalance,
         'pendingBalance' => addZeroToValue($pendingBalance),
         'profit' => $profit,
         'growth' => round($growth, 2)
      ]);
    }

}
