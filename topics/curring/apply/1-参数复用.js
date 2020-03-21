//参数复用

function check(reg, text) {
    return reg.test(text)
}

console.log(check(/\d+/g, 'test'));
console.log(check(/[a-z]+/g, 'test'));

//柯里化
function curryingCheck(reg) {
    return function (text) {
        return reg.test(text)
    }
}

let hasNumber = curryingCheck(/\d+/g)
let hasLetter = curryingCheck(/[a-z]+/g)

console.log(hasNumber('test'));
console.log(hasLetter('test'));
console.log(hasLetter('test123'));

