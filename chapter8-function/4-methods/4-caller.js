function sum(num1, num2) {
    console.log(sum.caller);
    console.log(typeof sum.caller);
    console.log(sum.caller.name);
    return num1 + num2
}

function callSum() {
    return sum(10, 20)
}

console.log(sum.caller); //null 未被调用
sum(10, 20);
callSum();