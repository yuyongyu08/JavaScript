export class Student{
    constructor(abilities){
        console.log('abilities:', abilities);

        this.abilities = abilities;
    }

    say(){
        return this.abilities.say()
    }
}