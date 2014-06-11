<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 'on');
    
    $logInStatus = '';
    $registerStatus = '';

    if($_POST){
        if ($_POST['action']=='login') {
            include ('login.php');
            $logInStatus = logIn();

        } else if($_POST['action']=='register'){
            include ('register.php');
            $registerStatus = register();

        }
    }

    require 'layout.php';




?>




