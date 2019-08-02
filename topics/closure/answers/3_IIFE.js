for (var i = 1; i <= 5; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index);
        }, 1000);
    })(i)
}