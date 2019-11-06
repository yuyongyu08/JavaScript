export class Student{
    constructor(person){
        console.log('person:', person);

        this.person = person;
    }

    say(){
        return this.person.abilities.say()
    }
}