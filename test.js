function getPosition(index, arr){
    if(index <= arr[0]){
        return 0
    }else if(index + arr[arr.length-1] >= arr.reduce((p,c) => p+c)){
        return arr.length-1
    }else{
        let total=0;
        for (let j=0, k=arr.length; j<k; j++){
            total+=arr[j];
            if(index <= total){
                return j
            }
        }
    }
}

function getPosition_1(index, arr) {
    let n_arr = arr;
    for (let j=0, k=arr.length; j<k; j++){
        let last = arr.pop();
        if(index + last >= arr.reduce((p,c) => p+c)){
            return arr.length-1
        }
    }
}

console.log(getPosition(1, [2,3,5]));
console.log(getPosition(4, [2,3,5]));
console.log(getPosition(7, [2,3,5]));
console.log(getPosition(10, [2,3,5]));

console.log(getPosition_1(1, [2,3,5]));
console.log(getPosition_1(4, [2,3,5]));
console.log(getPosition_1(7, [2,3,5]));
console.log(getPosition_1(10, [2,3,5]));
