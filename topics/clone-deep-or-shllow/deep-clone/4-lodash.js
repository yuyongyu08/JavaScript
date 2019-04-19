let developer = require('../data');
console.log('target:', developer);

let _ = require('lodash');
let newDeveloper = _.cloneDeep(developer);
console.log('newDeveloper:', newDeveloper);


newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start);

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);
