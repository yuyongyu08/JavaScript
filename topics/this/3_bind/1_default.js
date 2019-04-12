var name = 'Tom';

function sayName() {
    console.log(`Hi, I am ${this.name}!`);
}

//this隐式指向全局
sayName(); //非严格模式下正常

//默认严格模式:https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000763204-I-don-t-have-Prefer-strict-mode-in-my-Webstorm
