<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();



// Write SQL Statement
$sql = "SELECT * FROM 
            restaurants as r, tweets as t, rating as ra 
            WHERE r.twitter_name=t.twitter_name
            AND r.id=restaurant_id
            AND r.zip_code=\"{$_POST['zip_code']}\" 
            AND r.category=\"{$_POST['category']}\"";

// $sqlA = "SELECT * FROM 
//             restaurants as r, tweets as t, rating as ra 
//             WHERE "

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