
let string = 'hello';

console.log(string.padEnd(0)); //hello
console.log(string); //hello

console.log(string.padEnd(8)); //hello   （注：默认补空格）
console.log(string.padEnd(8).length); //8
console.log(string); //hello

console.log(string.padEnd(8, '*')); //hello***
console.log(string); //hello