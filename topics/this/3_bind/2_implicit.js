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
let Jerry = {
    name: 'Jerry',
    sayName: Tom.sayName,
    sayName1: sayName,
};


Jerry.sayName();//this隐式指向Jerry
Jerry.sayName1();