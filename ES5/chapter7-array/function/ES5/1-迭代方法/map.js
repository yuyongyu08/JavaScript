let arr = [1, 5, 2, 3, 4, 5];

let arr1 = arr.map(function (value, index, array) {
    return value * 2
});

console.log(arr1); //[ 2, 10, 4, 6, 8, 10 ]
console.log(arr); // [ 1, 5, 2, 3, 4, 5 ]