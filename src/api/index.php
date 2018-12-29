<?php
    $status = isset($_GET["status"])?$_GET["status"]:null;

    $servername = "localhost";
    $username = "root";
    $password ="";
    $dbname = "pfhoo";

    $con = new mysqli($servername,$username,$password,$dbname);

    if($con->connect_error){
        var_dump($con->connect_error);
    }

    $con->set_charset('utf8');

    if(($status == "戒指")||($status == "配件")||($status=="Lazada")){
        $res = $con->query('select * from goods where id between 27 and 34');
    }else if(($status == "项链")|| ($status=="手镯")||($status=="Wish")||($status=="Aliexpress")){
        $res = $con->query('select * from goods where id between 19 and 26');
    }else if(($status == "耳饰") || ($status=="脚链") ||($status=="Ebay")||($status=="shppe")){
        $res = $con->query('select * from goods where id between 9 and 16');
    }else if(($status == "手链")||($status=="Amazon")){
        $res = $con->query('select * from goods where id between 1 and 8');
    }
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>