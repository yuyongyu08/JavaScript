const s0=['f','3','4','k'];
const s1=['4','9','d','k'];
const s2=['j','h', '4','d'];

//以数组形式输s0，s1中共同存在，并且s2中不存在的项

function myFun(arr1, arr2, arr3) {
    let newArr = arr1.filter(item => arr2.includes(item) && !arr3.includes(item));
    return newArr
}

console.log(myFun(s0, s1, s2));