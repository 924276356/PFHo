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


    var $marketTab = $(".market-tab");
    var $goodsQty = $(".goodsQty");
    // console.log($marketTab);

    request("精品商家",$marketTab,$goodsQty,25);

    hoverReq($marketTab,$goodsQty,25);





    $goodsQty.on("click",function(e){
        if(e.target.tagName  ==  "IMG"){
            var guid = e.target.parentElement.parentElement.dataset.guid;
        }
        console.log(guid);
        location.href="details.html?guid="+guid;
    })

    function request(status,ele1,ele2,num){
        $.get("../api/goodslist.php",{"status":status},function(res){
            var str='';
            var res = JSON.parse(res);
            for(var i = 0;i<num;i++){
                var item = res[i];
                str += `<li data-guid="${item.id}">
                            <a href="#" style="display:block;"><img src="../${item.imgurl}"/></a>
                            <p class="p1 clearfix">
                                <span class="price fl">${item.price}</span>
                                <span class="qty fr">已售出${item.saleqty}件</span>
                            </p>
                            <p class="p2"><a href="#">${item.name}</a></p>
                            <p class="p3 clearfix">
                                <input class="databag fl" type="button" value="数据包" />
                                <input class="car fr" type="button" value="加入购物车"/>
                            </p>
                        </li> `;
            }
            ele1.children().eq(0).css("border-bottom","3px solid #bc338b");
            ele2.html(str);
        });
    }


    function hoverReq(ele1,ele2,num){
        ele1.on("mouseover","li",function(){
            for(var i = 0;i<ele1.children().length;i++){
                ele1.children().eq(i).css("border","none");
            }
            $(this).css("border-bottom","3px solid #bc338b");
            var $_aa = $(this).html();
            // console.log($(this));
            // $(this).css("background-color","#fff");
            // console.log($_aa);
            $.get("../api/goodslist.php",{"status":$_aa},function(res){
                var str='';
                var res = JSON.parse(res);
                for(var i = 0;i<num;i++){
                    var item = res[i];
                    str += `<li data-guid="${item.id}">
                            <a href="#" style="display:block;"><img src="../${item.imgurl}"/></a>
                            <p class="p1 clearfix">
                                <span class="price fl">${item.price}</span>
                                <span class="qty fr">已售出${item.saleqty}件</span>
                            </p>
                            <p class="p2"><a href="#">${item.name}</a></p>
                            <p class="p3 clearfix">
                                <input class="databag fl" type="button" value="数据包" />
                                <input class="car fr" type="button" value="加入购物车"/>
                            </p>
                        </li> `;
                }

                ele2.html(str);
            });
        });
    }


    //价格排序
    paixun();
    function paixun(){
        $(".nav-c").on("click",function(e){
            console.log(666);
            if(e.target.className == "paixun"){
                $.post("../api/goodslist.php",{show:0},function(res){

                        // console.log(JSON.parse(res));
                    var str='';
                    var res = JSON.parse(res);
                for(var i = 0;i<res.length;i++){
                    var item = res[i];
                    str += `<li data-guid="${item.id}">
                            <a href="#" style="display:block;"><img src="../${item.imgurl}"/></a>
                            <p class="p1 clearfix">
                                <span class="price fl">${item.price}</span>
                                <span class="qty fr">已售出${item.saleqty}件</span>
                            </p>
                            <p class="p2"><a href="#">${item.name}</a></p>
                            <p class="p3 clearfix">
                                <input class="databag fl" type="button" value="数据包" />
                                <input class="car fr" type="button" value="加入购物车"/>
                            </p>
                        </li> `;
                }
                $goodsQty.html("");
                $goodsQty.html(str);

                })
            }
        })
    }


})