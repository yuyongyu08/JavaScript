class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }

    eat(food) {
        console.log(food);
        return this;
    }

    sleep(time) {
        const start = new Date().getSeconds();
        while (true) {
            if(new Date().getSeconds() - start > time){
                return this;
            }
        }
    }
}

new Person('Tony').sleep(3).eat('dinner');
new Person('Tony').eat('breakfirst').sleep(3).eat('dinner');