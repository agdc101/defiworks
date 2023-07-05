<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Entity\User;
use App\Entity\Withdrawals;
use App\Exceptions\TransactionConfirmationException;
use App\Services\AdminServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
   /**
    * @throws TransactionConfirmationException
    */
   #[Route('/admin/confirm-deposit/{slug}')]
    public function confirmDeposit(EntityManagerInterface $entityManager, AdminServices $adminServices, int $slug = 0): Response
    {
      $deposit = $entityManager->getRepository(Deposits::class)->find($slug);
      $user = $entityManager->getRepository(User::class)->find($deposit->getUserId());

      $adminServices->verifyTransactionUpdateUserBalance('deposit', $deposit, $user);

      $entityManager->flush();

      return $this->render('admin/deposit-admin.html.twig', [
         'slug' => $slug,
         'depositAmount' => $deposit->getGbpAmount()
      ]);
    }

   /**
    * @throws TransactionConfirmationException
    */
   #[Route('/admin/confirm-withdraw/{slug}')]
    public function confirmWithdrawal(EntityManagerInterface $entityManager, AdminServices $adminServices, int $slug = 0): Response
    {
      $withdrawal = $entityManager->getRepository(Withdrawals::class)->find($slug);
      $user = $entityManager->getRepository(User::class)->find($withdrawal->getUserId());

      $adminServices->verifyTransactionUpdateUserBalance('withdraw', $withdrawal, $user);

      $entityManager->flush();

      return $this->render('admin/withdraw-admin.html.twig', [
         'slug' => $slug,
         'withdrawAmount' => $withdrawal->getGbpAmount()
      ]);
    }

}
