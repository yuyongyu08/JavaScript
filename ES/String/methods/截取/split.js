/**
 * 把字符串分割为字符串数组。
 */

let string = 'hello world';

console.log(string.split()); //[ 'hello world' ]
console.log(string.split('')); //[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(string); //hello world

console.log(string.split('l')); //[ 'he', '', 'o wor', 'd' ]