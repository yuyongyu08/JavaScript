function add1(str) {
    return str + 1
}

function add2(str) {
    return str + 2
}

function add3(str) {
    return str + 3
}

function compose(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const sum = compose(add1, add2, add3);

console.log(sum('abc'));