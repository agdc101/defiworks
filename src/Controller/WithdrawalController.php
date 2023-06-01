<?php

namespace App\Controller;
use App\Entity\Withdrawals;
use App\Form\AddPendingWithdrawalType;
use App\Form\PinVerifyType;
use App\Form\WithdrawDetailsType;
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
    #[Route('/withdraw', name: 'app_withdraw')]
    public function RenderWithdrawal(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer): Response
    {
        //get current session
        $session = $request->getSession();
        //check if user pin exists in session
        if (!$session->get('userPin')) {
            return $this->redirectToRoute('app_pin');
        }

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

    #[Route('/withdraw/withdraw-details', name: 'app_withdraw_details')]
    public function RenderWithdrawDetailsTemplate(Request $request): Response
    {
        //get current session
        $session = $request->getSession();
        //check if user pin exists in session
        if (!$session->get('userPin')) {
            return $this->redirectToRoute('app_pin');
        }

        $form = $this->createForm(WithdrawDetailsType::class);
        $form->handleRequest($request);

        //if form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            //get form data
            $data = $form->getData();

            [$sortCode, $accountNo] = [$data['sort_code'], $data['account_number']];

            return $this->redirectToRoute('app_withdraw_confirm');
        }

        //return a json response
        return $this->render('withdrawal/withdraw-details.html.twig', [
            'WithdrawDetailsForm' => $form->createView()
        ]);

    }

    #[Route('/withdraw/withdraw-confirm', name: 'app_withdraw_confirm')]
    public function RenderWithdrawConfirmTemplate(Request $request): Response
    {

        //return a json response
        return $this->render('withdrawal/withdraw-confirm.html.twig');

    }

    #[Route('/create-withdrawal-session', methods: ['POST'])]
    public function ConvertUsdToGbp(Request $request): Response
    {
        $parameters = json_decode($request->getContent(), true);

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $this->getParameter('gecko_api'));
        $data = $response->toArray();

        $cleanUsdParam = str_replace(',', '', $parameters['usdWithdrawAmount']);
        $gbpSum = ($cleanUsdParam * $data['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp']) * $this->getParameter('fee');
        $formatGbp = round($gbpSum, 2);

        $session = $request->getSession();
        $session->set('gbpWithdrawal', $formatGbp);
        $session->set('usdWithdrawal', $parameters['usdWithdrawAmount']);

        return $this->json([
            'message' => 'success',
            'gbp' => $session->get('gbpWithdrawal'),
            'usd' => $cleanUsdParam
        ]);
    }

    #[Route('/enter-pin', name:'app_pin')]
    public function renderPinTemplate(Request $request): Response
    {
        $form = $this->createForm(PinVerifyType::class);
        $form->handleRequest($request);

        //if form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            //get pin from form

            $session = $request->getSession();

            $userPin = $this->getUser()->getUserPin();
            $pin = $form->get('pin')->getData();

            if ($pin === $userPin) {
                $session->set('userPin', true);
                $this->addFlash('success_pin', 'Pin Accepted');
                return $this->redirectToRoute('app_withdraw');
            } else {
                $this->addFlash('error', 'Incorrect Pin');
                return $this->redirectToRoute('app_pin');
            }
        }

        return $this->render('withdrawal/confirm-pin.html.twig', [
            'PinForm' => $form->createView()
        ]);

    }

}
