<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $to_email = "janindu12345@gmail.com"; 

    // Sanitize input data to prevent email injection attacks.
    $first_name = filter_var($_POST["firstName"], FILTER_SANITIZE_STRING);
    $last_name = filter_var($_POST["lastName"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Check if all required fields are filled.
    if (!empty($first_name) && !empty($email) && !empty($message)) {
        // Subject of the email.
        $subject = "Contact Form Submission from $first_name $last_name";

        // Compose the email message.
        $message_body = "First Name: $first_name\n";
        $message_body .= "Last Name: $last_name\n";
        $message_body .= "Email: $email\n\n";
        $message_body .= "Message:\n$message";

        // Additional headers.
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Send the email.
        if (mail($to_email, $subject, $message_body, $headers)) {
            echo '<script>';
            echo 'alert("Message sent successfully!");';
            echo 'window.location.href = "index.html#contact";'; // Redirect to homepage's contact section.
            echo '</script>';
        } else {
            echo '<script>';
            echo 'alert("Message sending failed. Please try again.");';
            echo 'window.location.href = "index.html#contact";'; // Redirect to homepage's contact section.
            echo '</script>';
        }
    } else {
        echo '<script>';
        echo 'alert("Please fill out all required fields.");';
        echo 'window.location.href = "index.html#contact";'; // Redirect to homepage's contact section.
        echo '</script>';
    }
} else {
    // Handle the case when the script is accessed directly.
    echo "direct_access_error";
}
?>
