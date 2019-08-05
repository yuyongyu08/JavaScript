function sendRequest(src) {
    //通过script：【必须】要拼接到DOM，才会触发请求
    sendByScript(src + '/byScript'); //不会触发

    sendByScriptInsertDOM(src + '/byScriptDOM');//会触发

    //通过img：【无需】拼接到DOM
    //方式1：通过Image对象
    sendByImage(src+ '/byImage');

    //方式2：通过<img>标签
    sendByImg(src+ '/byImg');
}

function sendByScript(src){
    var script = document.createElement("script");
    script.src = src;
}

function sendByScriptInsertDOM(src){
    var script = document.createElement("script");
    script.src = src;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
}

function sendByImage(src) {
    var img = new Image();
    img.src = src;
}

function sendByImg(src) {
    var img = document.createElement("img");
    img.src = src;
}

