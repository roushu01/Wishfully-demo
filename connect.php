<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rdbmsproject";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("COnnection Failed:".$conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Password = password_hash($_POST['Password'],PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (Name, Email, Password) VALUES('$Name','$Email','$Password')";

    if ($conn->query($sql)===TRUE){
        echo "DONE ";
    }

}
$conn->close();
?>