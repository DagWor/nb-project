<?php
$to = 'dagmawishiferaw8@gmail.com';
$subject = $_POST['subject'] ?? 'No Subject';
$message = "From: " . $_POST['name'] . "\n";
$message .= "Email: " . $_POST['email'] . "\n\n";
$message .= $_POST['message'] ?? '';
$headers = 'From: ' . $_POST['email'] . "\r\n" .
           'Reply-To: ' . $_POST['email'] . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)) {
    echo 'Message sent successfully.';
} else {
    echo 'Message sending failed.';
}
?>
