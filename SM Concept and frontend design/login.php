<?php
$username = $_POST["username"];
$username = $_POST["password"];

if ($username === "admin" && $password === "password") {
    http_response_code(200);
} else {
    http_response_code(401);
}
?>