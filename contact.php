<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "janindu12345@gmail.com";
    $subject = "New Contact Us Message";
    $body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $firstName $lastName\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: janindu12345@gmail.com" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Message could not be sent. Please try again later.';
    }
}
?>
