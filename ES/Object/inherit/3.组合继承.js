function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function Student(name, school) {
    this.school = school;

    //构造函数继承
    Person.call(this, name)
}

//原型继承
Student.prototype = new Person();
Student.prototype.constructor = Student;


Student.prototype.saySchool = function () {
    console.log(this.name, '在', this.school);
};

let s1 = new Student('张三', '清华');
s1.sayName();
s1.saySchool();

let s2 = new Student('李四', '北大');
s2.sayName();
s2.saySchool();
