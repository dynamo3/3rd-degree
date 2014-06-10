<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();



// Write SQL Statement
$sql = "SELECT * FROM restaurants WHERE zip_code=\"{$_POST['zip_code']}\" AND category=\"{$_POST['category']}\" ";

// Execute SQL Statement
$results = $db->execute($sql);


// print_r($_REQUEST);

// search through the database and pull the matching results

$response = [
    "results"=> []
];


while ($row = $results->fetch_assoc()) {
    $response['results'][] = $row;
}


echo json_encode($response);

?>