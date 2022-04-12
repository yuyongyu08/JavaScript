/**
 * 用固定值对指定位置进行替换
 * @param value 用来替换的值
 * @param start 从此位置(不包含)开始替换
 * @param end 替换截取到的位置(不包含)
 * 不改变原数组
 */

let arr = ['a', 'b', 'c'];

console.log(arr.fill(7)); //[ 7, 7, 7 ] 类似arr.map(() => 7)

console.log(arr); //[ 7, 7, 7 ]

console.log(arr.fill('c', 1)); //[ 7, 'c', 'c' ]

console.log(arr.fill('a', 0, 2)); //[ 'a', 'c', 'c' ]