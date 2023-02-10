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

let check = curryingCheck(/\d+/g)
let checkLetter = curryingCheck(/[a-z]+/g)

console.log(checkNumber('test'));
console.log(checkLetter('test123'));

