var on = function (ele, event, handler) {
    if (document.addEventListener) {
        if(ele && event && handler){
            ele.addEventListener(event, handler, false)
        }
    } else {
        if(ele && event && handler){
            ele.attachEvent('on' + event, handler)
        }
    }
}

//柯里化，只需要做一次兼容判断，无需每次调用都判断
var curringOn = (function(){
    if (document.addEventListener) {
        return function(ele, event, handler){
            if(ele && event && handler){
                ele.addEventListener(event, handler, false)
            }
        }
    } else {
        return function(ele, event, handler){
            if(ele && event && handler){
                ele.attachEvent('on' + event, handler)
            }
        }
    }
})()