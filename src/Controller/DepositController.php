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

    #[Route('/deposit/confirm-deposit', name: 'app_confirm_deposit')]
    public function renderDepositConfirm(): Response
    {
        return $this->render('confirm_deposit/confirm-deposit.html.twig');
    }

    #[Route('/deposit/deposit-confirmation', name: 'app_deposit_confirmation')]
    public function handleDepositConfirmation(Request $request, MailerInterface $mailer, EntityManagerInterface $entityManager): Response
    {
        $deposit = new Deposits();
        $form = $this->createForm(AddPendingDepositType::class, $deposit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($deposit);
            $entityManager->flush();

        }


        //send email to admin to confirm deposit
        try {
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
}
