<?php
    $con=mysqli_connect("rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com","3rddegree","rockit","3rddegree");
    // Check connection
    if (mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    // escape variables for security
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);


    $sql="INSERT INTO user (email, password)
    VALUES ('$email', '$password')";

    if (!mysqli_query($con,$sql)) {
      die('Error: ' . mysqli_error($con));
    }
    echo "1 record added";

    mysqli_close($con);
    ?>