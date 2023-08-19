<?php
$response = array(); // Create an empty response array

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'info@ehiane.info';
    $email_subject = 'New Form Submission';
    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "Subject: $subject.\n".
                  "User Message: $message .\n";

    $to = "ehis.oigiagbe@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        // Email sent successfully
        $response['success'] = true;
    } else {
        // Email failed to send
        $response['success'] = false;
    }
}

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
