function Person() {
    
}

Person.prototype.name = 'Mike';
Person.prototype.age = '20';
Person.prototype.job = 'worker';
Person.prototype.color = ['red'];
Person.prototype.sayName = function () {
    console.log(this.name);
};

let p1 = new Person();
p1.sayName(); // Mike

console.log(p1); // Person {}  name,age,job属性只是在其原型上，并不在此实例对象上

/*
* 1.实例上添加了name属性，就切断了对此实例的原型访问
* */
p1.name = 'Tom';
console.log(p1); // Person { name: 'Tom' }
p1.sayName(); // Tom

/*
* 2.delete可以完全删除实例上的name属性，恢复对实例的原型访问
* */
delete p1.name;
p1.sayName(); // Mike

/*
* 3.hasOwnProperty()可以判断属性是否在实例上
* */
p1.gender = 'male';
console.log(p1.hasOwnProperty('gender')); // true
console.log(p1.hasOwnProperty('name')); // false



/*
* 4.in操作符，不区分属性是在实例上还是在原型上
* */
console.log('gender' in p1); //true
console.log('name' in p1); //true

let props = [];
for(let prop in p1) props.push(prop)
console.log(props); // [ 'gender', 'name', 'age', 'job', 'sayName' ]

/*
* 5.Object.keys()只返回自有属性
* */
console.log(Object.keys(p1)); // [ 'gender' ]





let p2 = new Person();
p2.sayName(); // Mike



/*
* 原型模式弊端：所有实例共享同一个原型，如果原型中的属性为引用类型，一个实例对其修改，则其他实例也会受影响
*
* */

console.log(p1.color); // [ 'red' ]

p2.color.push('green');

console.log(p1.color); // [ 'red', 'green' ]

