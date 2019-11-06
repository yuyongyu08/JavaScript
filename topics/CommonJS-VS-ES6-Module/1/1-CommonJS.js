import {Student} from './2-ES6-Module'

let person = {
    name: 'yuyy',
    abilities: {}
};

person.student = new Student(person.abilities);

module.exports = person;