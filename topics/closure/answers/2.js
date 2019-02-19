for (let i = 1; i <= 5; i++) {
    setTimeout(function (j) {
        console.log(j);
    }, 1000, i);
}