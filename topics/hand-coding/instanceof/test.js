let myInstanceof = require('./myInstanceof');

class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`my name is ${this.name}`);
    }
}

let person = new Person('yuyy');

console.log(myInstanceof(person, Person));
console.log(myInstanceof(person, String));
console.log(myInstanceof(person, Object));
