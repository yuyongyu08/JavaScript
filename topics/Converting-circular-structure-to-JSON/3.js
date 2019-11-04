let {Ultimate}  = require('./2.js');

let {name} = Ultimate.getUserInfo();

let param = {
    Ultimate,
    name
};

console.log(JSON.parse(JSON.stringify(param)));