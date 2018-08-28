/**
 * 从开始位置，删除指定个数元素，添加指定个元素
 * 参数：start, deleteCount, ...insertItems
 * 返回：删除的数组
 * 改变原数组
 */

let arr = [1, 2, 3, 4, 5];

//截取
console.log(arr.splice(1, 2)); //[ 2, 3 ]
console.log(arr); // [ 1, 4, 5 ]


let arr1 = [1, 2, 3, 4, 5];

//拼接
console.log(arr1.splice(1, 0, ['a', 'b'])); //[ ]
console.log(arr1); // [ 1, [ 'a', 'b' ], 2, 3, 4, 5 ]