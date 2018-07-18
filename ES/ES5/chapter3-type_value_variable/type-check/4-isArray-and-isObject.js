let array = [1, 2, 3];
let object = {a: 123};

console.log(Array.isArray(array)); // true
console.log(Array.isArray(object)); // false

console.log(Object.getPrototypeOf(array) == Array.prototype); // true
console.log(Object.getPrototypeOf(array) == Object.prototype); // false
console.log(Object.getPrototypeOf(object) == Object.prototype); // true