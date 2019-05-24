function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function Student(name, school) {
    this.school = school;

    //构造函数继承
    Person.call(this, name);
}

inheritPrototype(Student, Person);

Student.prototype.saySchool = function () {
    console.log(this.name, '在', this.school);
};



let s1 = new Student('张三', '清华');
s1.sayName();
s1.saySchool();


let s2 = new Student('李四', '北大');
s2.sayName();
s2.saySchool();