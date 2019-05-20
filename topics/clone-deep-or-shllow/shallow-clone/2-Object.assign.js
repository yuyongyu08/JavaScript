let developer = require('../data');
console.log('target:', developer);

let newDeveloper = Object.assign(developer);
console.log('newDeveloper:', newDeveloper);


newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start); //true?

newDeveloper.base.html = '6';
console.log(developer.base.html);//6
console.log(newDeveloper.base.html == developer.base.html); //true


