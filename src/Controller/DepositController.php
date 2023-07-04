<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Form\AddPendingDepositType;
use App\Services\AppServices;
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

class DepositController extends AbstractController
{

    #[Route('/deposit', name: 'app_deposit')]
    public function renderDeposit(): Response
    {
        return $this->render('deposit/deposit.html.twig');
    }

    #[Route('/deposit/deposit-details', name: 'app_deposit_details')]
    public function RenderDepositDetailsTemplate(Request $request, AppServices $appServices): Response
    {
        //get usdDeposit and gbpDeposit from session
      $session = $request->getSession();
      $deposit = new Deposits();
      $gbpDeposit = $session->get('gbpDeposit');
      $usdDeposit = $session->get('usdDeposit');

      $form = $this->createForm(AddPendingDepositType::class, $deposit);
      $form->handleRequest($request);

        //if form is submitted and valid
      if ($form->isSubmitted() && $form->isValid()) {
         //if session variable gbpDeposit is set
         if ($gbpDeposit) {
             try {
                $appServices->buildAndPersistTransaction($deposit, $gbpDeposit, $usdDeposit);
                $appServices->buildAndSendEmail('deposit', $deposit, $sc=null, $ac=null);
             } catch (TransportExceptionInterface | Exception $e) {
                return new Response('An error occurred: ' . $e->getMessage(), 500);
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
        //if session variable gbpDeposit is set
        if (!$request->getSession()->has('gbpDeposit')) {
            return $this->redirectToRoute('app_deposit');
        }

        //remove gbpDeposit and usdDeposit session variables
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
    public function createDeposit(Request $request, AppServices $appServices): JsonResponse
    {
        $session = $request->getSession();
        $parameters = json_decode($request->getContent(), true);
        $data = $appServices->getGeckoData($this->getParameter('gecko_api'));

        //remove commas from gbpDepositAmount param.
        $cleanGbpParam = str_replace( ',', '', $parameters['gbpDepositAmount'] );
        $usdSum = ($cleanGbpParam / $data['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp']) * $this->getParameter('deposit_fee');
        $formatUsd = round($usdSum, 2);

        //set session variables
        $session->set('gbpDeposit', $parameters['gbpDepositAmount']);
        $session->set('usdDeposit', $formatUsd);

        //create variables
        list($gbp, $usd) = [$session->get('gbpDeposit'), addZeroToValue($formatUsd)];

        //return a json response
        return new JsonResponse([
            'message' => 'success',
            'gbp' => $gbp,
            'usd' => $usd,
        ]);
    }

}
