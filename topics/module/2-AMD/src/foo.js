define('foo', [], function () {
    console.log('foo called');

    var foo = function () {
        var newEle = document.createElement('h2');
        newEle.textContent = 'foo was called!';
        document.getElementById('h1').appendChild(newEle);
    };

    return foo;
});