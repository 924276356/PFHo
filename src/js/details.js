jQuery(function($){

    var $phone = Cookie.getCookie("user");
    var $username =$("#username");
    var $login_exit = $("#login_exit");
    if($phone){
        $username.html($phone);
        $login_exit.html("退出");
    }

    $login_exit.on("click",function(){
        if($login_exit.html() == "退出"){
            $login_exit.attr("href","#");
            Cookie.delCookie("user","/");
            $username.html("");
            $login_exit.html("请登录");
        }else if($login_exit.html() == "请登录"){
            $login_exit.attr("href","login.html");
        }
    })



    var str = location.search.slice(1);
    var arr = str.split("=");
    var guid = arr[1];
    var $tit = $(".tit");
    var $price = $(".price").children("span");
    var $price1 = $(".price1")
    // console.log($price1);
    var $img = $(".p2").children(); 
    var $detail_l_top = $(".detail_l_top");


    // console.log(guid);

    $.post("../api/details.php",{guid:guid},function(res){
            var res = JSON.parse(res);
            var item = res[0];

            $tit.html(item.name);
            $price.html(item.price);
            $price1.html(item.price);
            $img.attr("src","../"+item.imgurl);
            $detail_l_top.jcy_magnifying({parent:$detail_l_top,width:450,height:450,imgurl:"../"+item.imgurl});
            $("#smallPic").children('li').children().attr("src","../"+item.imgurl)
    })


    var $addbtn = $(".add");
    var $redubtn = $(".redu");
    var $num = $(".num");
    var $d1_qty = $(".d1_qty");
    var $totalPrice = $(".totalPrice");
    var $carbtn = $(".carbtn");

    $addbtn.on("click",function(){
        var qty = Number($num.html());
        if(qty==10){
            qty = 10;
        }else{
            qty++;
        }
        $num.html(qty);
        $d1_qty.html(qty);
        $totalPrice.html(qty*Number($price1.html()));
    })

    $redubtn.on("click",function(){
        var qty = Number($num.html());
        if(qty==0){
            qty = 0;
        }else{
            qty--;
        }
        $num.html(qty);
        $d1_qty.html(qty);
        $totalPrice.html(qty*Number($price1.html()));
    })

    var $carSpan = $("#carSpan");
    if($phone){
        $carbtn.on("click",function(){
            $status = true;
            $carSpan.html($d1_qty.html());
            console.log($d1_qty.html(),$phone,guid)
            $.post("../api/details.php",{guid:guid,qty:$d1_qty.html(),username:$phone,status:true},function(res){
                console.log(res);
            })
        })
    }else{
        $carbtn.on("click",function(){
            alert("请登录");
        })
    }






})