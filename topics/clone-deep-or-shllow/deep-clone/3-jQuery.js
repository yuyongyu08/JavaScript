let developer = require('./data');
console.log('target:', developer);

/*
* 【注意】jquery需要在浏览器环境运行：https://github.com/jquery/jquery/issues/2758
* */

let jQuery = require('jquery');
console.log(jQuery);
let newDeveloper = jQuery.extend(true, {}, developer);
console.log('newDeveloper:', newDeveloper);


newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start);

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);
