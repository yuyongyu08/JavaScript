function Person(name) {
    this.name = name;

    this.sayName = function () { //TODO 构建超类只能使用【构造函数模式】
        console.log(this.name);
    };
}


function Student(name, school) {
    this.school = school;

    //构造函数继承
    Person.call(this, name); //TODO 本质：将Person的方法体移植过来
}

Student.prototype.saySchool = function () {
    console.log(this.name, '在', this.school);
};


let s1 = new Student('张三', '清华');
s1.sayName();
s1.saySchool();


let s2 = new Student('李四', '北大');
s2.sayName();
s2.saySchool();

/*
* 【弊端】：构建超类只能使用【构造函数模式】，超类的方法复用性低（【构造函数模式】的弊端）
*
* */