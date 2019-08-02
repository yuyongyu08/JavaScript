//TODO
for (var i = 1; i <= 5; i++) {
    this.j = i
    setTimeout(() => {
        console.log(this.j);
    }, 1000);
}