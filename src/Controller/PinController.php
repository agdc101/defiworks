<?php

namespace App\Controller;

use App\Form\PinVerifyType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PinController extends AbstractController
{
    #[Route('/enter-pin', name:'app_pin')]
    public function renderPinTemplate(Request $request): Response
    {
        $user = $this->getUser();
        if (!$user->isVerified()) {
            return $this->redirectToRoute('app_login');
        }

        $form = $this->createForm(PinVerifyType::class);
        $form->handleRequest($request);

        //if form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            //get pin from form

            $session = $request->getSession();

            $userPin = $this->getUser()->getUserPin();
            $pin = $form->get('pin')->getData();

            if ($pin === $userPin) {
                $session->set('userPin', true);
                $this->addFlash('success_pin', 'Pin Accepted');
                return $this->redirectToRoute('app_dashboard');
            } else {
                $this->addFlash('pending_transaction_error', 'Incorrect Pin');
                return $this->redirectToRoute('app_pin');
            }
        }

        return $this->render('pin/confirm-pin.html.twig', [
            'PinForm' => $form->createView()
        ]);

    }
}
