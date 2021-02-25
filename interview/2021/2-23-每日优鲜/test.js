const arr = [1, 4, 2, 5];

function getPair(arr, num){
    let size = arr.length;
    for (let index = 0; index < size; index++) {
        const first = arr[index];
        let second = num - first;

        if(arr.includes(second)){
            return [first, second]
        }
    }
}

console.log(getPair(arr, 7))
