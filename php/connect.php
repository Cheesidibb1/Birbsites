<?php
class Database {
  private $conn;

  public function __construct($host, $username, $password, $database) {
    $this->conn = new mysqli($host, $username, $password, $database);

    if ($this->conn->connect_error) {
      die("Connection failed: " . $this->conn->connect_error);
    }
  }

  public function query($sql) {
    $result = $this->conn->query($sql);

    if (!$result) {
      die("Query failed: " . $this->conn->error);
    }

    return $result;
  }
}

$host = 'your_host';
$username = 'your_username';
$password = 'your_password';
$database = 'your_database';

$db = new Database($host, $username, $password, $database);
include 'login.php', 'register.php', 'deals.php';
?>
