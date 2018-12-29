<?php
    $phone = isset($_POST["phone"])?$_POST["phone"]:null;
    $passwd = isset($_POST["passwd"])?$_POST["passwd"]:null;
    $status = isset($_POST["status"])?$_POST["status"]:null;

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
    // $content = $res->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    

    if($res->num_rows == 0){
        echo "该手机未注册";
    }else if($status){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($content);
        echo $content[0]['password'];
    }else{
        echo "请检查是否输入密码";
    }
?>