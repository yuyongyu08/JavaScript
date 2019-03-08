let str = 'hello';

//逆转字符串
console.log(str.split('').reverse().join('')); //olleh

//1.【转Array】

// 方法1：split()
console.log(str.split('')); //[ 'h', 'e', 'l', 'l', 'o' ]

// 方法2：Array.from()
console.log(Array.from(str)); //[ 'h', 'e', 'l', 'l', 'o' ]