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
use App\Entity\StrategyApy; 
use App\Entity\LiveApyLog;
use App\Repository\StrategyApyRepository;
use App\Repository\LiveApyLogRepository;

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
    public function renderDashboard(Request $request, AppServices $appServices, DashboardServices $dashboardServices, StrategyApyRepository $strategyApyRepository, LiveApyLogRepository $liveApyLogRepository ): Response
    {
      $session = $request->getSession();

      if (!$session->get('yieldApy')) {
         $responseApy = $strategyApyRepository->getCurrentApy();
         $session->set('yieldApy', $responseApy);
      }
      $apy = $session->get('yieldApy');

      $user = $appServices->getUserOrThrowException();
      $userBalance = number_format($user->getBalance(), 3);

      $pendingBalance = $dashboardServices->getPendingBalance();
      $profit = number_format($user->getProfit(), 3);
      
      if ($user->getCurrentProfit() > 0) {
         $growth = ($user->getCurrentProfit() / str_replace(',', '', $userBalance)) * 100;
      } else {
         $growth = 0;
      }

      if (!isset($_COOKIE['liveApy'])) {
         $liveApy = $liveApyLogRepository->returnLatestLog()->getApy();
         setcookie('liveApy', $liveApy, time() + 1800, "/");
         $liveApyCookie = $liveApy; // Set the variable here as well
      } else {
         $liveApyCookie = $_COOKIE['liveApy'];
      }
      
      // Get the most recent entry for the strategy APY table
      $currentYieldLogData = $strategyApyRepository->returnLatestlog();

      // add $session->get('apy') to the $userBalance
      $projectedBalance = str_replace(',', '', $userBalance) * (1 + $apy / 100);

      $tvl = round($appServices->getSiteTVL(), 2);

      return $this->render('dashboard/dashboard.html.twig', [
         'user' => $user->getFirstName(),
         'liveApy' => $liveApyCookie,
         'yieldApy' => $session->get('yieldApy'),
         'balance' => $userBalance,
         'pendingBalance' => $appServices->addZeroToValue($pendingBalance),
         'profit' => $profit,
         'growth' => round($growth, 2),
         'tvl' => $tvl,
         'projectedBalance' => number_format($projectedBalance, 3),
         'weekAvg' => $currentYieldLogData->getWeekAvg(),
         'monthAvg' => $currentYieldLogData->getMonthAvg(),
         'yearAvg' => $currentYieldLogData->getYear1Avg()
      ]);
    }

}
