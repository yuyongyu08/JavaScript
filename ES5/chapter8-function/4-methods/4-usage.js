//1.数组之间追加




//2.获取数组中最大最小值

let arr1 = [11, 233, -30, 84];

let max = Math.max.apply(Math, arr1);
console.log('最大值（es5语法）：', max);

//es6语法-结构赋值
let max2 = Math.max(...arr1);
console.log('最大值（es6语法）：', max2);




//3.验证数据类型
function isArray(obj) {
    return Object.prototype.toString.apply(obj) === '[object Array]'
}

console.log('arr1' + (isArray(arr1)? '是' : '不是') + '数组');

//4.类数组拥有数组方法