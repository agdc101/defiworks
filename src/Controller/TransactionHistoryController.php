<?php

namespace App\Controller;

use App\Exceptions\UserNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\AppServices;
use App\Services\TransactionHistoryServices;

class TransactionHistoryController extends AbstractController
{
   /**
    * @throws UserNotFoundException
    */
   #[Route('/transaction-history', name: 'app_transaction_history')]
   public function renderTransactionHistory(AppServices $appServices, TransactionHistoryServices $transactionHistoryServices): Response
   {
      $user = $appServices->getUserOrThrowException();
      $userId = $user->getId();

      // Get user withdrawals and deposits
      $userWithdrawals = $transactionHistoryServices->getUserWithdrawals($userId);
      $userDeposits = $transactionHistoryServices->getUserDeposits($userId);

      // Convert each entity to an array
      $userArrayDeposits = $transactionHistoryServices->mapEntityToArray($userDeposits);
      $userArrayWithdrawals = $transactionHistoryServices->mapEntityToArray($userWithdrawals);

      // dd($userArrayDeposits, $userArrayWithdrawals);

      return $this->render('transaction_history/transaction-history.html.twig', [
         'deposits' => $userArrayDeposits,
         'withdrawals' => $userArrayWithdrawals,
      ]);
   }
}
