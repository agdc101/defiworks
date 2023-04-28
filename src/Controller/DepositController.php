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
    public function renderDeposit(): Response
    {
        return $this->render('deposit/deposit.html.twig');
    }

    #[Route('/deposit/confirm-deposit/{slug}', name: 'app_confirm_deposit')]
    public function renderDepositConfirm(Request $request, EntityManagerInterface $entityManager, MailerInterface $mailer, string $slug = 'null'): Response
    {
        $deposit = new Deposits();
        //create form to add deposit to database
        $form = $this->createForm(AddPendingDepositType::class, $deposit);
        $form->handleRequest($request);

        if ($slug !== 'null') {
            preg_match_all('/\d+(\.\d+)?/', $slug, $matches);
            list($gbpAmount, $usdAmount) = $matches[0];

            try {
                //set default values for deposit
                $deposit->setIsVerified(false)
                        ->setTimestamp(new DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
                        ->setUserEmail($this->getUser()->getEmail())
                        ->setUserId($this->getUser()->getId())
                        ->setUsdAmount($usdAmount)
                        ->setGbpAmount($gbpAmount);
            } catch (Exception) {
                return $this->render('error/error.html.twig');
            }
        } else {
            return $this->redirectToRoute('app_deposit');
        }

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
                    ->html("$firstName $lastName ($userEmail) has made a new deposit of £$gbpAmount at $dateString <br><br> confirm by going to <a href='https://defiworks.co.uk/admin/confirm-deposits/$depositId'>https://defiworks.co.uk/admin/confirm-deposits/$depositId</a>");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }

            //add flash message
            $this->addFlash('gbp_amount', $gbpAmount);

            //redirect to deposit confirmation page
            return $this->redirectToRoute('app_deposit_confirmed');
        }

        return $this->render('confirm_deposit/confirm-deposit.html.twig', [
            'AddPendingDepositForm' => $form->createView(),
        ]);
    }

    #[Route('/deposit/deposit-confirmation', name: 'app_deposit_confirmed')]
    public function renderDepositConfirmationTemplate(): Response
    {
        return $this->render('deposit_confirmation/deposit-confirmation.html.twig');
    }
}
