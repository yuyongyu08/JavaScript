let arr = [10, 5, 333, 54, 5];

console.log(arr.sort(function (a, b) {
    return a > b
})); // [ 5, 5, 10, 54, 333 ]

console.log(arr.sort(function (a, b) {
    return a < b
})); // [ 333, 54, 10, 5, 5 ]