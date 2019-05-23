class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(){
        console.log(`Hello, ${this.firstName}.${this.lastName}`);
    }
}

let student = new Student('yu', 'yongyu');

student.greeter();