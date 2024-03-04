<?php

namespace App\Controller;
use App\Entity\Withdrawals;
use App\Exceptions\UserNotFoundException;
use App\Form\WithdrawDetailsType;
use App\Services\AppServices;
use App\Services\WithdrawServices;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;

class WithdrawalController extends AbstractController
{
   /**
    * @throws UserNotFoundException
    */
   #[Route('/withdraw', name: 'app_withdraw')]

    public function RenderWithdrawal(WithdrawServices $withdrawServices, AppServices $appServices): Response
    {
      $userBalance = $withdrawServices->getFormattedBalance();
      $formattedBalance = number_format($userBalance, 3);
      return $this->render('withdrawal/withdraw.html.twig', [
         'maxWithdraw' => $appServices->addZeroToValue($formattedBalance)
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
    * @throws TransportExceptionInterface
    */
   #[Route('/withdraw/withdraw-confirm', name: 'app_withdraw_confirm')]
    public function RenderWithdrawConfirmTemplate(Request $request, AppServices $appServices): Response
    {
      $session = $request->getSession();
      $gbp = $session->get('gbpWithdrawal');
      $usd = $session->get('usdWithdrawal');
      $withdrawal = new Withdrawals();

      if ($request->isMethod('POST')) {
         $sc = $session->get('sortCode');
         $ac = $session->get('accountNo');

         $appServices->buildAndPersistTransaction($withdrawal, $gbp, $usd);
         $appServices->buildAndSendEmail('withdraw', $withdrawal, $sc, $ac);

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

   /**
    * @throws ServerExceptionInterface
    * @throws RedirectionExceptionInterface
    * @throws DecodingExceptionInterface
    * @throws ClientExceptionInterface
    * @throws UserNotFoundException|
    * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
    */
   #[Route('/create-withdrawal-session', methods: ['POST'])]
   public function ConvertUsdToGbp(Request $request, WithdrawServices $withdrawServices, AppServices $appServices): JsonResponse
   {
      $parameters = json_decode($request->getContent(), true);
      $data = $appServices->getGeckoData($this->getParameter('gecko_api'));

      $usd = str_replace(',', '', round($parameters['usdWithdrawAmount'],2));
      $gbpSum = ($usd * $data['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9']['gbp'] * $this->getParameter('fee'));
      $formatGbp = number_format(round($gbpSum, 2), 2);

      $session = $request->getSession();
      $session->set('gbpWithdrawal', $formatGbp);
      $session->set('usdWithdrawal', round($usd, 2));

      return new JsonResponse([
         'result' => $withdrawServices->checkWithdrawalSum($usd),
         'gbp' => $appServices->addZeroToValue($formatGbp),
         'usd' => $usd
      ]);
   }
}
