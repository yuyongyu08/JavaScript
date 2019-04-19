// function uppercaseName() {
//     return this.name.toUpperCase();
// }
//
// function sayHi() {
//     console.log(`Hello, I am ${uppercaseName.call(this)}, and ${this.age} years old.`);
// }
//
// let Tom = {
//     name: 'tom',
//     age: 8
// };
//
// let Jerry = {
//     name: 'jerry',
//     age: 9
// };
//
// sayHi.call(Tom);
// sayHi.call(Jerry);


//假如没有this，每次都要传context

function uppercaseName(that) {
    return that.name.toUpperCase();
}

function sayHi(that) {
    console.log(`Hello, I am ${uppercaseName(that)}, and ${that.age} years old.`);
}

let Tom = {
    name: 'tom',
    age: 8
};

let Jerry = {
    name: 'jerry',
    age: 9
};

sayHi(Tom);
sayHi(Jerry);