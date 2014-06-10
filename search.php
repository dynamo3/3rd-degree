<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();



// Write SQL Statement
$sql = "SELECT * FROM restaurants as r, tweets as t WHERE r.zip_code=\"{$_POST['zip_code']}\" AND r.category=\"{$_POST['category']}\" AND r.twitter_name=t.twitter_name";
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