<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();



// Write SQL Statement
$sql = "SELECT * FROM restaurants WHERE zip_code = '85281' AND category = 'Italian'";

// Execute SQL Statement
$results = $db->execute($sql);


print_r($_REQUEST);

// $response = [
    
//     "results"=> [
        
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//         ['name'=> 'Thirsty Lion','street_address'=> '234 main st'],
//     ]
// ];

$response = [
    "results"=> []
];


while ($row = $results->fetch_assoc()) {
    $response['results'][] = $row;
}


echo json_encode($response);

?>