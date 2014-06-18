<?php
// Include Database Class
include('db.php');

// include('initialize.php');

function logIn(){

    // Start Database Object
    $db = new DB();

    // check for valid email address before searching database.

    $reg = '/^[a-zA-Z-_.+]+@[a-zA-Z-_.+]+\.[a-z]{2,6}\.?[a-z]+/';

    if (preg_match($reg, $_POST['logInEmail']) === 1) {

        // echo ' valid email address <br>';

        // Write SQL Statement
        $sql = "SELECT * FROM user WHERE email=\"{$_POST['logInEmail']}\"";

        // Execute SQL Statement
        $results = $db->execute($sql);

        // print_r($results);

        // check for a matching entry for a registered user
        if ($results->num_rows != 0) {

            // make a $row variable for results
            $row = $results->fetch_assoc();


            if ($_POST['password'] == $row['password']) {
                $_SESSION['id'] = $row['id'];
                
                return $_POST['logInEmail'];

        $status = array('response' => 'ok', 
            'msg' => 'Welcome'); 

            } else {
        $status = array('response' => 'error', 
            'msg' => 'Sorry, password did not match'); 
                print_r ($row['email'] . ' password did not match. <br>');

            }
        } else {
        $status = array('response' => 'error', 
            'msg' => 'Unknown email address was entered'); 

            print_r ($_POST['logInEmail'] . ' is an unknown user, please register. <br>');

        }
    } else {

        $status = array('response' => 'error', 
            'msg' => 'Invalid email address was entered'); 

        print_r (' Invalid email address was entered. <br>');

    }

    echo json_encode($status);
}
?>
