/**
 * 概念：
 * 柯里化（Currying），是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
 */
function add(x, y) {
    return x + y
}

function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

console.log(add(1, 2));
console.log(curryingAdd(1)(2));
