<?php

    $user= isset($_POST["user"])?$_POST["user"]:null;
    $guid= isset($_POST["guid"])?$_POST["guid"]:null;
    $show= isset($_POST["show"])?$_POST["show"]:null;
    $qty= isset($_POST["qty"])?$_POST["qty"]:null;

    $servername = "localhost";
    $username = "root";
    $password ="";
    $dbname = "pfhoo";

    $con = new mysqli($servername,$username,$password,$dbname);

    if($con->connect_error){
        var_dump($con->connect_error);
    }

    $con->set_charset('utf8');
    if($show == 1){
        $res1 = $con -> query('update car set qty='.$qty.' where guid='.$guid.'');
    }
    if($show ==2){
        $res = $con->query('select * from (select * from goods where id in (select guid from  car where username = "'.$user.'"))a
            left join (select guid,qty from car where username = "'.$user.'" )b
            on a.id = b.guid');

        $content = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }

    if($show == 3){
        $res2 = $con->query('delete from car where guid='.$guid.' and username="'.$user.'"');

    }

    if($show == 4){
        $res3 = $con->query('delete from car where username="'.$user.'"');
    }

    // 'select * from (select * from goodlist where id in (select good_id from  car where email_tel = "'.$user.'"))a
    //         left join (select good_id,qty,color,size from car where email_tel = "'.$user.'" )b
    //         on a.id = b.good_id'
?>