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




    var $goodstype = $(".goodstype");
    var $goodstype1 = $(".goodstype1");
    var $goodstype2 = $(".goodstype2");
    var $goodstype3 = $(".goodstype3");
    var $goodsul = $(".goods").children('ul');
    var $goodsul1 = $(".goods1").children('ul');
    var $goodsul2 = $(".goods2").children('ul');
    var $goodsul3 = $(".goods3").children('ul');


     request("戒指",$goodstype,$goodsul,8);
     request("戒指",$goodstype1,$goodsul1,6);
     request("戒指",$goodstype2,$goodsul2,6);
     request("Lazada",$goodstype3,$goodsul3,6);
     // 
     // 
     hoverReq($goodstype,$goodsul,8);
     hoverReq($goodstype1,$goodsul1,6);
     hoverReq($goodstype2,$goodsul2,6);
     hoverReq($goodstype3,$goodsul3,6);
     
    function request(status,ele1,ele2,num){
         $.get("api/index.php",{"status":status},function(res){
            var str='';
            var res = JSON.parse(res);
            for(var i = 0;i<num;i++){
                var item = res[i];
                str += `<li data-guid="${item.id}"><a href="#"><img src="${item.imgurl}" alt="" /><p class="goodsname">${item.name}</p><p class="price">${item.price}</p></a></li> `;
            }
            ele1.children().eq(0).css("background-color","#fff");
            ele2.html(str);
        });
    }

    function hoverReq(ele1,ele2,num){
        ele1.on("mouseover","li",function(){
            for(var i = 0;i<ele1.children().length;i++){
                ele1.children().eq(i).css("background-color","#ccc");
            }
            $(this).css("background-color","#fff");
            var $_aa = $(this).html();
            // console.log($(this));
            // $(this).css("background-color","#fff");
            // console.log($_aa);
            $.get("api/index.php",{"status":$_aa},function(res){
                var str='';
                var res = JSON.parse(res);
                for(var i = 0;i<num;i++){
                    var item = res[i];
                    str += `<li data-guid="${item.id}"><a href="#"><img src="${item.imgurl}" alt="" /><p class="goodsname">${item.name}</p><p class="price">${item.price}</p></a></li> `;
                }

                ele2.html(str);
            });
        });
    }







    // $goodstype1.on("mouseover","li",function(){
    //     var $_bb = $(this).html();
    //     console.log($(this));
    //     $(this).css("background-color","#fff");
    //     // console.log($_aa);
    //     $.get("api/index.php",{"status":$_bb},function(res){
    //         var str='';
    //         var res = JSON.parse(res);
    //         for(var i = 0;i<res.length-2;i++){
    //             var item = res[i];
    //             str += `<li data-guid="${item.id}"><a href="#"><img src="${item.imgurl}" alt="" /><p class="goodsname">${item.name}</p><p class="price">${item.price}</p></a></li> `;
    //         }

    //         $goodsul1.html(str);
    //     });
    // }).on("mouseout","li",function(){
    //         $(this).css("background-color","#ccc")
    // })




    // $goodstype2.on("mouseover","li",function(){
    //     var $_cc = $(this).html();
    //     console.log($(this));
    //     $(this).css("background-color","#fff");
    //     // console.log($_aa);
    //     $.get("api/index.php",{"status":$_cc},function(res){
    //         var str='';
    //         var res = JSON.parse(res);
    //         for(var i = 0;i<res.length-2;i++){
    //             var item = res[i];
    //             str += `<li data-guid="${item.id}"><a href="#"><img src="${item.imgurl}" alt="" /><p class="goodsname">${item.name}</p><p class="price">${item.price}</p></a></li> `;
    //         }

    //         $goodsul2.html(str);
    //     });
    // }).on("mouseout","li",function(){
    //         $(this).css("background-color","#ccc")
    // })




    // $goodstype3.on("mouseover","li",function(){
    //     var $_dd = $(this).html();
    //     console.log($(this));
    //     $(this).css("background-color","#fff");
    //     // console.log($_aa);
    //     $.get("api/index.php",{"status":$_dd},function(res){
    //         var str='';
    //         var res = JSON.parse(res);
    //     console.log(res);

    //         for(var i = 0;i<res.length-2;i++){
    //             var item = res[i];
    //             str += `<li data-guid="${item.id}"><a href="#"><img src="${item.imgurl}" alt="" /><p class="goodsname">${item.name}</p><p class="price">${item.price}</p></a></li> `;
    //         }

    //         $goodsul3.html(str);
    //     });
    // }).on("mouseout","li",function(){
    //         $(this).css("background-color","#ccc")
    // })

})