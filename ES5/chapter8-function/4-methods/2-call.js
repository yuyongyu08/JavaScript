function sum(value1, value2) {
    return value1 + value2
}

// 直接执行了函数

function callSum(value1, value2) {
    return sum.call(this, value1, value2) // 必须逐个传参，和apply()的唯一区别
}

console.log(callSum(10, 20));