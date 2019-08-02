class Person{
    constructor(name){
        this.name = name
    }

    sayName(){
        return this.name
    }
}

let p = new Person();


console.log(Object.getPrototypeOf(p) === Person);
console.log(Object.getPrototypeOf(p) === Person.prototype);

console.log(p.sayName === Person.prototype.sayName);

console.log(p instanceof Person);
console.log(p instanceof Object);