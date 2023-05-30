<?php

namespace App\Controller;
use App\Entity\Withdrawals;
use App\Form\AddPendingWithdrawalType;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use JetBrains\PhpStorm\NoReturn;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
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
        //check if userid has a pending withdrawal
        $unverifiedWithdrawals = $entityManager->getRepository(Withdrawals::class)->findOneBy([
            'user_id' => $this->getUser()->getId(),
            'is_verified' => false
        ]);

        if ($unverifiedWithdrawals) {
            return $this->render('error/error.html.twig', [
                'PendingError' => 'You have a pending withdrawal request, please allow 24 hours for it to be processed.'
            ]);
        }

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
                //get session variable sort code
                $sc = $session->get('sortCode');
                $ac = $session->get('accountNo');

                $dateString = $date->format('H:i:s Y-m-d');
                $email = (new Email())
                    ->from('admin@defiworks.co.uk')
                    ->to('admin@defiworks.co.uk')
                    ->subject('New Withdrawal Request')
                    ->html("$firstName $lastName ($userEmail) has made a withdrawal request of £$gbpAmount at $dateString <br/><br/> confirm by going to <a href='http://localhost:8000/admin/confirm-withdraw/$withdrawalId'>https://defiworks.co.uk/admin/confirm-withdraw/$withdrawalId</a><br/><br/>220590{$sc}{$ac}030292");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }

            return $this->render('withdrawal/withdrawal-success.html.twig');
        }

        return $this->render('withdrawal/withdrawal.html.twig', [
            'maxWithdraw' => $this->getUser()->getBalance(),
            'AddPendingWithdrawalForm' => $form->createView(),
            'firstName' => $this->getUser()->getFirstName(),
            'lastName' => $this->getUser()->getLastName(),
        ]);
    }

    #[Route('/create-withdrawal-session', methods: ['POST'])]
    public function createWithdraw(Request $request): Response
    {
        //create session variable to store post request
        $session = $request->getSession();
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $this->getParameter('gecko_api'));
        $data = $response->toArray();

        //remove commas from usd param.
        $cleanUsdParam = str_replace( ',', '', $parameters['usdWithdrawAmount'] );

        $gbpSum = ($cleanUsdParam * $data['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp']) * $this->getParameter('fee');
        $formatGbp = round($gbpSum, 2);

        //set session variables
        $session->set('gbpWithdrawal', $formatGbp);
        $session->set('usdWithdrawal', $parameters['usdWithdrawAmount']);

        //create variables
        list($gbp, $usd) = [$session->get('gbpWithdrawal'), $cleanUsdParam];

        //return a json response
        return $this->json([
            'message' => 'success',
            'gbp' => $gbp,
            'usd' => $usd,
        ]);

    }

    #[Route('/verify-withdrawal-amount', methods: ['POST'])]
    public function verifyWithdrawAmount(Request $request): Response
    {
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        //return a json response
        return $this->json([
            'message' => $parameters['usdWithdrawAmount']
        ]);

    }

    #[Route('/verify-pin', methods: ['POST'])]
    public function verifyPinNo(Request $request): Response
    {
        //get and decode post request
        $parameters = json_decode($request->getContent(), true);

        //set session variables
        $pin = $parameters['pinNo'];
        //get user pin
        $userPin = $this->getUser()->getUserPin();

        if ($pin != $userPin) {
            $response = 'fail';
        } else {
            $response = 'success';
        }
        //return a json response
        return $this->json([
            'message' => $response
        ]);

    }
}
