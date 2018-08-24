let array = [1, 2, 3];
let object = {a: 123};

console.log(Object.prototype.toString.call(array)); // [object Array]
console.log(Object.prototype.toString.call(object)); // [object Object]

//弊端：如果Object的toString方法被重写，就无法判断
Object.prototype.toString = function () {
    return 'object to string'
};

console.log(Object.prototype.toString.call(array)); // object to string
console.log(Object.prototype.toString.call(object)); // object to string

//解决：借助Array.isArray()和原型