function uppercaseName() {
    return this.name.toUpperCase();
}

function sayHi() {
    console.log(`Hello, I am ${uppercaseName.call(this)}, and ${this.age} years old.`);
}

let Tom = {
    name: 'tom',
    age: 8
};

let Jerry = {
    name: 'jerry',
    age: 9
};

sayHi.call(Tom);
sayHi.call(Jerry);


//假如没有this