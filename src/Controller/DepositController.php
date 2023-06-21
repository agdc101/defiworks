<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Form\AddPendingDepositType;
use DateTimeImmutable;
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
        //render deposit template - if form is not submitted
        return $this->render('deposit/deposit.html.twig');
    }

    #[Route('/deposit/deposit-details', name: 'app_deposit_details')]
    public function RenderDepositDetailsTemplate(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer): Response
    {
        //get usdDeposit and gbpDeposit from session
        $session = $request->getSession();
        $deposit = new Deposits();
        $gbpDeposit = $session->get('gbpDeposit');

        $form = $this->createForm(AddPendingDepositType::class, $deposit);
        $form->handleRequest($request);

        //if form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            //if session variable gbpDeposit is set
            if ($session->get('gbpDeposit')) {

                $cleanGbp = str_replace(',', '', $session->get('gbpDeposit'));
                $cleanUsd = str_replace(',', '', $session->get('usdDeposit'));
                try {
                    //set default values for deposit
                    $deposit
                        ->setIsVerified(false)
                        ->setTimestamp(new DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
                        ->setUserEmail($this->getUser()->getEmail())
                        ->setUserId($this->getUser()->getId())
                        ->setGbpAmount($cleanGbp)
                        ->setUsdAmount($cleanUsd);
                } catch (Exception) {
                    return $this->render('error/error.html.twig');
                }
            }

            $entityManager->persist($deposit);
            $entityManager->flush();
            try {
                //send email to admin to confirm deposit
                list($firstName, $lastName, $userEmail) = [$this->getUser()->getFirstName(), $this->getUser()->getLastName(), $this->getUser()->getEmail()];
                list($gbpAmount, $usdAmount, $date, $depositId) = [$deposit->getGbpAmount(), $deposit->getUsdAmount(), $deposit->getTimestamp(), $deposit->getId()];
                $dateString = $date->format('H:i:s Y-m-d');
                $email = (new Email())
                    ->from('admin@defiworks.co.uk')
                    ->to('admin@defiworks.co.uk')
                    ->subject('New Deposit - Confirmation required')
                    ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount ($$usdAmount) at $dateString <br><br> confirm by going to <a href='http://localhost:8000/admin/confirm-deposit/$depositId'>https://defiworks.co.uk/admin/confirm-deposit/$depositId</a>");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }
            //add flash message
            $this->addFlash('gbp_amount', $gbpAmount);
            //redirect to deposit confirmation page
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
