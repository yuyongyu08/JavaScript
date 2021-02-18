// add(1)(2).sum()  //输出3
// add(1)(2)(3).sum() //输出6

Function.prototype.result = function () {
    return this.sum
}

function add(x) {
    fn.sum = x;

    function fn(y) {
        fn.sum += y;
        return fn
    }
    
    return fn
}

console.log(add(1)(2).result());

console.log(add(1)(2)(3).result());
