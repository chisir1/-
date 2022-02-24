// 封装ajax请求
function ajax_api(url,fn){
    var oajax = new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP')
    oajax.open('get',url,true)
    oajax.send();
    oajax.onreadystatechange = function(){
        if(oajax.readyState == 4 && oajax.status == 200){
            var obj = JSON.parse(oajax.responseText);
            console.log(obj);
            fn(obj)
            
        }
    }       
    }