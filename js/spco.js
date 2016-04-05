/**
 * Created by asus on 2015/12/1.
 */
$(document).ready(function(){
   $(window).scroll(function(){
       var top=parseInt($(document).scrollTop());
       if(top>730&&top<900){
           $(".giftu1,.giftu2").animate({"top":55},1000);
       }else if(top>1200&&top<1500){
           $(".png1").animate({"right":0},1000);
           $(".png2").animate({"left":0},1000);
       }else if(top>1800){
           $("#share1,#share2,#share3").animate({"top":0},1000);
       }

   });
   $("#didi1").mouseenter(function(){
       $("#didi1").css("background-color","#efefef");
   })
    $("#didi1").mouseleave(function(){
        $("#didi1").css("background-color","#fff");
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
});