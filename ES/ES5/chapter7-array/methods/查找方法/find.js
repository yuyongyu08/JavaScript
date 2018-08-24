let arr = [1, 2, 3, 4, 5];

console.log(arr.find(function (value, index, array) {
    return value >= 2
})); // 2

console.log(arr.find(item => item >=2)); // 2