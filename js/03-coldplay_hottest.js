window.onload = function(){
    ajax_api('http://192.168.31.110:3000/guid/hot',fn)
    
    var sp1 = document.getElementsByClassName('span1')[0]
    var sp2 = document.getElementsByClassName('span1')[1]
    var jiazai_ = document.getElementsByClassName('jiazai_')[0]
    var jiazai_img2 = document.getElementsByClassName('jiazai_img2')[0]
    sp1.classList.add('span_st')
    sp1.onclick = function(){
        sp2.classList.remove('span_st')
        this.classList.add('span_st')
        ajax_api('http://192.168.31.110:3000/guid/hot',fn)
        jiazai_.style.display = 'block';
        max_new.style.height=1050 +'px'
        jiazai_img2.src = './../img/more.png'
        
    }
    sp2.onclick = function(){
        ajax_api('http://192.168.31.110:3000/guid/new',fn)
        sp1.classList.remove('span_st')
        this.classList.add('span_st')
        jiazai_.style.display = 'block';
        max_new.style.height=1050 +'px'
        jiazai_img2.src = './../img/more.png'

    }
    
    jiazai_.onclick = function(){
        jiazai_img2.src = './../img/loading-icon.gif'
        var jishi = setTimeout(function(){
            jiazai_.style.display = 'none';
            ajax_api('http://192.168.31.110:3000/useing/master',fnw)
            // 模板和数据关联
            function fnw(obj){
            var html = template('max',{
                value:obj
            })
            //向页面渲染
            document.getElementById('max_new').innerHTML+= html
            }
            max_new.style.height=1750 +'px'
        },1000)
    }
}
