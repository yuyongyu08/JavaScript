let a = {};

console.log(a.hasOwnProperty('__proto__'));
console.log(a.__proto__);


console.log(a.__proto__.constructor);
console.log(a.constructor);
console.log(a.prototype);