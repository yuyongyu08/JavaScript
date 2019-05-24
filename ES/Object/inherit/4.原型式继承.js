function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}


let person1 = {
    name: '张三',
    sayName: sayName
};

let person2 = {
    name: '李四',
    sayName: sayName
};

function sayName() {
    console.log(this.name);
}

let s1 = object(person1);
s1.school = '清华';
s1.saySchool = function () {
    console.log(this.name, '在', this.school);
};

s1.sayName();
s1.saySchool();

//ES5通过Object.create()规范了原型式继承， Object.create()的第二个参数相当于Object.defineProperties()
let s2 = Object.create(person2, {
    school: {
        value: '北大'
    },
    saySchool: {
        value: function () {
            console.log(this.name, '在', this.school);
        }
    }
});

s2.sayName();
s2.saySchool();

/*
* 【适用】：一个对象对另一个对象的简单扩展
* */