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
        $user = $this->getUser();
        $responseApy = getApy();

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
        $userBalance = $user->getBalance();

        //if user balances only has 1 decimal place, add a 0 to the end
        if (strlen(substr(strrchr($userBalance, "."), 1)) == 1) {
            $userBalance = $userBalance . "0";
        }

        //calculate pending balance according to unverified deposits and withdrawals
        if ($unverifiedWithdrawals) {
            $pendingBalance = $userBalance - $unverifiedWithdrawals->getUsdAmount();
        }
        if ($unverifiedDeposits) {
            $pendingBalance += $userBalance + $unverifiedDeposits->getUsdAmount();
        }

        $hasPendingTransaction = $unverifiedDeposits || $unverifiedWithdrawals;

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $user->getFirstName(),
            'liveApy' => reset($responseApy),
            'balance' => $userBalance,
            'hasPendingTransaction' => $hasPendingTransaction,
            'pendingBalance' => $pendingBalance
        ]);
    }

}
