/**
 * Created by yuyongyu on 2018/1/18.
 */
define(['exports'], function (exports) {
    var bar = exports.log = function () {
        var newEle = document.createElement('h2');
        newEle.textContent = 'bar.log was called!';
        document.getElementById('h1').appendChild(newEle);
    }
});