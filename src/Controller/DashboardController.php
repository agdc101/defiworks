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
        $llamaApi = $this->getParameter('llama_api');
        $commission = $this->getParameter('commission');
        $user = $this->getUser();
        $responseApy = getReaperApy($llamaApi, $commission);

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
        if ($unverifiedWithdrawals) {
            $pendingBalance = $user->getBalance() - $unverifiedWithdrawals->getUsdAmount();
        }
        if ($unverifiedDeposits) {
            $pendingBalance += $user->getBalance() + $unverifiedDeposits->getUsdAmount();
        }

        $hasPendingTransaction = $unverifiedDeposits || $unverifiedWithdrawals;

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $user->getFirstName(),
            'apy' => reset($responseApy),
            'balance' => $user->getBalance(),
            'hasPendingTransaction' => $hasPendingTransaction,
            'pendingBalance' => $pendingBalance
        ]);
    }

}
