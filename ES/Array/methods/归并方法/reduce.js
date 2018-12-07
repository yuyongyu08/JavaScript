let arr = [1, 2, 3, 4, 5];


console.log(arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
})); // 15

console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue)); // 15

console.log(arr); // [ 1, 2, 3, 4, 5 ]



console.log(arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 20)); // 35

console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue, 20)); // 35


console.log(arr); // [ 1, 2, 3, 4, 5 ]



let a = [
    {
        text: '招商',
        value: 0.3
    },
    {
        text: '民生',
        value: 0.1
    },
    {
        text: '建行',
        value: 0.5
    },
];

console.log(a.reduce((init, currentValue, currentIndex, arr)=> init + currentValue.value, 0)); //0.9
