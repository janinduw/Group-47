<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = strip_tags(trim($_POST["firstName"]));
    $lastName = strip_tags(trim($_POST["lastName"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($firstName) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle error - input validation failed
        echo "Invalid input";
        exit;
    }

    $recipient = "janindu.w@icloud.com";
    $subject = "New contact from $firstName $lastName";
    $email_content = "Name: $firstName $lastName\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n"; 

    // Set the "From" address to your email
    $email_headers = "From: janindu12345@gmail.com";

// Add the submitter's email in the "Reply-To" header
    $email_headers .= "\r\nReply-To: $email";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Thank You! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message. Please try again later!";
    }
} else {
    // Not a POST request, handle error
    echo "Error: Invalid request";
}
?>
