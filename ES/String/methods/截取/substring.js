/**
 * 提取字符串中两个指定的索引号之间的字符。
 * start
 * end
 */

let string = 'hello world';

console.log(string.substring(6)); //world
console.log(string); //hello world

console.log(string.substring(6, string.length)); //world