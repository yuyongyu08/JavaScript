function sayName(name) {
    this.name = name;
    console.log(this.name);
}

let Tom = {
    sayName: sayName
};


//隐式
Tom.sayName('Tom');
console.log(Tom.name);

//new
let jery = new Tom.sayName('Jery');
console.log(jery.name);

//优先级：new > 隐式
