<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Entity\Withdrawals;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function renderDashboard(EntityManagerInterface $entityManager): Response
    {
        // getReaperApy is defined in helpers.php
        $responseApy = getReaperApy($this->getParameter('llama_api'), $this->getParameter('commission'));

        if (end($responseApy) !== 200) {
            return $this->render('homepage/index.html.twig');
        }

        //check if user has a pending withdrawal
        $unverifiedDeposits = $entityManager->getRepository(Deposits::class)->findOneBy([
            'user_id' => $this->getUser()->getId(),
            'is_verified' => false
        ]);
        $hasPendingDeposit = false;
        if ($unverifiedDeposits) {
            $hasPendingDeposit = true;
        }

        //check if user has a pending withdrawal
        $unverifiedWithdrawals = $entityManager->getRepository(Withdrawals::class)->findOneBy([
            'user_id' => $this->getUser()->getId(),
            'is_verified' => false
        ]);
        $hasPendingWithdrawal = false;
        if ($unverifiedWithdrawals) {
            $hasPendingWithdrawal = true;
        }

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $this->getUser()->getFirstName(),
            'apy' => reset($responseApy),
            'balance' => $this->getUser()->getBalance(),
            'hasPendingDeposit' => $hasPendingDeposit,
            'hasPendingWithdrawal' => $hasPendingWithdrawal
        ]);
    }
}
