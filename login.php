<?php
// Include Database Class
include('db.php');

// include('initialize.php');

function logIn(){

    // Start Database Object
    $db = new DB();

    // nobody is logged in yet
    $userLoggedIn = false;

    // check for valid email address before searching database.

    $reg = '/^[a-zA-Z-_.+]+@[a-zA-Z-_.+]+\.[a-z]{2,6}\.?[a-z]+/';

    if (preg_match($reg, $_POST['email']) === 1) {

        // echo ' valid email address <br>';

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

            if ($_POST['password'] == $row['password']) {
                $_SESSION['id'] = $row['id'];
                
                print_r('Welcome,' . ' ' . $_POST['email']);
                // return $row['email'] . ' successfully logged in. <br>';

            } else {
                print_r ($row['email'] . ' password did not match. <br>');

            }
        } else {
            print_r ($_POST['email'] . ' is an unknown user, please register. <br>');

        }
    } else {
        print_r (' Invalid email address was entered. <br>');

    }
}
?>