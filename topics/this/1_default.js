var name = 'Tom';

function sayName() {
    console.log(`Hi, I am ${this.name}!`);
}

//this隐式指向全局
sayName(); //非严格模式下正常