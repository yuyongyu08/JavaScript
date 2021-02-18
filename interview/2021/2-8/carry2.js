// add(1)(2) //输出3
// add(1)(2)(3) //输出6

Function.prototype.result = function () {
    return this.sum
}

function add(...args) {
    fn.sum = args.reduce((a, b) => a + b, 0);

    function fn(...params) {
        fn.sum = params.reduce((a, b) => a + b, fn.sum);
        return fn
    }

    return fn
}

console.log(add(1)(2).result());
console.log(add(1)(2)(3).result());
console.log(add(1, 2, 3)(4).result());
console.log(add(1, 2, 3)(4,5).result());

