let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.some(function (value, index, array) {
    return value > 5
})); // false

console.log(arr.some(item => item > 5)); // false



console.log(arr.some(function (value, index, array) {
    return value > 4
})); // true

console.log(arr.some(item => item > 4)); // true
