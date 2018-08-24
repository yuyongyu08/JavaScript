let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.filter(function (value, index, array) {
    return value > 3
})); //[ 5, 4, 5 ]

console.log(arr.filter(item => item > 3)); //[ 5, 4, 5 ]

console.log(arr); // [ 1, 5, 2, 3, 4, 5 ]