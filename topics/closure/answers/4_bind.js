for (var i = 1; i <= 5; i++) {
    function timer(index) {
        console.log(index);
    }
    setTimeout(timer.bind(this, i), 1000);
}