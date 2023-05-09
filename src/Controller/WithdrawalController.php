<?php

namespace App\Controller;

use App\Entity\Withdrawals;
use App\Form\AddPendingWithdrawalType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WithdrawalController extends AbstractController
{
    #[Route('/withdrawal', name: 'app_withdrawal')]
    public function renderWithdrawal(Request $request): Response
    {
        //new withdrawal
        $withdrawal = new Withdrawals();
        $form = $this->createForm(AddPendingWithdrawalType::class, $withdrawal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            dd($withdrawal);

            $cleanGbp = str_replace(',', '', $withdrawal->getGbpAmount());
            $cleanUsd = str_replace(',', '', $withdrawal->getUsdAmount());

            try {
                //set default values for deposit
                $deposit->setIsVerified(false)
                    ->setTimestamp(new DateTimeImmutable('now', new \DateTimeZone('Europe/London')))
                    ->setUserEmail($this->getUser()->getEmail())
                    ->setUserId($this->getUser()->getId())
                    ->setUsdAmount($cleanUsd)
                    ->setGbpAmount($cleanGbp);
            } catch (Exception) {
                return $this->render('error/error.html.twig');
            }
        }

        //get user balance
        $balance = $this->getUser()->getBalance();
        return $this->render('withdrawal/withdrawal.html.twig', [
            'maxWithdraw' => $balance,
            'AddPendingWithdrawalForm' => $form->createView(),
        ]);
    }
}
