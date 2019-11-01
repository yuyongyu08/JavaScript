import {Student} from './2-ES6-Module'


let person = {
    name: 'yuyy',
    abilities: {}
};

let student = new Student(person);

person.student = student;

module.exports = person;