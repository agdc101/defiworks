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

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo " " . $row['usd_amount'] . " ";
    }
} else {
    echo "No users found";
}

