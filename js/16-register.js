var bnt2 = document.querySelector('.bnt2')
var bnt = document.querySelector('.bnt')
var tu = document.querySelector('.tu')
var in_yz = document.querySelector('.in_yz')
var in_name = document.querySelector('.in_name')
var in_pass = document.querySelector('.in_pass')
var in_pass2 = document.querySelector('.in_pass2')
var in_tell = document.querySelector('.in_tell')
var sp = document.querySelectorAll('.sp')
var reg_tel = /^1[^012][0-9]{9}$/;
var reg_name = /^\w[4,8]$/;
var pass = /^\w[6,12]$/;
bnt2.onclick = function(){
    for(var i =0;i<sp.length;i++){
        sp[i].innerHTML = '';
    }
    if(!reg_tel.test(in_tell.value)){
        
        sp[0].innerHTML = '*请输入正确手机号!'
    }else if(tu.value != 'r2B7'){
        sp[1].innerHTML = '*验证码错误!'
    }else if(!reg_name.test(in_name.value)){
        sp[3].innerHTML = '*用户名输入不合法!'

    }else if(!pass.test(in_pass.value)){

        sp[4].innerHTML = '*密码输入不合法!'
    }else if(in_pass.value!=in_pass2.value){
        sp[5].innerHTML = '*两次密码不一致!'

    }else{
        // ajax请求
        var wajax = new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP')
        wajax.open('post','http://192.168.31.110:3000/users/register',true)
        wajax.send();
        wajax.onreadystatechange = function(){
            if(wajax.readyState == 4 && wajax.status == 200){
                var obj = JSON.parse(wajax.responseText);
                console.log(obj);
                fn(obj)
                
            }
        }  




    }
}

// 获取验证码
var num = 6; //计时器
var temp = true; //添加判断条件
bnt.onclick = function(){
    if(temp){
        temp = false;
   var times = setInterval(function(){ //times  为计时器ID
       
        num--;
        bnt.innerHTML = num + '秒';
        if(num < 0){
            clearInterval(times); //清除计时器
            temp = true;
            num = 6;
            bnt.innerHTML = '获取验证码';
        }
        },1000)
    }
}