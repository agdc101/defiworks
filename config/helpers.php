<?php

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
/**
 * @throws TransportExceptionInterface
 * @throws ServerExceptionInterface
 * @throws RedirectionExceptionInterface
 * @throws DecodingExceptionInterface
 * @throws ClientExceptionInterface
 */
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

//if number has only 1 decimal place, add a 0 to the end
function addZeroToValue($value)
{
    $formatUsd = $value;
    if (strlen(substr(strrchr($value, "."), 1)) == 1) {
        $formatUsd = $value . '0';
    }
    return $formatUsd;
}
