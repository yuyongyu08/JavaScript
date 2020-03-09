const myNew = require('./myNew');

function Person(name){
    this.name = name;

    this.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}

let person = myNew(Person, 'yuyy');

console.log(person.name);

person.sayName();