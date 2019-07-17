/*
* 使用给定值填充数组
*
* 改变原数组
* */
let arr = ['a', 'b', 'c'];

console.log(arr.fill(7)); //[ 7, 7, 7 ]

console.log(arr); //[ 7, 7, 7 ]

console.log(arr.fill('c', 1)); //[ 7, 'c', 'c' ]

console.log(arr.fill('a', 0, 2)); //[ 'a', 'c', 'c' ]