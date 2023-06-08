<?php
//variables
$servername = "localhost";
$username = "root";
$password = "jupiter68";
$dbname = "defiworks";
$apyValue='5';
$nexApy = 11;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$url = "https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e0040488f97f";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);
//default is 3% if no APY is returned from API

if ($response !== false) {
    $data = json_decode($response, true);

    if (is_array($data)) {
        $lastObject = end($data);

        $lastArray = end($lastObject);
        $lastArray = prev($lastObject);

        if (isset($lastArray['apy'])) {
            $apyValue = $lastArray['apy'];

        } else {
            // Handle missing 'apy' key
            echo "Missing 'apy' key in the last array.";
        }

    }
} else {
    // Handle error
    echo "Failed to retrieve data.";
}



//select all deposit records with a timestamp of today
$depositSql = "SELECT * FROM Deposits WHERE DATE(timestamp) = CURDATE()";
$depositResult = $conn->query($depositSql);

//convert $depositResult to array
$depositArray = $depositResult->fetch_all(MYSQLI_ASSOC);
//echo each deposit record
foreach ($depositArray as $deposit) {
    echo " - usd_amount: " . $deposit["usd_amount"] . " - timestamp: " . $deposit["timestamp"];
    //add dailyApy to each deposit record
}



$totalApy = (($apyValue + $nexApy) / 2) * 0.85;
$dailyApy = $totalApy / 365;

//add dailyApy to all balances
$apySql = "UPDATE User SET balance = FLOOR((balance + ($dailyApy / 100 * balance)) * 100) / 100";
$apyResult = $conn->query($apySql);




