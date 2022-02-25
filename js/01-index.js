window.onload = function(){
// 倒计时

var ss = setInterval(function(){
    var time_ = document.getElementById('time_')
    var now_times = new Date()
    var le_times = new Date('2022-03-01 00:00:00')
    var num = (le_times - now_times) / 1000; //获取时间差  秒
            var d = parseInt(num / 60 / 60 / 24 ) ;//天
            d = d < 10 ? '0' + d : d;
            var h = parseInt(num /60 / 60 % 24) ; //小时
            h = h < 10 ? '0' + h : h;
            var m = parseInt(num /60 % 60) ; //分
            m = m < 10 ? '0' + m : m;
            var s = parseInt(num % 60); //秒
            s = s < 10 ? '0' + s : s;
            time_.innerHTML=`${d}天${h}时${m}分${s}秒`
},1000)


// 轮播图
var lun = document.getElementsByClassName('lun1')[0]
var timer = null;
var timer2 = null;
var index = 0 //计数器
function move(){
    var step = 0; // 初始化步数
    var maxstep = 20; //最大步数
    var star =  lun.scrollLeft //获取当前滚动条位置
    var end = 1600 * index; //结束位置
    var m_width = (end - star) / maxstep //每步移动距离
    timer2 = setInterval(function(){
        step++;
        if(step >= maxstep){
            step = 0
            clearInterval(timer2)
        }
        star += m_width
        lun.scrollLeft=star

    },20)
}
function automove(){
     timer = setInterval(function(){
        index++
        if(index >= 3){
            index = 0
        }
        move()

    },3000)
}
lun.onmouseenter = function(){
    clearInterval(timer)
    // clearInterval(timer2)
}
lun.onmouseleave=function(){
    automove()
}
var lun_left = document.getElementsByClassName('lun_left')[0]
var lun_right = document.getElementsByClassName('lun_right')[0]
lun_left.onmouseenter=function(){
    clearInterval(timer)
}
lun_left.onmouseleave=function(){
    automove()
}
lun_right.onmouseenter=function(){
    clearInterval(timer)
}
lun_right.onmouseleave=function(){
    automove()
}
lun_left.onclick=function(){
    var star =  lun.scrollLeft
    console.log(star);

    if(star>=1600){
        index--

        lun.scrollLeft=star-1600
    }
}
lun_right.onclick=function(){
    var star =  lun.scrollLeft
    console.log(star);
    if(star<3200){
        index++
        lun.scrollLeft=star+1600
    }
}
automove()
    document.addEventListener('visibilitychange',function(){
        if(this.visibilityState=="hidden"){
            console.log(this.visibilityState);
            clearInterval(timer)
            clearInterval(timer2)
        };
        if(this.visibilityState=="visible"){
            console.log(this.visibilityState);
            automove()
        };
    })
}

// 加载更多
var jiazai = document.getElementsByClassName('jiazai')[0]
var jiazai_img = document.getElementsByClassName('jiazai_img')[0]
var coldplay_1 = document.getElementsByClassName('coldplay_1')[0]
jiazai.onclick = function(){
    jiazai_img.src = './../img/loading-icon.gif'
    var jishi = setTimeout(function(){
        jiazai.style.display = 'none';
        coldplay_1.style.height=900 +'px'
    },1000)
}