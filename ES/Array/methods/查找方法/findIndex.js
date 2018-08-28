let arr = [1, 2, 3, 4, 5];

console.log(arr.findIndex(function (value, index, array) {
    return value >= 2
})); // 1

console.log(arr.findIndex(item => item >=2)); // 1