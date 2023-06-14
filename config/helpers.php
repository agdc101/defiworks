<?php

use Symfony\Component\HttpClient\HttpClient;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
function getApy($apiAddress, $commission) : array
{
    $client = HttpClient::create();
    $response = $client->request('GET', $apiAddress);
    $nexAPY = 11;

    // if response is not 404, return status code
    if ($response->getStatusCode() !== 200) {
        return [
            'statusCode' => $response->getStatusCode()
        ];
    } else {
        $responseData = $response->toArray()['data'];
        $responseApy = end($responseData)['apy'];
        prev($responseData)['apy'];
        $lastAPY = prev($responseData)['apy'];

        //the live apy. (get the average APY of $nexAPY and $responseApy)
        $avrResponseLiveApy = (($responseApy + $nexAPY) / 2)*$commission;

        //the past apy. (get the average APY of $lastAPY and $nexAPY)
        $avrPastApy = (($lastAPY + $nexAPY) / 2)*$commission;

        return [
            'responseApy' => $avrResponseLiveApy,
            'reaperApy' => $responseApy,
            'responseData' => $responseData,
            'yieldedApy' => $avrPastApy,
            'statusCode' => $response->getStatusCode()
        ];
    }
}
