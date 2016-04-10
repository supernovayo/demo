/**
 *
 */

/*加载玩之后执行*/
window.onload = function(){
    search();
    banner();
    secondKill();
    goBack();
}
/*搜索*/
function search(){
    //搜索区块DOM对象
    var searchDom = document.querySelector('.jd_header_box');
    //轮播图的对象
    var bannerDom = document.querySelector('.jd_banner');
    //拿到图片的高度
    var height = bannerDom.scrollHeight;
    console.log(bannerDom.scrollHeight);
    console.log(bannerDom.clientHeight);
    console.log(bannerDom.offsetHeight);
    //滚动事件
    window.onscroll = function(){
        //获取滚动条距离顶部位子
        var top = document.body.scrollTop;
        //如果  距离  大于  图片的高度
        if( top > height ){
            searchDom.style.background = "rgba(201,21,35,0.8)";
        }else{
            //计算  透明度
            var op = top/height * 0.8;
            searchDom.style.background = "rgba(201,21,35,"+op+")";
        }
    }
}
/*广告栏*/
function banner(){
    //轮播图的对象
    var bannerDom = document.getElementsByClassName('jd_banner')[0];
    //图片盒子
    var imageBox = bannerDom.getElementsByTagName("ul")[0];
    //点盒子
    var pointBox = bannerDom.getElementsByTagName("ul")[1];
    //点dom数组
    var points = pointBox.getElementsByTagName("li");

    var w = bannerDom.offsetWidth;

    /*加上过渡*/
    var addTransition = function(){
        imageBox.style.webkitTransition = "all .2s ease 0s";
        imageBox.style.transition = "all .2s ease 0s";
    };
    /*去除过渡*/
    var removeTransition = function(){
        imageBox.style.webkitTransition = "none";
        imageBox.style.transition = "none";
    };
    /*改变距离*/
    var transform = function(){
        imageBox.style.webkitTransform = "translateX("+(-index*w + "px")+")";
        imageBox.style.transform = "translateX("+(-index*w+ "px")+")";
    };
    /*设置点*/
    var setPoint = function(){
        for(var i = 0; i < points.length ; i++){
            points[i].className = " ";
        }
        points[index-1].className = "now";
    };



    /*定时轮播*/
    var index = 1;
    var intervalTimer;//计时器
    intervalTimer = setInterval(function(){
        index ++;
        addTransition();
        transform();
    },3000);


    /*过渡结束后的处理事件*/
    imageBox.addEventListener('transitionEnd',function(){
        //console.log(index);
        if(index>= 9){
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = 8;
            removeTransition();
            transform();
        }
        setPoint();
    });
    imageBox.addEventListener('webkitTransitionEnd',function(){
        //console.log(index);
        if(index>= 9){
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = 8;
            removeTransition();
            transform();
        }
        setPoint();
    });

    /*移动端事件*/
    var X = 0,moveX = 0,endX = 0;
    imageBox.addEventListener('touchstart',function(e){
        //console.log("触摸开始");
        X = e.touches[0].clientX;
        console.log(e);
    });
    imageBox.addEventListener('touchmove',function(e){
        //清除默认滚动事件
       // e.preventDefault();
        //console.log("触摸滑动");
        endX = e.touches[0].clientX;
        moveX = X - endX;
        //console.log(moveX);
        //清除计时器
        if(intervalTimer){
            clearInterval(intervalTimer);
        }
        removeTransition();
        imageBox.style.webkitTransform = "translateX("+(-(index*w+ moveX) + "px")+")";
        imageBox.style.transform = "translateX("+(-(index*w+ moveX) + "px")+")";
    });
    imageBox.addEventListener('touchend',function(e){
        //console.log("触摸结束");
        //取绝对值 比 宽度的三分之一大小
        if(Math.abs(moveX) > w/3 && endX!=0 ){
            if(moveX>0){
                index ++ ;
            }else{
                index -- ;
            }
            addTransition();
            transform();
        }else{
            addTransition();
            transform();
        }
        X = 0;
        endX = 0;
        //清除计时器
        if(intervalTimer){
            clearInterval(intervalTimer);
        }
        intervalTimer = setInterval(function(){
            index ++;
            addTransition();
            transform();
        },3000);
    });
}

/*秒杀倒计时*/
var secondKill = function(){
    var killTimeDom = document.getElementsByClassName("kill_time")[0];
    //这个是6个装数组的Dom
    var numList = killTimeDom.getElementsByClassName("num");
    //到计时的总时间
    var times = 4*60*60;

    setInterval(function(){
        times --;
        var h = Math.floor(times/(60*60));
        var m = Math.floor((times/60)%60);  //除以60之后的余数
        var s = times%60;

        numList[0].innerHTML = h>10?Math.floor(h/10):0;
        numList[1].innerHTML = h%10;
        numList[2].innerHTML = m>10?Math.floor(m/10):0;
        numList[3].innerHTML = m%10;
        numList[4].innerHTML = s>10?Math.floor(s/10):0;
        numList[5].innerHTML = s%10;

    },1000);
};

/*回到顶部*/
var goBack = function(){
    var goBack = document.getElementsByClassName("jd_back_top")[0];

    window.addEventListener('scroll',function(){
        var top = document.body.scrollTop;
        if(top>400){
            goBack.style.opacity = 1;
        }else{
            goBack.style.opacity = 0;
        }
    },false);

    goBack.onclick = function(){
        window.scrollTo(0,0);
    }
};