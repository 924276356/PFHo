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

    var $goodslist = $("#goodslist");
    var $allprice = $(".allprice");
    $.post("../api/car.php",{user:$phone,show:2},function(res){
        // console.log(JSON.parse(res));
        var str = "";
        var allprice = 0;
        var res = JSON.parse(res);
            for(var i = 0;i<res.length;i++){
                var item = res[i];
                var totalprice = item.qty*item.price;
                allprice+=totalprice;
                  str+=`<li class="${item.id}">
                    <div class="delgoods">&times</div>
                    <img src="../${item.imgurl}" alt="" />
                    <p class="gName">${item.name}</p>
                    <span class="size">36</span>
                    <span class="color">red</span>
                    <span class="price">${item.price}</span>
                    <p class="amount">
                      <input type="button" value="+" class="add"/>
                      <span class="qty">${item.qty}</span>
                      <input type="button" value="-" class="sub"/>
                    </p>
                    <span class="discont">0</span>
                    <span class="Totalprice">￥${totalprice}</span>
                  </li>`;
            }

            $goodslist.html(str);
            $allprice.html(`Car Total :  ￥${allprice}`);
            add_min();
            del();
            clearcar();
    })


    //加加减减
    function add_min(){
        $(".add").on('click',function(){
            var qty = $(this).next().html();
            var _qty = qty;
            if(qty>=10){
                qty = 10;
            }else{
                qty++;
            }
            $(this).next().html(qty);
            $price = $(this).parent().siblings('.price').html();//获取单价
            $(this).parent().siblings('.Totalprice').html(qty*$price);
            var car_tall = Number($('.allprice').html().slice(14)) + Number((qty-_qty)*$price);
            $allprice.html(`Car Total :  ￥${car_tall}`);
            var guid = $(this).parents("li").attr("class");
            $.post("../api/car.php",{qty:qty,guid:guid,show:1},function(res){console.log(res)});
        })
        $(".sub").on('click',function(){
            var qty = $(this).prev().html();
            var _qty = qty;
            if(qty<=1){
                qty = 1;
            }else{
                qty--;
            }
            $(this).prev().html(qty);
            $price = $(this).parent().siblings('.price').html();
            $(this).parent().siblings('.Totalprice').html(qty*$price);
            var car_tall = Number($('.allprice').html().slice(14)) - Number((_qty-qty)*$price);
            $allprice.html(`Car Total :  ￥${car_tall}`);

            var guid = $(this).parents("li").attr("class");
            $.post("../api/car.php",{qty:qty,guid:guid,show:1},function(res){console.log(res)});

        })
    }
    //商品删除
    function del(){
        var $delgoods = $(".delgoods");
        $delgoods.on("click",function(){
            var $guid = $(this).parent("li").attr("class");
            // console.log($guid);
            $.post("../api/car.php",{guid:$guid,show:3,user:$phone},()=>{

               $(this).parent("li").remove();
            })

       }) 
    }

    //清空购物车
    function clearcar(){
        $(".clearCar").on("click",function(){
            $.post("../api/car.php",{user:$phone,show:4},()=>{
                $goodslist.html("");
                
            })
        })

    }

})