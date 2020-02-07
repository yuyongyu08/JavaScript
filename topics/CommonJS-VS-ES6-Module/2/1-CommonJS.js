import {Student} from './2-ES6-Module'

let person = {
    abilities: {}
};

person.student = new Student(person.abilities);

module.exports = person;