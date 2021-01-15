/*
* reduceRight(callback(pre, cur, currentIndex, array), initialValue)
*
* 同reduce，只是迭代顺序从后往前而已
**/

let arr = [1, 2, 3, 4, 5];

console.log(arr.reduceRight((previousValue, currentValue) => previousValue + currentValue)); // 15
console.log(arr.reduceRight((previousValue, currentValue) => previousValue + currentValue, 10)); // 25

console.log(arr); // [ 1, 2, 3, 4, 5 ]
