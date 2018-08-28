
function Person(skinColor) {
    this.skinColor = skinColor;
}

Person.prototype.saySkinColor = function () {
    console.log(this.skinColor);
};

function Student(school) {
    this.school = school;
}

//原型继承
Student.prototype = new Person('黄色'); // new Person() => person.constructor == Person; person.__proto__ == Person.prototype
Student.prototype.constructor = Student;


Student.prototype.saySchool = function () {
    console.log(this.school);
};


let s1 = new Student('清华');
console.log(s1);
console.log(s1.__proto__);

console.log(s1.constructor);
s1.saySchool();
s1.saySkinColor();

let s2 = new Student('北大');
s2.saySchool();
s2.saySkinColor();