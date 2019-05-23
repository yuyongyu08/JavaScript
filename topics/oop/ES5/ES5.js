function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.greeter = function () {
    console.log(`Hello, ${this.firstName}.${this.lastName}`);
};

let student = new Student('yu', 'yongyu');

student.greeter();