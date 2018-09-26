/**
 * 原理：
 * (1）在数据集之中，选择一个元素作为"基准"（pivot）。
 *（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * (3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */


let arr = [77, 66,  55, 44, 33, 22, 11];

function quickSort(array) {
    let arrayLength = array ? array.length : 0;

    if(arrayLength <= 1){
        return array
    }

    let comparerIndex = Math.floor(arrayLength / 2);
    let comparer = array.splice(comparerIndex, 1)[0];

    let left = [],right = [];

    array.forEach(function (value) {
        if(value < comparer){
            left.push(value);
        }else {
            right.push(value)
        }
    });

    return arguments.callee(left).concat(comparer, arguments.callee(right))
}



console.log(quickSort(arr));