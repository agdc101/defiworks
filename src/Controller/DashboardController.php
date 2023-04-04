<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $client = HttpClient::create();
        $response = $client->request('GET', $this->getParameter('llama_api'));
        if ($response->getStatusCode() !== 200) {
            return $this->render('dashboard/index.html.twig');
        }
        // convert to array and get data.
        $responseData = $response->toArray()['data'];
        // get last/most recent object and extract apy
        $responseApy = end($responseData)['apy']*$this->getParameter('commission');

        return $this->render('dashboard/index.html.twig', [
            'user' => $this->getUser()->getFirstName(),
            'apy' => $responseApy
        ]);
    }
}
