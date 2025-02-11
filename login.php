<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "user_registration"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


session_start();


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username']; 
    $password = $_POST['password']; 

    
    $sql = "SELECT * FROM userregister WHERE username=? AND password=?"; 
    $stmt = $conn->prepare($sql); 
    $stmt->bind_param("ss", $username, $password); 
    $stmt->execute(); 
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        
        header("Location: index.html");
        exit();
    } else {
        
        echo "<script>
                alert('Invalid username or password!');
                window.location.href='login.html'; // Redirect back to login
              </script>";
    }

    $stmt->close();
}

$conn->close();
?>
