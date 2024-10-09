<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Form\AddPendingDepositType;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;

class DepositController extends BaseController
{

    #[Route('/deposit', name: 'app_deposit')]
    public function renderDeposit(): Response
    {
        return $this->render('deposit/deposit.html.twig');
    }

    /**
    * @throws TransportExceptionInterface
    * @throws Exception
    */
    #[Route('/deposit/deposit-details', name: 'app_deposit_details')]
    public function RenderDepositDetailsTemplate(Request $request): Response
    {
      $session = $request->getSession();
      $deposit = new Deposits();
      $gbpDeposit = $session->get('gbpDeposit');
      $usdDeposit = $session->get('usdDeposit');

      $form = $this->createForm(AddPendingDepositType::class, $deposit);
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {
         if ($gbpDeposit) {
             try {
                $this->appServices->buildAndPersistTransaction($deposit, $gbpDeposit, $usdDeposit);
                $this->$appServices->buildAndSendEmail('deposit', $deposit, $sc=null, $ac=null);
             } catch (TransportExceptionInterface | Exception $e) {
                return new Response('An error occurred: ' . $e->getMessage());
             }
         }
         $this->addFlash('gbp_amount', $deposit->getGbpAmount());
         return $this->redirectToRoute('app_deposit_success');
      }

        return $this->render('deposit/deposit-details.html.twig', [
            'gbpDeposit' => $gbpDeposit,
            'AddPendingDepositForm' => $form->createView()
        ]);
    }

    #[Route('/deposit/deposit-success', name: 'app_deposit_success')]
    public function renderDepositConfirmationTemplate(Request $request): Response
    {
        if (!$request->getSession()->has('gbpDeposit')) {
            return $this->redirectToRoute('app_deposit');
        }
        $session = $request->getSession();
        $session->remove('gbpDeposit');
        $session->remove('usdDeposit');

        return $this->render('deposit/deposit-success.html.twig');
    }

   /**
    * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    */
   #[Route('/create-deposit-session', methods: ['POST'])]
    public function createDeposit(Request $request): JsonResponse
    {
        $session = $request->getSession();
        $parameters = json_decode($request->getContent(), true);
        $data = $this->appServices->getGeckoData($this->getParameter('gecko_api'));

        //remove commas from gbpDepositAmount param.
        $cleanGbpParam = str_replace( ',', '', $parameters['gbpDepositAmount'] );
        $usdSum = ($cleanGbpParam / $data['0xaf88d065e77c8cc2239327c5edb3a432268e5831']['gbp']) * $this->getParameter('fee');
        $formatUsd = number_format(round($usdSum, 2), 2);

        $session->set('gbpDeposit', $parameters['gbpDepositAmount']);
        $session->set('usdDeposit', $formatUsd);

        list($gbp, $usd) = [$session->get('gbpDeposit'), $this->appServices->addZeroToValue($formatUsd)];

        return new JsonResponse([
            'message' => 'success',
            'gbp' => $gbp,
            'usd' => $usd,
        ]);
    }

}
