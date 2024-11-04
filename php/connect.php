<?php
// Database.php
class Database {
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($servername, $admin, $65B126, $Birbsites);
        // ...
    }

    public function query($sql) {
        // ...
    }
}
include 'deals.php';
?>
