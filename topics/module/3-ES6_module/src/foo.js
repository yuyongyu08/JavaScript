var foo = function () {
    console.log('foo called');

    var newEle = document.createElement('h2');
    newEle.textContent = 'foo was called!';
    document.body.appendChild(newEle);
};

export default foo;