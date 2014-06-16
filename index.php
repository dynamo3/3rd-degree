<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 'on');
    
    include('initialize.php');

    $userName = '';

    if($_POST){
        
        if (!is_numeric($_SESSION['id'])) {
            //A user is NOT logged in

            if ($_POST['action']=='login') {
                include ('login.php');

                $userName = logIn();

            } else if($_POST['action']=='register'){
                include ('register.php');
                register();
                // $registerStatus = register();
            }
        }else if($_POST['action']=='logOut'){
            // A user IS logged in
            $_SESSION['id'] = 'false';
            }
    }

    require 'layout.php';




?>




