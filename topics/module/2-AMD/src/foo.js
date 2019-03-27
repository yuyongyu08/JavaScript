/**
 * Created by yuyongyu on 2018/1/18.
 */
define('foo', [], function () {
    var foo = function () {
        var newEle = document.createElement('h2');
        newEle.textContent = 'foo was called!';
        document.getElementById('h1').appendChild(newEle);
    };

    return foo;
});