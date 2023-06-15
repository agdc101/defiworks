<?php

use Symfony\Component\HttpClient\HttpClient;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
function getApy() : array
{
    $nexAPY = 11;
    $commission = 0.85;
    $client = HttpClient::create();
    $response = $client->request('GET', 'https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e0040488f97f');
    $statusCode = $response->getStatusCode();

    // if response is not 404, return status code
    if ($statusCode !== 200) {
        return [
            'statusCode' => $statusCode
        ];
    } else {
        $responseData = $response->toArray()['data'];
        $responseApy = end($responseData)['apy'];
        $apy = prev($responseData)['apy'];

        if ($apy < 4.75) {
            $commission = 0.90;
        } else if ($apy > 6.75) {
            $commission = 0.80;
        }

        //the live apy. (get the average APY of $nexAPY and $responseApy)
        $avrResponseLiveApy = (($responseApy + $nexAPY) / 2)*$commission;

        //the past apy. (get the average APY of $lastAPY and $nexAPY)
        $avrPastApy = (($apy + $nexAPY) / 2)*$commission;

        return [
            'liveAPY' => $avrResponseLiveApy,
            'reaperApy' => $responseApy,
            'responseData' => $responseData,
            'yieldApy' => $avrPastApy,
            'commission' => $commission,
            'lastAPY' => $apy,
            'statusCode' => $statusCode
        ];
    }
}
