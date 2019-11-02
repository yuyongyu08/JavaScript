export class Student{
    constructor(person){
        console.log('person:', person)

        this.abilities = person.abilities;
    }

    say(){
        return this.abilities.say()
    }
}