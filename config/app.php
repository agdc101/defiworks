<?php
$servername = "localhost";
$username = "root";
$password = "jupiter68";
$dbname = "defiworks";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "SELECT * FROM Deposits";
$result = $conn->query($sql);

//if ($result->num_rows > 0) {
//    while ($row = $result->fetch_assoc()) {
//        echo " " . $row['usd_amount'] . " ";
//    }
//} else {
//    echo "No users found";
//}

$url = "https://yields.llama.fi/chart/b65aef64-c153-4567-9d1a-e0040488f97f";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);
//default is 3% if no APY is returned from API
$apyValue='5';

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

echo  " " . "APY: " . $apyValue;


