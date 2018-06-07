function sum(value1, value2) {
    return value1 + value2
}

//直接执行了函数

function callSum1(value1, value2) {
    return sum.apply(this, arguments) //方式一：用arguments传参
}


function callSum2(value1, value2) {
    return sum.apply(this, [value1, value2]) //方式二：用数组传参
}


console.log(callSum1(10, 20));

console.log(callSum2(10, 20));
