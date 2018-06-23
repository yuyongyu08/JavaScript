let arr = [1, 2, 3, 4, 5];

console.log(arr.slice()); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]


console.log(arr.slice(1)); // [ 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]


console.log(arr.slice(2, 4)); // [ 3, 4 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]



console.log(arr.slice(2, 100)); // [ 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

//不改变原数组
//参数： start， end