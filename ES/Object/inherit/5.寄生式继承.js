function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}

function createStudent(person, school) {
    let student = object(person);
    student.school = school;
    student.saySchool = function () {
        console.log(this.name, '在', this.school);
    };

    return student
}

let person1 = {
    name: '张三',
    sayName: sayName
};

let person2 = {
    name: '李四',
    sayName: sayName
};

function sayName() {
    console.log(this.name);
}

let s1 = createStudent(person1, '清华');
s1.sayName();
s1.saySchool();


let s2 = createStudent(person2, '北大');
s2.sayName();
s2.saySchool();