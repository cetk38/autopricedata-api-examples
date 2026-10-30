<?php
// Illustrative request: the endpoint and fields do not describe a live API.
$payload = file_get_contents(__DIR__ . '/request.json');

$ch = curl_init('https://api.example.com/v1/valuations');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . getenv('API_KEY'),
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);
$result = json_decode(curl_exec($ch), true);
curl_close($ch);

echo $result['market_reference']['value'], ' ', $result['business_offer']['amount'], PHP_EOL;
