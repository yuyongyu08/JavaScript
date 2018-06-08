let interval = 1000;

function handler(){
    console.log(new Date().getSeconds());
}

setTimeout(function (i) {
    console.log(new Date().getSeconds());
    setTimeout(arguments.callee, i, i)
}, interval, interval);


function intervalHandler(func, w, t){
    var interv = function(){
        if(typeof t === "undefined" || t-- > 0){
            setTimeout(interv, w);
            try{
                func.call(null);
            }
            catch(e){
                t = 0;
                throw e.toString();
            }
        }
    };

    setTimeout(interv, w);
}

// intervalHandler(handler, 1000, 10);

function intervalHandler2(func, w){
    var interval = function(){
        setTimeout(interval, w);
        func.call(null);
    };

    setTimeout(interval, w);
}

function intervalHandler3(func, w){
    var interval = function(){
        setTimeout(interval, w);
        func();
    };

    setTimeout(interval, w);
}

function intervalHandler4(func, w){
    setTimeout(function(){
        setTimeout(arguments.callee, w);
        func();
    }, w);
}

function intervalHandler5(func, w){
    setTimeout(function(interval){
        setTimeout(arguments.callee, w);
        func();
    }, w, w);
}

// intervalHandler5(handler, 1000);





//final
function newSetInterval(handler, timeout) {
    setTimeout(function () {
        handler();
        setTimeout(arguments.callee, timeout)
    }, timeout)
}

// newSetInterval(handler, 1000);










