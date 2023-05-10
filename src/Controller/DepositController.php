<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Form\AddPendingDepositType;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class DepositController extends AbstractController
{
    #[Route('/deposit', name: 'app_deposit')]
    public function renderDeposit(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer): Response
    {
        //check if user has a pending withdrawal
        $unverifiedDeposits = $entityManager->getRepository(Deposits::class)->findOneBy([
            'user_id' => $this->getUser()->getId(),
            'is_verified' => false
        ]);

        if ($unverifiedDeposits) {
            return $this->render('error/error.html.twig', [
                'PendingError' => 'You have a pending deposit request, please allow up to 24 hours for this to be confirmed and deployed.'
            ]);
        }

        $session = $request->getSession();
        $deposit = new Deposits();

        $form = $this->createForm(AddPendingDepositType::class, $deposit);
        $form->handleRequest($request);

        //if session variable gbpDeposit is set
        if ($session->get('gbpDeposit') && $session->get('usdDeposit')) {

            $cleanGbp = str_replace(',', '', $session->get('gbpDeposit'));
            $cleanUsd = str_replace(',', '', $session->get('usdDeposit'));

            try {
                //set default values for deposit
                $deposit
                    ->setIsVerified(false)
                    ->setTimestamp(new DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
                    ->setUserEmail($this->getUser()->getEmail())
                    ->setUserId($this->getUser()->getId())
                    ->setUsdAmount($cleanUsd)
                    ->setGbpAmount($cleanGbp);
            } catch (Exception) {
                return $this->render('error/error.html.twig');
            }
        }

        //if form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($deposit);
            $entityManager->flush();
            try {
                //send email to admin to confirm deposit
                list($firstName, $lastName, $userEmail) = [$this->getUser()->getFirstName(), $this->getUser()->getLastName(), $this->getUser()->getEmail()];
                list($gbpAmount, $date, $depositId) = [$deposit->getGbpAmount(), $deposit->getTimestamp(), $deposit->getId()];
                $dateString = $date->format('H:i:s Y-m-d');
                $email = (new Email())
                    ->from('admin@defiworks.co.uk')
                    ->to('admin@defiworks.co.uk')
                    ->subject('New Deposit - Confirmation required')
                    ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount at $dateString <br><br> confirm by going to <a href='http://localhost:8000/admin/confirm-deposit/$depositId'>https://defiworks.co.uk/admin/confirm-deposit/$depositId</a>");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }
            //add flash message
            $this->addFlash('gbp_amount', $gbpAmount);
            //redirect to deposit confirmation page
            return $this->redirectToRoute('app_deposit_confirmed');
        }
        //render deposit template - if form is not submitted
        return $this->render('deposit/deposit.html.twig', [
            'AddPendingDepositForm' => $form->createView(),
        ]);
    }

    #[Route('/deposit/deposit-confirmation', name: 'app_deposit_confirmed')]
    public function renderDepositConfirmationTemplate(): Response
    {
        return $this->render('deposit_confirmation/deposit-confirmation.html.twig');
    }

    #[Route('/create-deposit-session', methods: ['POST'])]
    public function createDeposit(Request $request): Response
    {
        //create session variable to store post request
        $session = $request->getSession();
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        //set session variables
        $session->set('gbpDeposit', $parameters['gbpDepositAmount']);
        $session->set('usdDeposit', $parameters['usdDepositAmount']);

        //create variables
        list($gbp, $usd) = [$session->get('gbpDeposit'), $session->get('usdDeposit')];

        //return a json response
        return $this->json([
            'message' => 'success',
            'requests' => "$gbp, $usd"
        ]);

    }
}
