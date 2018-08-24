/**
 * 通过起始位置，选取数组的的一部分，并返回一个新数组
 * 参数：start， end
 * 返回：新数组
 * 不改变原数组
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr.slice()); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(1)); // [ 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(2, 4)); // [ 3, 4 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(2, 100)); // [ 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
