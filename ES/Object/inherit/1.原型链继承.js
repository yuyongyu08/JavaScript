function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function Student(school) {
    this.school = school;
}


let person = new Person('张三'); // new Person() => 1、person.__proto__ === Person.prototype 2、person.constructor === Person;
console.log(person.__proto__ === Person.prototype); //true
console.log(person.constructor === Person); //true

//原型继承
Student.prototype = person;
Student.prototype.constructor = Student;

console.log(Student.prototype.__proto__ === Person.prototype); //true
console.log(Student.prototype.__proto__); //Person { sayName: [Function] }
console.log(Student.prototype.__proto__.constructor); //[Function: Person]


Student.prototype.saySchool = function () {
    console.log(this.name, '在', this.school);
};


let s1 = new Student('清华');
s1.sayName();
s1.saySchool();


let s2 = new Student('北大');
s2.sayName();
s2.saySchool();

/*
* 【弊端】：
*  1.实例共享原型属性
*  2.无法向超类型中传参数
* */

s1.name = '李四';
s1.sayName();
s1.saySchool();
s2.sayName();
s2.saySchool();
