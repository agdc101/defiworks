<?php

namespace App\Controller;
use App\Entity\Withdrawals;
use App\Form\WithdrawDetailsType;
use App\Services\UserServices;
use App\Services\WithdrawServices;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class WithdrawalController extends AbstractController
{
   /**
    * @throws Exception
    */
   #[Route('/withdraw', name: 'app_withdraw')]

    public function RenderWithdrawal(WithdrawServices $withdrawServices): Response
    {
      $userBalance = $withdrawServices->getFormattedBalance();
      return $this->render('withdrawal/withdraw.html.twig', [
         'maxWithdraw' => addZeroToValue($userBalance)
      ]);
    }

    #[Route('/withdraw/withdraw-details', name: 'app_withdraw_details')]
    public function RenderWithdrawDetailsTemplate(Request $request): Response
    {
      //get current session
      $session = $request->getSession();
      $form = $this->createForm(WithdrawDetailsType::class);
      $form->handleRequest($request);

      //if form is submitted and valid
      if ($form->isSubmitted() && $form->isValid()) {
         //get form data
         $data = $form->getData();
         //add form data to session
         $session->set('sortCode', $data['sort_code']);
         $session->set('accountNo', $data['account_number']);
         return $this->redirectToRoute('app_withdraw_confirm');
      }
      return $this->render('withdrawal/withdraw-details.html.twig', [
         'WithdrawDetailsForm' => $form->createView()
      ]);
    }

   /**
    * @throws Exception
    */
   #[Route('/withdraw/withdraw-confirm', name: 'app_withdraw_confirm')]
    public function RenderWithdrawConfirmTemplate(Request $request, MailerInterface $mailer, WithdrawServices $withdrawServices): Response
    {
      $session = $request->getSession();
      $gbp = $session->get('gbpWithdrawal');
      $usd = $session->get('usdWithdrawal');

      if ($request->isMethod('POST')) {
         try {
            $sc = $session->get('sortCode');
            $ac = $session->get('accountNo');
            $withdrawal = $withdrawServices->buildWithdrawal($usd, $gbp);
            $mailer->send($withdrawServices->buildAndSendEmail($sc, $ac, $withdrawal));

         } catch (TransportExceptionInterface $e) {
            return new Response('An error occurred: ' . $e->getMessage(), 500);
         }
         return $this->redirectToRoute('app_withdraw_success');
        }

        return $this->render('withdrawal/withdraw-confirm.html.twig', [
            'gbpWithdrawAmount' => $gbp,
            'usdWithdrawAmount' => $usd,
            'sortCode' => $session->get('sortCode'),
            'accountNo' => $session->get('accountNo')
        ]);

    }

    #[Route('/withdraw/withdraw-success', name: 'app_withdraw_success')]
    public function RenderWithdrawSuccessTemplate(Request $request): Response
    {
      //clear sort code and account number and usd and gbp withdrawal amounts from session
      $session = $request->getSession();
      $variableNames = ['sortCode', 'accountNo', 'usdWithdrawal', 'gbpWithdrawal'];
      foreach ($variableNames as $name) {
         $session->remove($name);
      }

      return $this->render('withdrawal/withdraw-success.html.twig');
    }

    #[Route('/create-withdrawal-session', methods: ['POST'])]
    public function ConvertUsdToGbp(Request $request): JsonResponse
    {
        $parameters = json_decode($request->getContent(), true);

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $this->getParameter('gecko_api'));
        $data = $response->toArray();
        $usd = $parameters['usdWithdrawAmount'];

        $cleanUsdParam = str_replace(',', '', round($usd,2));
        $gbpSum = ($cleanUsdParam * $data['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp']);
        $formatGbp = round($gbpSum, 2);

        $session = $request->getSession();
        $session->set('gbpWithdrawal', $formatGbp);
        $session->set('usdWithdrawal', round($usd, 2));

        //if cleanUsdParam is bigger than user balance, return false
        if ($cleanUsdParam > $this->getUser()->getBalance()) {
            $result = false;
        } else {
            $result = true;
        }

        return new JsonResponse([
            'result' => $result,
            'gbp' => $session->get('gbpWithdrawal'),
            'usd' => $cleanUsdParam
        ]);
    }

}
