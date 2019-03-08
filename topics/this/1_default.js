function print() {
    console.log('name:', this.name);
    console.log('age:', this.age);
}

var name = 'yuyy';
var age = '18';


print();

function foo() {
    console.log(this.a);
}

var a = 2;

foo();