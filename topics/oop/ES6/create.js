class Person{
    constructor(name){
        this.name = name
    }

    sayName(){
        console.log('name: ', this.name);
    }
}

let person = new Person('John');

person.sayName();