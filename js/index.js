$(function(){
    //顶部小菜单显示二维码
    $(".l_mobile").hover(function () {
        $(this).find(".mobile").stop();
           $(this).find(".xiahua").css({"transform":"rotate(180deg)",
           "transition":"0.2s ease-in"
        }); 
        $(this).find(".mobile").slideDown(200);  
        }, function () {
            $(this).find(".mobile").stop();
            $(this).find('.xiahua').css({"transform":"rotate(0deg)",
            "transition":"0.2s ease-in"
            });
            $(this).find(".mobile").slideUp(200);  
        }
      );
      //分类显示
     $(".classify-li li").mouseenter(
         function(){
          var index=$(this).index();
         $(".classify_nav_box").eq(index).show();
         $(".classify_nav_box").eq(index).siblings(".classify_nav_box").hide();
         }
        );
       $(".classify-bottom").mouseleave(function(){
           $(".classify_nav_box").hide();
       });
    $('#wraps .down>.clearfix').eq(1).show();
     $('#wraps .top li').mouseenter(function(){
         var index=$(this).index();
         
         $('#wraps .down>.clearfix').eq(index).show();
         $('#wraps .down>.clearfix').eq(index).siblings().hide();
     });
      $(window).scroll(function(){
        if( $(window).scrollTop()<300){
            $('#fix-nav').fadeOut(300);
         }
         else
         $('#fix-nav').fadeIn(300);
      });


  
  $.ajax({
          url:"http://134.175.20.253/login1.1/admin/logincheck.php",
          type:"post",
          data:{user:0},
          success:function(data){
              if (data==0)
              {
                $('#user').attr("href","login.html");
                  return ;
              }
              else
              {
                $.ajax
                ({
                  url:"http://134.175.20.253/login1.1/admin/logincheck.php",
                   type:"post",
                   data:{username:0},
                   success:function(data)
                   {
                    var data=data.substring(1);
                    data=data.slice(0,-1);
                    if(!sessionStorage.username)
                    {sessionStorage.username=data;
                    $('#user').text(data);
                    $('#user').attr("href","#");}
                   },
               })
              }
          },
            });
            if(sessionStorage.username)
            {$('#user').text(sessionStorage.username);
            $('#user').attr("href","#");}       
       
});
$.ajax
({
  url:"http://134.175.20.253/login1.1/admin/home.php",
   type:"post",
   data:{home:1},
   success:function(data)
   {
    var data=JSON.parse(data);
    var newbook=data.data.newbook;
    var hotbook=data.data.hotbook;
    for(var i=0;i<5;i++){
        (function () {
            var a=i;
    var text=' <li class="nb-item"><a href="item.html?'+newbook[a].id+'" class="pic"><img src="http://134.175.20.253/login1.1/images/books/'+newbook[a].photo+'" alt="" ></a>'+
    '<p class="book-name">'+newbook[a].bookname+'</p>'+
    '<p class="author">'+newbook[a].author+'</p>'+
    '<p class="book-price">¥'+newbook[a].price+'</p>'+
    '</li>';
    
    $('#xinshu').append(text)  })(i);
    
 };
    for(var i=0;i<6;i++){
       (function () {
           var a=i;
   var text=' <li class="li-box"><a href="item.html?'+hotbook[a].id+'"><img src="http://134.175.20.253/login1.1/images/books/'+hotbook[a].photo+'" alt=""  class="img"></a>'+
   '<a href="item.html?'+hotbook[a].id+'">'+hotbook[a].bookname+'</a>'+
   '<p class="author">'+hotbook[a].author+'</p>'+
   '<p class="book-price">¥'+hotbook[a].price+'</p>'+
   '</li>';
   
   $('#hotbook-l').append(text)  })(i);
   
   }
   for(var i=6;i<12;i++){
    (function () {
             var a=i;
     var text=' <li class="li-box"><a href="item.html?'+hotbook[a].id+'"><img src="http://134.175.20.253/login1.1/images/books/'+hotbook[a].photo+'" alt=""  class="img"></a>'+
     '<a href="item.html?'+hotbook[a].id+'">'+hotbook[a].bookname+'</a>'+
     '<p class="author">'+hotbook[a].author+'</p>'+
     '<p class="book-price">¥'+hotbook[a].price+'</p>'+
     '</li>';
     
     $('#hotbook-r').append(text)  })(i);
     
     }
   },
});

function navSlide(ele,speed){ 
    if(!speed) speed = 300;
    if(!ele){
    $("html,body").animate({scrollTop:0},speed);
    }else{
    if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
   }
    return false;
}
