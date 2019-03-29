function sayName(name) {
    this.name = name;
    console.log(this.name);
}

let Tom = {
    sayName: sayName
};

let Jery = {};

//显式
let jery = Tom.sayName.bind(Jery);
jery('Jery');
console.log(Jery.name);


//new
let jack = new jery('Jack');
console.log(jack.name);

//优先级：new > 显式





