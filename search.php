<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

if($_POST['category']=='All') {
    $cat = "%";
} else {
    $cat = $_POST['category'];
}

// Write SQL Statement
$sql = "SELECT * FROM 
    restaurants as r, tweets as t, rating as ra 
    WHERE r.zip_code=\"{$_POST['zip_code']}\" 
    AND r.category like \"$cat\" 
    AND r.twitter_name=t.twitter_name 
    AND r.id=ra.restaurant_id";

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