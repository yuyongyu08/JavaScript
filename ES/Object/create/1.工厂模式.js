function createPerson(name, age, job) {
    let obj = new Object();

    obj.name = name;
    obj.age = age;
    obj.job = job;
    obj.sayName = function () {
      console.log(this.name);
    };

    return obj
}

let p1 = createPerson('张三', '20', '主席');
p1.sayName();


let p2 = createPerson('李四', '21', '团长');
p2.sayName();


/*
* 【弊端】：无法识别对象类型
* */

console.log(p1.constructor); // [Function: Object]
console.log(p1.constructor === Object); // true
console.log(p1 instanceof createPerson); //false


console.log(p2.constructor); // [Function: Object]
console.log(p2.constructor === Object); // true
console.log(p1 instanceof createPerson); //false

