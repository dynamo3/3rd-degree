<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

$zip = $('.zip').val();
$

// Write SQL Statement
$sql = "SELECT * FROM restaurants WHERE zip_code = '$(".zip").val' AND category = ''";

// Execute SQL Statement
$results = $db->execute($sql);


// print_r($_REQUEST);

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
    "results"=> [
    ]
];


while ($row = $db->fetch_assoc()) {
    $response['results'][] = $row;
}




echo json_encode($response);

?>