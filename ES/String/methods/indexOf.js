/**
 * 返回某个指定的字符串值在字符串中首次出现的位置
 * @param searchString
 * @param position 开始搜索的位置，包含此位置
 */

let string = 'hello world';

console.log(string.indexOf('l')); //2

console.log(string.indexOf('l', 2)); //2

console.log(string.indexOf('l', 3)); //3

console.log(string.indexOf('l', 4)); //9