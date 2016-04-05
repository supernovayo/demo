/**
 * Created by Administrator on 2015/12/1.
 */
$(function(){
    var contents = $(".contentr .contents");
    var lisword = ["全部课程","文学艺术","哲学历史","经管法学","基础科学","工程技术","农林医药"];
    $(".kclis ul").on("mouseenter","li",function(){
        $(this).addClass("current").siblings().removeClass("current");
    })
    $(".kclis ul").on("click","li",function(){
        var index = $(this).index();
        console.log(lisword[index]);
      $(".contentr-top h1").html(lisword[index]);
        $(contents).eq(index).addClass("contentsblock").siblings().removeClass("contentsblock");
    })

    $(".hot").click(function () {
        $(this).addClass("sorts-current");
        $(".news").removeClass("sorts-current");
        var arry = $(".contentsblock .contentr-center");
        for (var i = arry.length- 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (parseInt($(arry[j]).find("span").eq(1).html()) < parseInt($(arry[j + 1]).find("span").eq(1).html())) {
                    var t = arry[j];
                    arry[j] = arry[j + 1];
                    arry[j + 1] = t;
                }
            }
        }
        $(".contentsblock").html(arry);
    })
    $(".news").click(function () {
        $(this).addClass("sorts-current");
        $(".hot").removeClass("sorts-current");

        var arry = $(".contentsblock .contentr-center");
        for (var i = arry.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (parseInt($(arry[j]).find("i").html()) > parseInt($(arry[j + 1]).find("i").html())) {
                    var t = arry[j];
                    arry[j] = arry[j + 1];
                    arry[j + 1] = t;
                }
            }
        }
        $(".contentsblock").html(arry);
    })
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
})
