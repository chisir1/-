window.onload = function(){

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
    clearInterval(timer2)
}
lun.onmouseleave=function(){
    automove()
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
