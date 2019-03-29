let Tom = {
    name: 'Tom',
    sayName: function () {
        console.log(`Hi, I am ${this.name}!`);
    }
};

Tom.sayName();


function sayName() {
    console.log(`Hi, I am ${this.name}!`);
}
let Jery = {
    name: 'Jery',
    sayName: Tom.sayName,
    sayName1: sayName,
};

//this隐式指向Jery
Jery.sayName();
Jery.sayName1();