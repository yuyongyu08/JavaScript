function sayName(name) {
    this.name = name;
    console.log(`I\'m ${this.name}`);
}

let Tom = {
    sayName: sayName
};

let Jerry = {};

//显式
let jerry = Tom.sayName.bind(Jerry);
jerry('Jerry');
console.log(Jerry.name);


//new
let jack = new jerry('Jack');
console.log(jack.name);

//优先级：new > 显式





