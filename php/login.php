<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email and password from the form
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Connect to the database
    include 'connect.php';
    $db = new Database();

    // Query the database to retrieve the hashed password
    $query = "SELECT password FROM users WHERE email = '$email'";
    $result = $db->query($query);
    $hashed_password = $result->fetch_assoc()["password"];

    // Verify the password using password_verify
    if (password_verify($password, $hashed_password)) {
        // Password is valid, log the user in
        $response = ['success' => true, 'message' => 'Logged in successfully!'];
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Password is invalid, display an error message
        $response = ['success' => false, 'message' => 'Invalid password'];
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
?>