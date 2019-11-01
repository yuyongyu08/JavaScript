export class Student{
    constructor(abilities){
        this.abilities = abilities
        console.log(this.abilities);
    }

    say(){
        return this.abilities.abilities.say()
    }
}