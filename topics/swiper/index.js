/**
 * 无限循环算法
*/
let items = [1, 2, 3]
items = [...items, ...items]
items.unshift(items.pop())

console.log(items);
console.log('-----^--------------');

for (let index = 1; index < 11; index++) {
    let direct = -1 //1：向右， -1：向左
    if(direct > 0){
        items.push(items.shift())
    }else{
        items.unshift(items.pop())
    }
    console.log(items);
}





