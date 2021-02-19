let createRandomArray = require('../createRandomArray');

/*
* @param (Array)array 原数组
* @param (Boolean)asc 升序
* */
function bubbleSortNew(arr = [], asc = true) {
    let arrSize = arr.length;
    for (let i = 0; i < arrSize; i++){
        for (let j = 0; j < arrSize - 1 - i; j++){ //TODO 容易犯错，对于已经排过序无需再参与遍历
            let [x, y] = [arr[j], arr[j+1]];

            if(asc){
                x > y ? [arr[j], arr[j+1]] = [y, x]: ''
            }else{
                x < y ? [arr[j], arr[j+1]] = [y, x] : ''
            }
        }
    }

    return arr
}


arr = createRandomArray(11);
console.log('原数组:', arr);
console.log('升序： ', bubbleSortNew(arr));
console.log('降序： ', bubbleSortNew(arr, false));
