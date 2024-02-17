<?php

namespace App\Controller;

use App\Exceptions\UserNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
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
    public function renderDashboard(Request $request, AppServices $appServices, DashboardServices $dashboardServices): Response
    {
      $session = $request->getSession();

      if (!$session->get('apy')) {
         $responseApy = $appServices->getApy();
         $session->set('apy', reset($responseApy));
      }
      $user = $appServices->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);

      $pendingBalance = $dashboardServices->getPendingBalance();
      $profit = number_format($user->getProfit(), 3);
      if ($user->getCurrentProfit() > 0) {
         $growth = ($user->getCurrentProfit() / $userBalance) * 100;
      } else {
         $growth = 0;
      }
      
      $data = $appServices->getVaultData();
      $apyAverages = $dashboardServices->getAverageApy($data['responseData']);
      
      $tvl = round($appServices->getSiteTVL(), 2);

      return $this->render('dashboard/dashboard.html.twig', [
         'user' => $user->getFirstName(),
         'liveApy' => $session->get('apy'),
         'balance' => $userBalance,
         'pendingBalance' => $appServices->addZeroToValue($pendingBalance),
         'profit' => $profit,
         'growth' => round($growth, 2),
         'tvl' => $tvl,
         'threeMonthAverage' => $apyAverages['threeMonthAverage']
      ]);
    }

}
