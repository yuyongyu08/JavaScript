for (var i = 1; i <= 5; i++) {
    function timer(j) {
        console.log(j);
    }
    setTimeout(timer.bind(this, i), 1000);
}