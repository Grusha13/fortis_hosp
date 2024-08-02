<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

if(isset($_POST['submitForm']))

{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $country = $_POST['country'];
    $phone = $_POST['phone'];
    $pincode = $_POST['pincode'];
    $treatment = $_POST['department'];
    
    $mail = new PHPMailer(true);

    try {
        // //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->Username   = 'cantrialacc@gmail.com';                     //SMTP username
        $mail->Password   = 'fnwvijvrmbiuxdqq';                               //SMTP password
        
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //ENCRYPTION_SMTPS 465 - Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('cantrialacc@gmail.com', 'Cangenesis');
        $mail->addAddress('cantrialacc@gmail.com', 'Appointment Form');     //Add a recipient

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'New Fortis Appointment';
        $mail->Body    = '<h3>Hello you received a new appointment</h3>
            <p><strong>Name:</strong> '.$name.'<p>
            <p><strong>Email:</strong> '.$email.'</p>
            <p><strong>Country:</strong> '.$country.'</p>
            <p><strong>Phone Number:</strong>'.$pincode.' '.$phone.'</p>
            <p><strong>Treatment:</strong> '.$treatment.'</p>
        ';

        if($mail->send())
        {
            header('Location: index.html');
            exit(0);
        }
        else
        {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            header('Location: index.html');
             exit(0);
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        
    }
}
else
{
    header('Location: index.html');
    exit(0);
}

?>