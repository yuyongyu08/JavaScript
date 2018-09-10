let arr = [77, 66, 55, 55, 44, 33, 22, 11];

/*
* @param (Array)array 原数组
* @param (Boolean)asc 升序
* */
function bubbleSort(array, asc) {
    for (let i = 0, length = array.length; i < length; i++){ //外层循环控制趟数，总趟数为len-1
        for(let j = 0; j < length - i - 1; j++){ //内层循环为当前趟数所需要比较的次数
            let temp = array[j];

            if(asc){
                if(array[j] > array[j+1]){
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }else{
                if(array[j] < array[j+1]){
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }

        }
    }

    return array
}

console.log(bubbleSort(arr, true));