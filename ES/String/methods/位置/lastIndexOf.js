/**
 * 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串「首次出现的位置」
 * @param searchString
 * @param position 开始搜索的位置，包含此位置
 */

let string = 'hello world';

console.log(string.lastIndexOf('l')); //9

console.log(string.lastIndexOf('l', 2)); //2

console.log(string.lastIndexOf('l', 3)); //3

console.log(string.lastIndexOf('l', 4)); //3