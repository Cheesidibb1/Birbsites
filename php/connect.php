<?php
// Database.php
class Database {
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($servername, $admin, $621B56, $Birbsites);
        // ...
    }

    public function query($sql) {
        // ...
    }
}
include 'deals.php';
?>