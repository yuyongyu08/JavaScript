console.log(foo);
console.log(b);

let a = 1;

function foo(a) {
    return a = a + 3
}

var b = foo(a);

function foo(a) {
    return a = a + 2
}

const c = foo(a);

console.info(a, b, c);

//1,3,3