<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email, password, and confirm password from the form
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Connect to the database
    include 'connect.php';
    $db = new Database();

    // Check if the email is already in use
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = $db->query($query);
    if ($result->num_rows > 0) {
        $response = ['success' => false, 'message' => 'Email already in use'];
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Insert the new user into the database
        $query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
        $db->query($query);

        // Check if the insert was successful
        if ($db->affected_rows > 0) {
            $response = ['success' => true, 'message' => 'Account created successfully'];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = ['success' => false, 'message' => 'Failed to create account'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
}
?>