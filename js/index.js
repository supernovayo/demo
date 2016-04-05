/**
 * Created by hb on 2015/12/1.
 */

$(document).ready(function () {

    $("ul.f-f0").on("mouseenter","li",function(){
        $(this).animate({"top":"-20"});
    })
    $("ul.madan li").on("mouseenter",".li-hid",function(){
        $(this).stop().animate({"top":"-150"});
    })
    $("ul.madan li").on("mouseleave",".li-hid",function(){
        $(this).stop().animate({"top":"0"});
    })
    var num = 0;
    var leftval =0;
    $(".index-left").on("click",(function(){
        console.log(leftval);
        if(num>2){
            num=2;
        }else{
            num++;
            $(".liscontent ul").animate({"left":leftval-405});
            leftval=leftval-405;
        }
    }))
    $(".index-right").on("click",(function(){
        if(num<=0){
            $(".liscontent ul").animate({"left":0});
        }else{
            num--;
            $(".liscontent ul").animate({"left":leftval+405});
            leftval=leftval+405;
        }
    }))
    $(".wrap ul li").each(function(){
        $(".wrap ol").append("<li></li>");
    })
    var timer =null;
    var lisindex = 0;
    timer = setInterval(function(){
        lisindex++;
        if(lisindex>=8){
            lisindex = 0;
        }

        $(".wrap ul li").eq(lisindex).fadeIn("3000").siblings().fadeOut("3000");
    },3000)
    $(".wrap ol li").mouseenter(function () {
        clearInterval(timer);
        $(".wrap ul li").eq($(this).index()).fadeIn("3000").siblings().fadeOut("3000");
        lisindex = $(this).index();
    });

    var msg = document.getElementById("message");
    var txt = document.getElementById("txt");
    var ssbox = document.getElementById("ssbox");
    var sstb = document.getElementById("sstb");
    txt.onfocus = function(){
        msg.style.display = "none";
        txt.style.backgroundColor= "white";
        sstb.style.backgroundColor= "white";

    }
    txt.onblur = function(){
        if(this.value == ""){
            msg.style.display = "block";
            txt.style.backgroundColor= "#EEEEEE";
            sstb.style.backgroundColor= "#EEE";
        }
    }
    $(".login a").eq(0).click(function(){
        $(".login-black,.dnone").css({"display":"block"});
    })
    $(".loginspan").click(function(){
        $(".login-black,.dnone").css({"display":"none"});
    })
});
$(function(){
    $(".lis1").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/1-1.png)")
        $(".box-right-botton").css("background","url(images/01.png)")
    })
    $(".lis2").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/2-2.png)")
        $(".box-right-botton").css("background","url(images/02.png)")
    })
    $(".lis3").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/3-3.png)")
        $(".box-right-botton").css("background","url(images/03.png)")
    })
    $(".lis4").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/5-5.png)")
        $(".box-right-botton").css("background","url(images/05.png)")
    })
    $(".lis5").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/6-6.png)")
        $(".box-right-botton").css("background","url(images/06.png)")
    })
    $(".lis6").on("mouseenter",function(){
        $(".box-right-top").css("background","url(images/7-7.png)")
        $(".box-right-botton").css("background","url(images/07.png)")
    })

})
