<?php

$to = "info@schoenmakerijrene.be";
$subject = "Nieuw bericht via website";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = "
Naam: $name

E-mail: $email

Bericht:
$message
";

$headers = "From: info@schoenmakerijrene.be\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "OK";
} else {
    echo "FOUT";
}