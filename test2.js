/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    function check(nums, x) {
        let sum = 0
        let last = 0
        nums.forEach((item, index, arr) => {
            while (item - arr[last] > x) {
                last += 1
            }
            sum += index - last
        })
        return sum
    }

    nums.sort((a, b) => {
        return a - b
    })
    let left = 0
    let right = 1000000
    while (left <= right) {
        middle = Math.ceil((left + right) / 2)
        if (check(nums, middle) < k) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};

console.log(smallestDistancePair([1, 3, 1, 2], 2));


function minDistance(nums, k) {

    var arr = [];

    for(var i = 0; i < nums.length - 1; i++) {

        for(var j = i + 1; j < nums.lenght; j++) {

            arr.push(Math.abs(nums[i]-nums[j]));

        }

    }

    arr.sort(sortArr);

    return arr[k-1];

}

function sortArr(a,b) {

    return a - b;

}

console.log(minDistance([1, 3, 1], 1));