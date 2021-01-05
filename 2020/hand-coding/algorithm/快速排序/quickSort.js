let createRandomArray = require('../createRandomArray');

/**
 * 原理：
 * (1）在数据集之中，选择一个元素作为"基准"（pivot）。
 *（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * (3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

/*
* @param (Array)array 原数组
* @param (Boolean)asc 升序
* */
function quickSort(array = [], asc = true) {
    let arrayLength = array.length;

    if(arrayLength <= 1){
        return array
    }

    let comparerIndex = Math.floor(arrayLength / 2);
    let comparer = array.splice(comparerIndex, 1)[0];
    let left = [],right = [];

    array.forEach(function (value) {
        if(asc){
            value < comparer ? left.push(value) : right.push(value);
        }else{
            value > comparer ? left.push(value) : right.push(value);
        }
    });

    return quickSort(left, asc).concat(comparer, quickSort(right, asc))
}


let arr = createRandomArray(11);
console.log('原数组:', arr);
console.log('升序： ', quickSort([...arr]));
console.log('降序： ', quickSort([...arr], false));