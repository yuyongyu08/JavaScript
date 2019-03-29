define(function (require, exports, module) {
    console.log('bar called');

    //CommonJS的标准导出
    module.exports = {
        log: function() {
            console.log('bar.log() called');
            var newEle = document.createElement('h2');
            newEle.textContent = 'bar.log was called!';
            document.getElementById('h1').appendChild(newEle);
        }
    }
});