/**
 * 连接两个或更多的元素或数组，并返回结果
 * 参数：...items
 * 返回：拼接后的新数组
 * 不改变数组
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr.concat(0)); // [ 1, 2, 3, 4, 5, 0 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.concat(['a', 'b'])); // [ 1, 2, 3, 4, 5, 'a', 'b' ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.concat(['a', 'b'], [0])); // [ 1, 2, 3, 4, 5, 'a', 'b', 0 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]