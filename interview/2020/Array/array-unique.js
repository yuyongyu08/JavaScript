let arr = [1, 2, 3, 5, 3, 2, 1, 4]

function unique1(array = []) {
    return Array.from(new Set(array))
}

function unique2(array = []) {
    return array.filter((item, index, arr) => arr.indexOf(item) === index)
}

function unique3(array=[]){
    return array.reduce((pre, cur)=> {
        if(pre.indexOf(cur) < 0) pre.push(cur)
        return pre
    }, [])
}

// console.log(unique1(arr));
// console.log(unique2(arr));
console.log(unique3(arr));

