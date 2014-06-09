<?php
// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

$email = $_GET['email'];
$password = $_GET['password'];

// Write SQL Statement
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";

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


<?php
    $con=mysqli_connect("rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com","3rddegree","rockit","3rddegree");
    // Check connection
    if (mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    // escape variables for security
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);


    $sql="SELECT FROM user (email, password)
    VALUES ('$email', '$password')";

    // if (!mysqli_query($con,$sql)) {
    //   die('Error: ' . mysqli_error($con));
    // }
    // echo "1 record added";

    // mysqli_close($con);
?>