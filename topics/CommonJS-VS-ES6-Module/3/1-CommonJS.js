class Student{
    constructor(abilities){
        console.log('abilities:', abilities)
        this.abilities = abilities;
    }

    say(){
        return this.abilities.say()
    }
}

let person = {
    name: 'yuyy',
    abilities: {}
};

person.student = new Student(person.abilities);

module.exports = person;