<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StrategyApyRepository;
use App\Repository\LiveApyLogRepository;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class RootController extends AbstractController
{
   /**
    * @throws TransportExceptionInterface
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    */
   #[Route('/', name: 'app_home')]
    public function index(Request $request, StrategyApyRepository $strategyApyRepository, LiveApyLogRepository $liveApyLogRepository): Response
    {

      if (!isset($_COOKIE['liveApy'])) {
         $liveApy = $liveApyLogRepository->returnLatestLog()->getApy();
         setcookie('liveApy', $liveApy, time() + 1800, "/");
         $liveApyCookie = $liveApy; // Set the variable here as well
      } else {
         $liveApyCookie = $_COOKIE['liveApy'];
      }

      return $this->render('homepage/index.html.twig',
         ['liveApy' => $liveApyCookie]
      );
    }
}
