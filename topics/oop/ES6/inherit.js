class Person{
    constructor(name){
        this.name = name
    }

    sayName(){
        console.log('name: ', this.name);
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school
    }

    saySchool(){
        console.log('school: ', this.school);
    }
}
let student = new Student('John', 'Yale');

student.sayName();
student.saySchool();