<?php
// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();
// check for valid email address before searching database.

$reg = '/^[a-zA-Z-_.+]+@[a-zA-Z-_.+]+\.[a-z]{2,6}\.?[a-z]+/';

if (preg_match($reg, $_POST['email']) === 1) {

    // echo ' valid email address <br>';

    // Write SQL Statement
    $sql = "SELECT * FROM user 
    WHERE email=\"{$_POST['email']}\"";

    // Execute SQL Statement
    $results = $db->execute($sql);

    // print_r($results);

    // check for a matching entry for a registered user
    if ($results->num_rows != 0) {

        // already registered, might offer password recovery from here.
        echo ' Sorry, this email address is already registered. <br>';
    } else {

        $sql="INSERT INTO user (email, password)
        VALUES (\"{$_POST['email']}\", \"{$_POST['password']}\")";

        $results = $db->execute($sql);

        echo "1 record added";
        
    }

}

?>