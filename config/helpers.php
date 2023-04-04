<?php

use Symfony\Component\HttpClient\HttpClient;

// get Apy% via Api request to Defi-llama, returns status code and result of the request
function getReaperApy($apiAddress, $commision) : array
{
    $client = HttpClient::create();
    $response = $client->request('GET', $apiAddress);

    // convert to array and get data.
    $responseData = $response->toArray()['data'];
    $responseApy = end($responseData)['apy']*$commision;
    // get last/most recent object and extract apy
    return [
        'responseApy' => $responseApy,
        'statusCode' => $response->getStatusCode()
    ];
}
