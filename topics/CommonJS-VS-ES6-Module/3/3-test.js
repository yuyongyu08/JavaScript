let person = require('./1-CommonJS');

person.abilities = {
    say(){
        console.log('enen~~~');
    }
};

//解决方式
// person.abilities.say = function(){
//     console.log('enen~~~');
// }

person.student.say();