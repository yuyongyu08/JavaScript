
export class Student{
    constructor(abilities){
        console.log('abilities:', abilities)
        this.abilities = abilities;
    }

    say(){
        return this.abilities.say()
    }
}


import {Student} from './2-ES6-Module'

let person = {
    abilities: {}
};

person.student = new Student(person.abilities);

module.exports = person;


let person = require('./1-CommonJS');

// person.abilities = {
//     say(){
//         console.log('enen~~~');
//     }
// }

person.abilities = {
    say(){
        console.log('enen~~~');
    }
}

person.student.say();