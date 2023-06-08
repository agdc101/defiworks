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

// Initialize cURL
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($curl);
curl_close($curl);

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

//get the average APY of $nexAPY and $responseApy
$totalApy = (($apyValue + $nexApy) / 2) * 0.85;
$dailyApy = $totalApy / 365;

//for each user in the database
$userSql = "SELECT * FROM User";
$userResult = $conn->query($userSql);

//for each user in $userResult
while ($userRow = $userResult->fetch_assoc()) {
    //get the user's balance
    $userID = $userRow['id'];

    //get all deposits made today
    $depositSql = "SELECT * FROM Deposits WHERE DATE(timestamp) = CURDATE() AND user_id = $userID AND is_verified = 1";
    $depositResult = $conn->query($depositSql);
    $depositArray = $depositResult->fetch_all(MYSQLI_ASSOC);

    $depositSum = array_sum(array_column($depositArray, 'usd_amount'));

    //add dailyApy to all balances, excluding deposits made today
    $apySql = "UPDATE User SET balance = FLOOR((balance + ($dailyApy / 100 * (balance - $depositSum))) * 100) / 100 WHERE id = $userID";
    $apyResult = $conn->query($apySql);

}










