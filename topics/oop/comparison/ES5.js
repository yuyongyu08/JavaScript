function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
  console.log('name: ',this.name);
};

function Student(name, school) {
    Person.call(this, name);

    this.school = school
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.saySchool = function () {
  console.log('school: ', this.school);
};