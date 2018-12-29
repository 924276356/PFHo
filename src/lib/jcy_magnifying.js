jQuery.fn.jcy_magnifying = function(obj){
    var defaults = {
        width : 300,
        height: 200,
        parent: document.body,
        imgurl:'../images/1.jpg',
        ratio: 3
    }
    var new_obj = Object.assign({},defaults,obj);


    //构建放大镜结构
     
        //创建small_box
        var $small_box = $('<div/>');
        $small_box.css({width:new_obj.width, height:new_obj.height,position: 'relative'});
        new_obj.parent.append($small_box);

        //创建small_img
        var $small_img = $('<img/>');
        $small_img.attr('src',new_obj.imgurl);
        $small_img.css({width:'100%',height:'100%'});
        $small_box.append($small_img);     
                 

        //创建span标签
        var $span = $('<span/>');
        $span.css({width:new_obj.width/new_obj.ratio, height:new_obj.height/new_obj.ratio});
        $span.css({position: 'absolute',display: 'none',background: '#ccc', opacity: '0.5'});
        $small_box.append($span);

        //创建big_box
        var $big_box = $('<div/>');
        $big_box.width(new_obj.width);
        $big_box.height(new_obj.height);
        $big_box.css({position:'absolute', overflow:'hidden', right:-($big_box.width()+20), top:0, border:'1px solid #ccc', display:'none'});
        $small_box.append($big_box);

        //创建big_img
        var $big_img = $('<img>');
        $big_img.attr('src',new_obj.imgurl);
        $big_img.width($big_box.width()* new_obj.ratio);
        $big_img.height($big_box.height()* new_obj.ratio);
        $big_img.css({'position': 'absolute'});
        $big_box.append($big_img);  

    
    //鼠标移动放大
    function mobile(){
        $small_box.on('mouseover',function(){
            $span.css('display','block');
            $big_box.css('display','block');
        }).on('mousemove',function(e){

            this.left = e.pageX - $small_box.offset().left - $span.width()/2;
            this.top = e.pageY - $small_box.offset().top - $span.height()/2;
            $span.css({left:this.left,top:this.top});
            $big_img.css({left:-this.left* new_obj.ratio, top:-this.top* new_obj.ratio});

            if($span.position().top <= 0){
                $span.css('top','0');
                $big_img.css('top','0');
            }
            if($span.position().top >= ($small_box.height()-$span.height())){
                $span.css('top',$small_box.height()-$span.height());
                $big_img.css('top',-($big_img.height()-$big_box.height()));
            }
            if($span.position().left <= 0){
                $span.css('left','0');
                $big_img.css('left','0');
            }
            if($span.position().left >= ($small_box.width()-$span.width())){
                $span.css('left',$small_box.width()-$span.width());
                $big_img.css('left',-($big_img.width()-$big_box.width()));
            }
        }).on('mouseout',function(){
            $span.css('display','none');
            $big_box.css('display','none');
        })

    }
    mobile();
}