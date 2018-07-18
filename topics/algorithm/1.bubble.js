let arr = [10, 3, 2, 33, 8, 41, 5, 20];

/*
* @param array 原数组
* @param asc 升序
* */
function bubbleSort(array, asc) {
    for (let i = 0, length = array.length; i < length; i++){ //外层循环控制趟数，总趟数为len-1
        for(let j = 0; j < length - i - 1; j++){ //内层循环为当前i趟数 所需要比较的次数
            let temp = array[j];
            if(array[j] > array[j+1]){
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array
}

console.log(bubbleSort(arr));