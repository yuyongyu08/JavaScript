let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.every(function (value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);

    return value > 1
}));