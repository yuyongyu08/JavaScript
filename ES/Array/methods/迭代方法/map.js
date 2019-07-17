let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.map(function (value, index, array) {
    return value * 2
})); // [ 2, 10, 4, 6, 8, 10 ]

console.log(arr.map(item => item * 2));// [ 2, 10, 4, 6, 8, 10 ]


console.log(arr.map(function (value, index, array) {
    return 2
})); // [ 2, 2, 2, 2, 2, 2 ]

console.log(arr.map(item => 2)); // [ 2, 2, 2, 2, 2, 2 ]


//不改变原数组
console.log(arr); // [ 1, 5, 2, 3, 4, 5 ]

//在转化数组方面，和map有同样作用的还有Array.from()

console.log(Array.from(arr, function (x) {
    return x * 2
})); //[ 2, 10, 4, 6, 8, 10 ]