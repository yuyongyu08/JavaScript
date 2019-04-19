let developer = require('../data');
console.log('target:', developer);


let newDeveloper = JSON.parse(JSON.stringify(developer));
console.log('newDeveloper:', newDeveloper);

newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start);

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);


console.log(developer.constructor);
console.log(newDeveloper.constructor);

developer.sayHi();
newDeveloper.sayHi(); //TypeError

/*
* 弊端：会抛弃对象的constructor
* 适用：能够被json直接表示的数据结构，对象中只包含number、string、boolean、array、扁平对象
* 不适用：含有function、regexp的数据结构
* */