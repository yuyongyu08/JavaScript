let arr = [3, 42, 6,123, 68, 80, 129];

function bubble(array) {
    for (let i = 0, length = array.length; i < length; i++){
        if(array[i] > array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }

    return array;
}

console.log(bubble(arr));