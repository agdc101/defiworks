<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Form\AddPendingDepositType;
use App\Services\DepositServices;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;

class DepositController extends AbstractController
{

    #[Route('/deposit', name: 'app_deposit')]
    public function renderDeposit(): Response
    {
        return $this->render('deposit/deposit.html.twig');
    }

    #[Route('/deposit/deposit-details', name: 'app_deposit_details')]
    public function RenderDepositDetailsTemplate(Request $request, DepositServices $depositServices, MailerInterface $mailer): Response
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
                $depositServices->buildAndPersistDeposit($deposit, $gbpDeposit, $usdDeposit);
                $depositServices->buildAndSendEmail($deposit);
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

    #[Route('/create-deposit-session', methods: ['POST'])]
    public function createDeposit(Request $request): JsonResponse
    {
        //create session variable to store post request
        $session = $request->getSession();
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        //retrieve conversion rate from gecko api
        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $this->getParameter('gecko_api'));
        $data = $response->toArray();

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
