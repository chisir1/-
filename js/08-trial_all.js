window.onload = function(){
    var spp1 = document.querySelector('.spp1')
    var spp2 = document.querySelector('.spp2')
    var jz_ = document.getElementsByClassName('jz_')[0]
    var jz_img2 = document.getElementsByClassName('jz_img2')[0]
    // var d_all = document.querySelector('.d_all')
    var sy_sq = document.querySelector('.sy_sq')
    var sy_sy = document.querySelector('.sy_sy')
    var sy_js = document.querySelector('.sy_js')
    var sy_out = document.querySelector('.sy_out')
    var sy_all =document.querySelector('.sy_all')
    var sy_head2 =document.querySelector('.sy_head2')
    
    spp1.classList.add('yangshi')
    sy_all.classList.add('yangshi')



    jz_.onclick = function(){
        jz_img2.src = './../img/loading-icon.gif'
        setTimeout(function(){
            jz_.style.display = 'none'
            d_all.style.height = 2380 + 'px'
            ajax_api('http://192.168.31.110:3000/useing/public',sh)
            function sh(obj){
                var html = template('shiy',{
                    value:obj
                })
                document.getElementById('d_all').innerHTML+= html
            }
        },1000)
    }
    
    sy_sq.onclick = function(){
        for(var i = 0; i<sy_head2.children.length;i++){

            sy_head2.children[i].classList.remove('yangshi')
        }
        this.classList.add('yangshi')


        var d_all = document.querySelector('.d_all')
        var jz_ = document.getElementsByClassName('jz_')[0]
        sy_out.removeChild(d_all)
        sy_out.removeChild(jz_)
        var d_all1 = document.createElement('div')
        var jz_1 = document.createElement('div')
        var imgss = document.createElement('img')
        var text = document.createTextNode('点击加载更多')
        imgss.classList.add('jz_img2')
        imgss.src='./../img/more.png'
        d_all1.classList.add('d_all')
        jz_1.classList.add('jz_')
        jz_1.appendChild(imgss)
        jz_1.appendChild(text)
        console.log(imgss);
        sy_out.appendChild(d_all1)
        sy_out.appendChild(jz_1)
        ajax_api('http://192.168.31.110:3000/useing/public',sh)
        function sh(obj){
            var html = template('shiy_sq',{
                value:obj
            })
            document.getElementsByClassName('d_all')[0].innerHTML= html
        }
    }
    sy_sy.onclick = function(){
        for(var i = 0; i<sy_head2.children.length;i++){

            sy_head2.children[i].classList.remove('yangshi')
        }
        this.classList.add('yangshi')
        var d_all = document.querySelector('.d_all')
        var jz_ = document.getElementsByClassName('jz_')[0]
        sy_out.removeChild(d_all)
        sy_out.removeChild(jz_)
        var d_all1 = document.createElement('div')
        var jz_1 = document.createElement('div')
        var imgss = document.createElement('img')
        var text = document.createTextNode('点击加载更多')
        imgss.classList.add('jz_img2')
        imgss.src='./../img/more.png'
        d_all1.classList.add('d_all')
        jz_1.classList.add('jz_')
        jz_1.appendChild(imgss)
    jz_1.appendChild(text)
    console.log(imgss);
    sy_out.appendChild(d_all1)
    sy_out.appendChild(jz_1)
    ajax_api('http://192.168.31.110:3000/useing/public',sh)
    function sh(obj){
        var html = template('shiy_sy',{
            value:obj
        })
        document.getElementsByClassName('d_all')[0].innerHTML= html
    }
    
    
}
sy_js.onclick = function(){
    for(var i = 0; i<sy_head2.children.length;i++){

        sy_head2.children[i].classList.remove('yangshi')
    }
    this.classList.add('yangshi')
    var d_all = document.querySelector('.d_all')
    var jz_ = document.getElementsByClassName('jz_')[0]
    sy_out.removeChild(d_all)
    sy_out.removeChild(jz_)
    var d_all1 = document.createElement('div')
    var jz_1 = document.createElement('div')
    var imgss = document.createElement('img')
    var text = document.createTextNode('点击加载更多')
    imgss.classList.add('jz_img2')
    imgss.src='./../img/more.png'
    d_all1.classList.add('d_all')
    jz_1.classList.add('jz_')
    jz_1.appendChild(imgss)
    jz_1.appendChild(text)
    console.log(imgss);
    sy_out.appendChild(d_all1)
    sy_out.appendChild(jz_1)
    ajax_api('http://192.168.31.110:3000/useing/public',sh)
    function sh(obj){
        var html = template('shiy_js',{
            value:obj
        })
        document.getElementsByClassName('d_all')[0].innerHTML= html
    }
    
    
}
sy_all.onclick = function(){
    for(var i = 0; i<sy_head2.children.length;i++){

        sy_head2.children[i].classList.remove('yangshi')
    }
    this.classList.add('yangshi')
    var d_all = document.querySelector('.d_all')
    var jz_ = document.getElementsByClassName('jz_')[0]
    sy_out.removeChild(d_all)
    sy_out.removeChild(jz_)
    var d_all1 = document.createElement('div')
    var jz_1 = document.createElement('div')
    var imgss = document.createElement('img')
    var text = document.createTextNode('点击加载更多')
    imgss.classList.add('jz_img2')
    imgss.src='./../img/more.png'
    d_all1.classList.add('d_all')
    jz_1.classList.add('jz_')
    jz_1.appendChild(imgss)
    jz_1.appendChild(text)
    console.log(imgss);
    sy_out.appendChild(d_all1)
    sy_out.appendChild(jz_1)
    ajax_api('http://192.168.31.110:3000/useing/public',sh)
    function sh(obj){
        var html = template('shiy',{
            value:obj
        })
        document.getElementsByClassName('d_all')[0].innerHTML= html
    }
    
    
}

spp2.onclick =function(){
    spp1.classList.remove('yangshi')
    this.classList.add('yangshi')
    for(var i = 0; i<sy_head2.children.length;i++){

        sy_head2.children[i].classList.remove('yangshi')
    }
    this.classList.add('yangshi')
    var d_all = document.querySelector('.d_all')
    var jz_ = document.getElementsByClassName('jz_')[0]
    sy_out.removeChild(d_all)
    sy_out.removeChild(jz_)
    var d_all1 = document.createElement('div')
    var jz_1 = document.createElement('div')
    var imgss = document.createElement('img')
    var text = document.createTextNode('点击加载更多')
    imgss.classList.add('jz_img2')
    imgss.src='./../img/more.png'
    d_all1.classList.add('d_all')
    jz_1.classList.add('jz_')
    jz_1.appendChild(imgss)
    jz_1.appendChild(text)
    console.log(imgss);
    sy_out.appendChild(d_all1)
    sy_out.appendChild(jz_1)
    ajax_api('http://192.168.31.110:3000/useing/master',sh)
    function sh(obj){
        var html = template('shiy',{
            value:obj
        })
        document.getElementsByClassName('d_all')[0].innerHTML= html
    }
    


















}
spp1.onclick =function(){
    spp2.classList.remove('yangshi')
    this.classList.add('yangshi')
}


}