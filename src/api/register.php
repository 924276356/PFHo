<?php

 
    $phone = isset($_POST["phone"])?$_POST["phone"]:null;
    $passwd = isset($_POST["passwd"])?$_POST["passwd"]:null;


    $servername = "localhost";
    $username = "root";
    $password ="";
    $dbname = "pfhoo";

    $con = new mysqli($servername,$username,$password,$dbname);

    if($con->connect_error){
        var_dump($con->connect_error);
    }

    $con->set_charset('utf8');
    $res = $con->query('select * from user where tel="'.$phone.'"');

    if($res->num_rows > 0){
        echo "该手机已经注册";
    }else{
         $res = $con -> query('insert into user (tel,password) values ('.$phone.','.$passwd.')');
         // var_dump($res);
         if($res){
            echo "注册成功";
         }else{
            echo "注册失败";
         }
    }



?>