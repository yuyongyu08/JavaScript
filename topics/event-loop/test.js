async function f1() {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle(123)
        })
    })
}


(async function () {
    let p = await f1();
    console.log(p);
})();

(async function () {
    let p = f1();
    p.then(console.log)
})();