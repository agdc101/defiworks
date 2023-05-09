<?php

namespace App\Controller;
use App\Entity\Withdrawals;
use App\Form\AddPendingWithdrawalType;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class WithdrawalController extends AbstractController
{
    #[Route('/withdrawal', name: 'app_withdrawal')]
    public function renderWithdrawal(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer): Response
    {
        //new withdrawal
        $withdrawal = new Withdrawals();
        $form = $this->createForm(AddPendingWithdrawalType::class, $withdrawal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //add session variables to withdrawal
            $session = $request->getSession();

            $cleanGbp = str_replace(',', '', $session->get('gbpWithdrawal'));
            $cleanUsd = str_replace(',', '', $session->get('usdWithdrawal'));

            try {
                //set default values for deposit
                $withdrawal
                    ->setIsVerified(false)
                    ->setTimestamp(new \DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
                    ->setUserEmail($this->getUser()->getEmail())
                    ->setUserId($this->getUser()->getId())
                    ->setUsdAmount(floatval($cleanUsd))
                    ->setGbpAmount(floatval($cleanGbp));
            } catch (Exception) {
                return $this->render('error/error.html.twig');
            }

            $entityManager->persist($withdrawal);
            $entityManager->flush();

            try {
                //send email to admin to confirm deposit
                list($firstName, $lastName, $userEmail) = [$this->getUser()->getFirstName(), $this->getUser()->getLastName(), $this->getUser()->getEmail()];
                list($gbpAmount, $date, $withdrawalId) = [$withdrawal->getGbpAmount(), $withdrawal->getTimestamp(), $withdrawal->getId()];
                $dateString = $date->format('H:i:s Y-m-d');
                $email = (new Email())
                    ->from('admin@defiworks.co.uk')
                    ->to('admin@defiworks.co.uk')
                    ->subject('New Withdrawal Request')
                    ->html("$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString <br><br> confirm by going to <a href='http://localhost:8000/admin/confirm-deposit/$withdrawalId'>https://defiworks.co.uk/admin/confirm-deposit/$withdrawalId</a>");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }

            return $this->render('withdrawal/withdrawal-success.html.twig');
        }

        //get user balance
        $balance = $this->getUser()->getBalance();
        return $this->render('withdrawal/withdrawal.html.twig', [
            'maxWithdraw' => $balance,
            'AddPendingWithdrawalForm' => $form->createView(),
            'firstName' => $this->getUser()->getFirstName(),
            'lastName' => $this->getUser()->getLastName(),
        ]);
    }

    #[Route('/create-withdraw-session', methods: ['POST'])]
    public function createDeposit(Request $request): Response
    {
        //create session variable to store post request
        $session = $request->getSession();
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        //set session variables
        $session->set('gbpWithdrawal', $parameters['gbpWithdrawAmount']);
        $session->set('usdWithdrawal', $parameters['usdWithdrawAmount']);

        //create variables
        list($gbp, $usd) = [$session->get('gbpWithdraw'), $session->get('usdWithdraw')];

        //return a json response
        return $this->json([
            'message' => 'success',
            'requests' => "$gbp, $usd"
        ]);

    }
}
