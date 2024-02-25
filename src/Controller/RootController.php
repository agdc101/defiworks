<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\AppServices;
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
    public function index(Request $request, AppServices $appServices): Response
    {
      $session = $request->getSession();
      if (!$session->get('apy')) {
         $responseApy = $appServices->getCurrentApy();
         $session->set('apy', $responseApy);
      }
      $liveApy = $session->get('apy');

      return $this->render('homepage/index.html.twig',
         ['liveApy' => $liveApy]
      );
    }
}
