<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

// Write SQL Statement
$sql = "SELECT * FROM restaurants WHERE zip_code = '85281' AND category = 'Italian'";

// Execute SQL Statement
$results = $db->execute($sql);

// Loop over results and make a $row variable for each result
while ($row = $results->fetch_assoc()) {
    echo    $row['name'] . ' | ' .
            $row['street_address'] . ' | ' .
            $row['zip_code'] . ' | ' .
            $row['phone'] . ' | ' .
            $row['category'] . ' | ' .
            $row['twitter_name'] . '<br>';

}




