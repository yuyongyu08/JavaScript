/*
* 定义一个Person，包含name属性，sayName方法
* 定义一个Student，继承自Person，包含school属性
* 创建两个Student的对象，分别说自己的名字
*
* */

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function Student(school, name) {
    this.school = school;

    //构造函数继承
    Person.call(this, name)
}

//原型继承
Student.prototype = new Person();
Student.prototype.constructor = Student;


Student.prototype.saySchool = function () {
    console.log(this.school);
};

console.log(Student.__proto__ === Function.prototype);

let s1 = new Student('清华', 'yuyy');
s1.saySchool();
console.log(s1.name);
s1.sayName();

let s2 = new Student('北大');
s2.saySchool();
