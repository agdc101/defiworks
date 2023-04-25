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

        try {
            //set default values for deposit
            $deposit->setIsVerified(false);
            $deposit->setTimestamp(new DateTimeImmutable('now', new \DateTimeZone('Europe/London')));
            $deposit->setUserEmail($this->getUser()->getEmail());
            $deposit->setUserId($this->getUser()->getId());
            $deposit->setUsdAmount(120);
            $deposit->setGbpAmount(100);

        } catch (Exception) {
            return $this->render('error/error.html.twig');
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($deposit);
            $entityManager->flush();

            try {
                //send email to admin to confirm deposit
                $userEmail = $this->getUser()->getEmail();
                $date = new DateTimeImmutable('now', new \DateTimeZone('Europe/London'));
                $dateString = $date->format('H:i:s Y-m-d');
                $email = (new Email())
                    ->from('admin@defiworks.co.uk')
                    ->to('admin@defiworks.co.uk')
                    ->subject('New Deposit - Confirmation required')
                    ->html("$userEmail has made a new new deposit at $dateString");
                $mailer->send($email);

            } catch ( TransportExceptionInterface | Exception) {
                return $this->render('error/error.html.twig');
            }

            return $this->render('deposit_confirmation/deposit-confirmation.html.twig');
        }

        return $this->render('confirm_deposit/confirm-deposit.html.twig', [
            'AddPendingDepositForm' => $form->createView(),
        ]);
    }
}
