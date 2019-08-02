let arr =  [1,2,5,1,6,2,2];


function handleArray(arr = [], desc = true) {
    let newArr = [];
    arr.forEach((v) => {
        let index = newArr.findIndex(r => r.key === v);
        index > -1 ? newArr[index].count++ : newArr.push({key: v, count: 1})
    });

    newArr = newArr.sort((a, b) => desc ? a.count <= b.count : a.count > b.count).map(item => item = item.key);

    return newArr
}

console.log('降序：', handleArray(arr));
console.log('升序：',handleArray(arr,false));