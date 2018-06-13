let array = [1, 2, 3];
let object = {a: 123};

console.log(array instanceof Array); //true
console.log(object instanceof Object); //true

//弊端：由于instanceof是用来验证右侧构造函数是否在左侧原型链上，无法做到精准判断
console.log(array instanceof Object); //true

//解决：借助Object的toString方法