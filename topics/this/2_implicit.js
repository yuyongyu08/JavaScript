let name = 'glob';

let user = {
    sayHi: function () {
        console.log(`hi, I am ${this.name}!`);
    }
};


let fn = user.sayHi;

fn();
