<?php

use Symfony\Component\HttpClient\HttpClient;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
function getReaperApy($apiAddress, $commission) : array
{
    $client = HttpClient::create();
    $response = $client->request('GET', $apiAddress);

    // if response is not 404, return status code
    if ($response->getStatusCode() !== 200) {
        return [
            'statusCode' => $response->getStatusCode()
        ];
    } else {
        $responseData = $response->toArray()['data'];
        $responseApy = end($responseData)['apy']*$commission;
        return [
            'responseApy' => $responseApy,
            'responseData' => $responseData,
            'statusCode' => $response->getStatusCode()
        ];
    }
}
