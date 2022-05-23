<?php
$firstn = $_POST['firstn'];
$lastn = $_POST['lastn'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$services = $_POST['services'];
$message = $_POST['message'];
$formcontent="First Name: $firstn \n Last Name: $lastn \n Email: $email \n Services: $services \n Phone: $phone \n Message: $message";
$recipient = "mdsubhan.53@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
require_once "thank-you.html";
?>