//作为对象的属性名
let person = {};
let name = Symbol();

//方式1：
person[name] = 'siri1';
console.log(person); // { [Symbol()]: 'siri' }

//方式2：
person = {
    [name]: 'siri2'
};
console.log(person); // { [Symbol()]: 'siri2' }

//方式3：
Object.defineProperty(person, name, {value: 'siri3'});
console.log(person);// { [Symbol()]: 'siri3' }

console.log(person[name]); //siri3
console.log(person.name); //undefined

person.name = "siri4";
console.log(person); //{ name: 'siri4', [Symbol()]: 'siri3' }
console.log(person[name]); //siri3

//Symbol作为属性名只能用"[]"进行存取，不能使用"."操作



//Symbol不能与其他类型运算
console.log('hello' + Symbol('world')); //TypeError: Cannot convert a Symbol value to a string
