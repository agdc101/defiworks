<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    private MailerInterface $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    #[Route('/contact', name: 'app_contact')]
    public function renderContactPage( Request $request ): Response {

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //get data from form
            $data = $form->getData();

            $name = $data['name'];
            $email = $data['email'];
            $subject = $data['subject'];
            $message = $data['message'];

            try {
                $email = (new Email())
                    ->from($this->getParameter('admin_email'))
                    ->to($this->getParameter('admin_email'))
                    ->subject("Contact page enquiry - $subject")
                    ->html("$message <br> <br> Sent by: $name <br> Email: $email");

                $this->mailer->send($email);
                return $this->redirectToRoute('app_contact_success');

            } catch (TransportExceptionInterface $e) {
                return $this->redirectToRoute('app_contact_error');
            }

        }

        return $this->render('contact/contact.html.twig', [
            'contactForm' => $form->createView(),
        ]);
    }

    #[Route('/contact-success', name: 'app_contact_success')]
    public function renderContactSuccessPage( ): Response {

        return $this->render('contact/contact-sent.html.twig');
    }

    #[Route('/contact-error', name: 'app_contact_error')]
    public function renderContactErrorPage( ): Response {

        return $this->render('contact/contact-error.html.twig');
    }
}
