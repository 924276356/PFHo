<?php
    $guid = isset($_POST["guid"])?$_POST["guid"]:1;
    $qty = isset($_POST["qty"])?$_POST["qty"]:1;
    $user= isset($_POST["username"])?$_POST["username"]:null;
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



    if($status){
            // $set = $con->query('insert into car (guid,qty,username) values ("'.$guid.'","'.$qty.'","'.$user.'")');
            $ask = $con->query('select * from car where username = "'.$user.'"');
            if($ask->num_rows>0){
                $content1 = $ask->fetch_all(MYSQLI_ASSOC);
                $cc = true;
                for($i = 0; $i< count($content1);$i++){
                    if($content1[$i]["guid"] == $guid){
                        $ee = $con -> query('update car set qty='.$qty.' where guid='.$guid.'');
                        if($ee){
                            echo "444";
                        }else{
                            echo "000";
                        }
                        $cc=false;
                    }
                }
                if($cc){
                    $set = $con->query('insert into car (guid,qty,username) values ("'.$guid.'","'.$qty.'","'.$user.'")');
                    if($set){
                    echo "333";
                 }else{
                            echo "111";
                        }

                }
            }else{
                 $set = $con->query('insert into car (guid,qty,username) values ('.$guid.','.$qty.',"'.$user.'")');
                 if($set){
                    echo "good";
                 }else{
                            echo "555";
                        }
                 
            }


    }else{
             $res = $con->query('select * from goods where id="'.$guid.'"');
             $content = $res->fetch_all(MYSQLI_ASSOC);
             echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }


   

    


    
    




?>