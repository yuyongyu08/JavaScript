//length代表形参个数

function a() {
    console.log('It is function a');
}

function b(name) {
    console.log('It is function ' + name);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(a.length);
console.log(b.length);
console.log(sum.length);