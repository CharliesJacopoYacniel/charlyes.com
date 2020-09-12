<?php
      ini_set( 'display_errors', 1 );
      error_reporting( E_ALL );
      //   header('Access-Control-Allow-Origin:45.84.204.144');
      header('Access-Control-Allow-Origin:*');
      header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
      $params = json_decode(file_get_contents('php://input'));
      $secretKeyCharlies = $params->secretKeyCharlies;
      if($secretKeyCharlies == sha1("si_quieres_paz_preparate_para_la_guerra.")){
      $message = $params->body_mail;
      $subject='Cliente potencial de charlyes.com dice: ';
      $from = "holamundo@charlyes.com";
      $to = "charliesyacniel@gmail.com";
      $headers = "From:" . $from;
      try {
      mail($to,$subject,$message, $headers);
      echo json_encode(array("ok"=>true,"object"=> [],"message"=> 'The email message was sent.'));
      } catch (\Throwable $th) {
        echo json_encode(array("ok"=>false,"object"=> [$th],"message"=> 'The email message was NOT sent.'));
      }
    }else{
      echo json_encode(array("ok"=>false,"object"=> [],"message"=> 'you have not permisiions use this file'));
    }
?>
