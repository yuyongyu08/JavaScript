/**
 * 将 Unicode 编码转为字符。 String的静态方法。
 */

let string = 'hello world';

console.log(string.split('').map(item => String.fromCharCode(item.charCodeAt(0))).join('')); //hello world


//第一步
console.log(string.split('')); //[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

//第二步
console.log(string.split('').map(item => item.charCodeAt(0))); // [ 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100 ]

//第三步
console.log(string.split('').map(item => String.fromCharCode(item.charCodeAt(0)))); // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

//第四步
console.log(string.split('').map(item => String.fromCharCode(item.charCodeAt(0))).join('')); //hello world


//string.charCodeAt(index) 与 String.fromCharCode(charCode) 互斥