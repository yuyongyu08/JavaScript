
let s1 = Symbol();

//Symbol是原始数据
console.log(typeof s1); //symbol


let s2 = Symbol();

console.log(s1 === s2); //false

let l1 = Symbol('hello');
let l2 = Symbol('hello');

//即便是参数相同，Symbol生成的变量也不同，这也是Symbol存在的真正意义
console.log(l1 === l2);//false