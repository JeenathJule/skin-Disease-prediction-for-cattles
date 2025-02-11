<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "user_registration"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirmPassword = trim($_POST['confirm-password']); 

    
    ob_start();

    
    if ($password !== $confirmPassword) {
        
        $popupMessage = "Passwords do not match";
        $popupType = "error"; 
    } else {
        
        $stmt = $conn->prepare("SELECT * FROM userregister WHERE email = ? OR username = ?");
        $stmt->bind_param("ss", $email, $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            
            $popupMessage = "Email or Username already exists";
            $popupType = "error"; 
        } else {
            
            $stmt = $conn->prepare("INSERT INTO userregister (username, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $email, $password);

            if ($stmt->execute()) {
                
                $popupMessage = "Registration successful";
                $popupType = "success"; 
            } else {
                
                $popupMessage = "Error occurred during registration";
                $popupType = "error";
            }

            $stmt->close();
        }
    }

    
    $conn->close();

    
    ob_end_clean();

    
    header("Location: register.html?popupMessage=" . urlencode($popupMessage) . "&popupType=" . urlencode($popupType));
    exit();
}
?>
