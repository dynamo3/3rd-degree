<?php
// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();


$email = $_POST['email'];
$password = $_POST['password'];

//  check for valid email address before searching database.
// re = /^(.)+(\@)+(.)+(\.)+(.{1,64})$/;
// if $email !

// Write SQL Statement
$sql = "SELECT * FROM user WHERE email=\"{$_POST['email']}\"";

// Execute SQL Statement
$results = $db->execute($sql);

// print_r($results);

// check for a matching entry for a registered user
if ($results->num_rows != 0) {
    // make a $row variable for results
    $row = $results->fetch_assoc();

    // echo $row['id'] . ' | ' .
    //      $row['email'] . ' | ' .
    //      $row['password'] . '<br>';

    if ($password == $row['password']) {
        echo $row['email'] . ' successfully logged in. <br>';
    } else {
        echo $row['email'] . ' password did not match. <br>';
    }
} else {
    echo $_POST['email'] . ' is an unknown user, please register. <br>';
}


?>