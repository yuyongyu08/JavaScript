define(['exports'], function (exports) {
    console.log('bar called');

    var bar = exports.log = function () {
        console.log('bar.log() called');
        var newEle = document.createElement('h2');
        newEle.textContent = 'bar.log was called!';
        document.getElementById('h1').appendChild(newEle);
    }
});