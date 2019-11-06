let {Ultimate}  = require('./2.js');

let {name} = Ultimate.getUserInfo();

let param = {
    Ultimate,
    name
};

//模拟this.setData({data})
console.log(JSON.parse(JSON.stringify(param)));