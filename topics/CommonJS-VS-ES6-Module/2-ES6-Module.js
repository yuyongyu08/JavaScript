export class Student{
    constructor(person){
        this.abilities = person.abilities;
        console.log(this.abilities)
    }

    say(){
        return this.abilities.say()
    }
}