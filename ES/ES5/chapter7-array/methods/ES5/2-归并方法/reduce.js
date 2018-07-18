let arr = [1, 5, 2, 3, 4, 5];

let arr1 = arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
});
console.log(arr1); // 20

let arr2 = arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 20);

console.log(arr2); // 40