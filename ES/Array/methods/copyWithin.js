//从自身copy一部分再插入自身
let array = [1,2,3,4,5];

let newArray = array.copyWithin(2, 4);


console.log(newArray);

console.log(array);