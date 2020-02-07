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

//error
person.abilities = {
    say(){
        console.log('enen~~~');
    }
}

//0
// person.abilities.say = function () {
//     console.log('enen~~~');
// }

//1
person.student.abilities = person.abilities

//2
person.student.say();

// person.student.say();