class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    uppercaseName() {
        return this.name.toUpperCase();
    }

    sayHi() {
        console.log(`Hello, I am ${this.uppercaseName()}, and ${this.age} years old.`);
    }
}

let Tom = new Person('tom', 8);
Tom.sayHi();
let Jerry = new Person('jerry', 9);
Jerry.sayHi();


//如果没有this

