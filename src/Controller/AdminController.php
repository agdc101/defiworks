<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Entity\User;
use App\Entity\Withdrawals;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin/confirm-deposit/{slug}')]
    public function confirmDeposit(EntityManagerInterface $entityManager, int $slug = 0): Response
    {
        //sql query to update deposit to verified
        $deposit = $entityManager->getRepository(Deposits::class)->find($slug);

        //if deposit is not found, throw error
        if (!$deposit) {
            throw $this->createNotFoundException(
                'No deposit found for id '.$slug
            );
        }
        $deposit->setIsVerified(true);
        //get user where deposit belongs to using user_id
        $user = $entityManager->getRepository(User::class)->find($deposit->getUserId());
        //get user balance and add deposit amount
        $user->setBalance($user->getBalance() + $deposit->getUsdAmount());

        $entityManager->flush();

        return $this->render('admin/deposit-admin.html.twig', [
            'slug' => $slug,
            'depositAmount' => $deposit->getGbpAmount()
        ]);
    }

    #[Route('/admin/confirm-withdraw/{slug}')]
    public function confirmWithdrawal(EntityManagerInterface $entityManager, int $slug = 0): Response
    {
        //sql query to update withdrawal to verified
        $withdrawal = $entityManager->getRepository(Withdrawals::class)->find($slug);

        //if deposit is not found, throw error
        if (!$withdrawal) {
            throw $this->createNotFoundException(
                'No withdraw found for id '.$slug
            );
        }
        $withdrawal->setIsVerified(true);
        //get user where deposit belongs to using user_id
        $user = $entityManager->getRepository(User::class)->find($withdrawal->getUserId());
        //get user balance and subtract withdrawal amount
        $user->setBalance($user->getBalance() - $withdrawal->getUsdAmount());

        //if user balance is less than 0.01 set balance to null
        if ($user->getBalance() < 0.01) {
            $user->setBalance(null);
        }

        $entityManager->flush();

        return $this->render('admin/withdraw-admin.html.twig', [
            'slug' => $slug,
            'withdrawAmount' => $withdrawal->getGbpAmount()
        ]);
    }

}
