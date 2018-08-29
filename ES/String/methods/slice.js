/**
 * 提取字符串的片断，并在新的字符串中返回被提取的部分。
 */

let string = 'hello world';

console.log(string.slice(6)); //world
console.log(string); //hello world

console.log(string.slice(6, string.length)); //world
console.log(string.substring(6, string.length)); //world

