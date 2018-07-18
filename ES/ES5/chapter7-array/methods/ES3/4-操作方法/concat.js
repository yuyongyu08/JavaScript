let arr = [1, 2, 3, 4, 5];

console.log(arr.concat(0)); // [ 1, 2, 3, 4, 5, 0 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.concat(['a', 'b'])); // [ 1, 2, 3, 4, 5, 'a', 'b' ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.concat(['a', 'b'], [0])); // [ 1, 2, 3, 4, 5, 'a', 'b', 0 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

//不改变原数组