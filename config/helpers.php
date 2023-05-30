<?php

use Symfony\Component\HttpClient\HttpClient;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
function getReaperApy($apiAddress, $commision) : array
{
    $client = HttpClient::create();
    $response = $client->request('GET', $apiAddress);

    // if response is not 404, return status code
    if ($response->getStatusCode() !== 404) {
        $responseData = $response->toArray()['data'];
        $responseApy = end($responseData)['apy']*$commision;
        return [
            'responseApy' => $responseApy,
            'statusCode' => $response->getStatusCode()
        ];
    } else {
        return [
            'statusCode' => $response->getStatusCode()
        ];
    }
}
