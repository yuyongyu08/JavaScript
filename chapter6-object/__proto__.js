let arr = new Array();
console.log('arr:');
console.log('arr.__proto__ :', arr.__proto__);
console.log('arr.prototype:', arr.prototype);
console.log('arr.__proto__ === Array.prototype:', arr.__proto__ === Array.prototype);
console.log();

console.log('Array:');
console.log('Array.__proto__:', Array.__proto__);
console.log('Array.prototype:', Array.prototype);
console.log('Array.__proto__ === Object.prototype:', Array.__proto__ === Object.prototype);
console.log();

console.log('Object:');
console.log('Object.__proto__:', Object.__proto__);
console.log('Object.prototype:', Object.prototype);
console.log('Object.__proto__ === null:', Object.__proto__ === null);
console.log();

console.log('因为：');
console.log('arr.__proto__ === Array.prototype:', arr.__proto__ === Array.prototype);
console.log('Array.prototype.__proto__ === Object.prototype:', Array.prototype.__proto__ === Object.prototype);
console.log('Object.prototype.__proto__ === null:', Object.prototype.__proto__ === null);

console.log('arr.__proto__.__proto__.__proto__ === null:', arr.__proto__.__proto__.__proto__ === null);

console.log('所以：');
console.log('__proto__是原型指针');
console.log('prototype是原型对象');


console.log();
console.log('重要：__proto__本质是一个内部属性，少用，用Object.getPrototypeof()和Object.setPrototypeOf()');
console.log('Object.getPrototypeOf(arr) === Array.prototype:',Object.getPrototypeOf(arr) === Array.prototype);