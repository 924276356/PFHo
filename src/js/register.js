jQuery(function($){



    var $getCode = $(".getCode");
    var $register = $("#register-jcy");
    var $phoneWarn = $("#phone-warn");
    var $passwdWarn = $("#passwd-warn");
    var $vcode = $("#verificationcode");
    var $codeWarn =$("#code-warn");
    var res;
    $getCode.on("click",function(){
        res = getRandomNum(1000,9999);
        $getCode.html(res);
    })
    
   

    $register.on("click",function(){
        var $phone = $("#phone").val();
        var $passwd = $("#passwd").val();
        var $passwd1 = $("#passwd1").val();
      if(!/^1[3-8]\d{9}$/.test($phone)){
            $phoneWarn.html("请输入正确的手机号码");
        }else{
            if($passwd1!=$passwd){
                $passwdWarn.html("前后密码不一致");
            }else{
                if($vcode.val()!= res){
                    $codeWarn.html("验证码错误");
                }else{
                    $.ajax({
                        type:"POST",
                        url:"../api/register.php",
                        data:{
                            "phone":$phone,
                            "passwd":$passwd
                        },
                        success:function(res){
                            // console.log(res);
                            alert(res);
                            location.href = "login.html";
                        }
                    })
                }
            }
        }  
        
    })
    
})