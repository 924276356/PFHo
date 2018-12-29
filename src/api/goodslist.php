<?php

    $status = isset($_GET["status"])?$_GET["status"]:null;
    $show = isset($_POST["show"])?$_POST["show"]:null;
    // $show_1 = isset($_POST["show_1"])?$_POST["show_1"]:null;


    $servername = "localhost";
    $username = "root";
    $password ="";
    $dbname = "pfhoo";

    $con = new mysqli($servername,$username,$password,$dbname);

    if($con->connect_error){
        var_dump($con->connect_error);
    }

    $con->set_charset('utf8');


    if($show == 0){
        $res = $con->query('select * from goods order by price desc');
        // $content = $res->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);

    }

// if($show==1){
    if($status == "精品商家"){
        $res = $con->query('select * from goods where id between 1 and 25 ');
    }else if($status == "新品爆款"){
        $res = $con->query('select * from goods where id between 9 and 34');
    }else if(($status == "戒指")||($status == "套装")){
        $res = $con->query('select * from goods where id between 6 and 31');
    }else if(($status == "项链") ||($status == "手链")){
        $res = $con->query('select * from goods where id between 2 and 27');
    }else if($status == "耳饰"){
        $res = $con->query('select * from goods where id between 7 and 32');
    }else if(($status=="手镯") || ($status=="脚链")){
        $res = $con->query('select * from goods where id between 1 and 25');
    }
    // }else if($status == "耳饰"){
    //     $res = $con->query('select * from goods where id between 9 and 16');
    // }else if(($status == "手链") || ($status=="手镯") || ($status=="脚链")){
    //     $res = $con->query('select * from goods where id between 1 and 8');
    // }
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);

// }
?>