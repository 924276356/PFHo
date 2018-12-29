jQuery(function($){
    var $phoneWarn = $(".phoneWarn");
    var $passwdWarn = $(".passwdWarn");
    var $loginBtn = $(".loginBtn");
    var $phone = $(".bd_phone");
    var $passwd = $(".bd_passwd");


    $phone.on("blur",function(){
        var $phone = $(".bd_phone").val();
        if(!/^1[3-8]\d{9}$/.test($phone)){
            $phoneWarn.html("请输入正确的手机号码");
            $(".bd_phone").on("focus",function(){
                $phoneWarn.html("");
            })
        }else{
            $.post("../api/login.php",{"phone":$phone},function(res){
                if(res=="该手机未注册"){
                    // alert("该手机未注册");
                    // $(".bd_phone").val("");
                    $phoneWarn.html("该手机未注册");
                    $(".bd_phone").on("focus",function(){
                        $phoneWarn.html("");
                        $(".bd_phone").val("");
                    })
                }
                // else{
                //     $passwdWarn.html(res);
                // }
            })
            
        }
    })



    $loginBtn.on("click",function(){
        var $phone = $(".bd_phone").val();
        var $passwd = $(".bd_passwd").val();
        var $status = true;
        // if(!/^1[3-8]\d{9}$/.test($phone)){
        //     $phoneWarn.html("请输入正确的手机号码");
        //     $(".bd_phone").on("focus",function(){
        //         $phoneWarn.html("");
        //     })
        // }else 
        // 
        if($passwd.trim().length==0){
            $passwdWarn.html("密码不能为空");
            $passwd.on("focus",function(){
                $passwdWarn.html("");
            })
        }else{
            $.post("../api/login.php",{"phone":$phone,"passwd":$passwd,"status":$status},function(res){
                    // console.log(res);
                    // if(res=="该手机未注册"){
                    //     alert("该手机未注册");
                    // }else{
                        if(res!=$passwd){
                            // alert("密码错误");
                            $passwdWarn.html("密码错误");
                            $(".bd_passwd").on("focus",function(){
                                  $passwdWarn.html("");
                            })
                        }else{
                            Cookie.setCookie("user",$phone,"","/");
                            location.href="../index.html";
                        }
                        
                    // }
            })
        }
    })
})