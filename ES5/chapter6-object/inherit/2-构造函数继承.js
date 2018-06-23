/*
* 定义一个Person，包含name属性，sayName方法
* 定义一个Student，继承自Person，包含school属性
* 创建两个Student的对象，分别说自己的名字
*
* */

function Person(name) {
    this.name = name;
}

function Student(school, name) {
    this.school = school;

    //构造函数继承
    Person.call(this, name)
}

Student.prototype.saySchool = function () {
    console.log(this.school);
};

Student.prototype.sayName = function () {
    console.log(this.name);
};



let s1 = new Student('清华', '张三');
s1.saySchool();
s1.sayName();

let s2 = new Student('北大', '李四');
s2.saySchool();
s2.sayName();
