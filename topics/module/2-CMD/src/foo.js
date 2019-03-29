define(function (require, exports, module) {
    console.log('foo called');

    //CommonJS的标准导出
    exports.foo = function () {
        var newEle = document.createElement('h2');
        newEle.textContent = 'foo was called!';
        document.getElementById('h1').appendChild(newEle);
    };
});