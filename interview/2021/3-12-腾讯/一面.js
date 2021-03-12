
// 给定一个排序数组（无重复元素） 和一个目标值，在这个排序数组中查找目标值 并且返回目标值的索引，如果目标值不存在，那么他将会按照顺序插入到数组中，并且返回插入的顺序索引，比如：
// 数组：[1,3,6,9,13]； 目标值：3； 返回：1
// 数组：[2,8,11,19,55]；目标值：15；返回：3

function findeIndex(arr, target) {
    if (arr.includes(arr)) {
        return arr.findIndex(item => item == target);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < target && target < arr[i + 1]) {
                arr.splice(i, 0, target)
                return i + 1
            }
        }
    }
}

console.log(findeIndex([1, 3, 6, 9, 13], 3))
console.log(findeIndex([2, 8, 11, 19, 55], 15))


// 给定一个数组，要求将数组中所有为0的元素移动到数组的最后，其他元素顺序不变，
// 比如：[1,2,0,5,0,6,8,9,0,5,2,0,4]
// 返回：[1,2,5,6,8,9,5,2,4,0,0,0,0]	


function reSort(arr, target) {
    return [...arr.filter(item => item != target), ...arr.filter(item => item == target)]
}

console.log(reSort([1,2,0,5,0,6,8,9,0,5,2,0,4]))