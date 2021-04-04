<?php

    $name=$email=$subject=$message = '';
    if($_SERVER["REQUEST_METHOD"]==="POST"){
        $name = $_POST["fname"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        echo $name,$email,$subject,$message;
    }

?>