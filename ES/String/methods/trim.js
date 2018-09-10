/**
 * 截取字符串两端的空格，中间的空格不处理
 */
let string = '  hello world ';

console.log(string.trim()); //hello world
console.log(string.length); //14
console.log(string.trim().length); //11