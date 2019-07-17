/**
 * 对数组的元素进行排序
 * 参数：compareFn(a, b)
 * 返回：排序后的数组
 * 改变原数组
 */
let arr = [10, 5, 333, 54, 5];

console.log(arr.sort(function (a, b) {
    return a > b
})); // [ 5, 5, 10, 54, 333 ]
console.log(arr); // [ 5, 5, 10, 54, 333 ]


// console.log(arr.sort(function (a, b) {
//     return a < b
// })); // [ 333, 54, 10, 5, 5 ]
// console.log(arr); // [ 333, 54, 10, 5, 5 ]

console.log(arr.sort((a, b) => a < b));
console.log(arr);