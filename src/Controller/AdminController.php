<?php

namespace App\Controller;

use App\Entity\Deposits;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin/confirm-deposit/{slug}', name: 'app_admin')]
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

        return $this->render('admin/admin.html.twig', [
            'slug' => $slug,
            'depositAmount' => $deposit->getGbpAmount()
        ]);
    }

}
