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
        $responseApy = getApy();
        $user = $this->getUser();

        if (end($responseApy) !== 200) {
            return $this->render('homepage/index.html.twig');
        }

        $unverifiedDeposits = $entityManager->getRepository(Deposits::class)->findOneBy([
            'user_id' => $user->getId(),
            'is_verified' => false
        ]);

        $unverifiedWithdrawals = $entityManager->getRepository(Withdrawals::class)->findOneBy([
            'user_id' => $user->getId(),
            'is_verified' => false
        ]);

        $pendingBalance = 0;

        //limit $profit decimal places to 3
        $profit = number_format($user->getProfit(), 3);
        $userBalance = number_format($user->getBalance(), 3);

        //calculate pending balance according to unverified deposits and withdrawals
        if ($unverifiedWithdrawals) {
            $pendingBalance = $userBalance - $unverifiedWithdrawals->getUsdAmount();
        }
        if ($unverifiedDeposits) {
            $pendingBalance = (float)$userBalance + $unverifiedDeposits->getUsdAmount();
        }

        $hasPendingTransaction = $unverifiedDeposits || $unverifiedWithdrawals;

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $user->getFirstName(),
            'liveApy' => reset($responseApy),
            'balance' => $userBalance,
            'hasPendingTransaction' => $hasPendingTransaction,
            'pendingBalance' => $pendingBalance,
            'profit' => $profit,
        ]);
    }

}
