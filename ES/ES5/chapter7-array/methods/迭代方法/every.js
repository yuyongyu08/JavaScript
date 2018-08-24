let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.every(function (value, index, array) {
    return value > 1
})); //false

console.log(arr.every(item => item > 1)); //false



console.log(arr.every(function (value, index, array) {
    return value >= 1
})); //true

console.log(arr.every(item => item >= 1)); //true