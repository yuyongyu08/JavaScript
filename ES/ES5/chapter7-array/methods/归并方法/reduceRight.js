let arr = [1, 2, 3, 4, 5];


console.log(arr.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
})); // 15

console.log(arr.reduceRight((previousValue, currentValue) => previousValue + currentValue)); // 15

console.log(arr); // [ 1, 2, 3, 4, 5 ]



console.log(arr.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 20)); // 35

console.log(arr.reduceRight((previousValue, currentValue) => previousValue + currentValue, 20)); // 35


console.log(arr); // [ 1, 2, 3, 4, 5 ]