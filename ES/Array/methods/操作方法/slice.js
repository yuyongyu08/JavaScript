/**
 * 从指定起止位置截取一段原数组的浅拷贝
 * @param begin 开始位置（包含）
 * @param end 结束位置（不包含）
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

// 验证浅拷贝
let obj = { a: 2 }
let arr1 = [1, obj, 3]

console.log('arr1.slice(1)', arr1.slice(1));
arr1.slice(1).a = 4;

console.log('arr1.obj: ', arr1[1].a);