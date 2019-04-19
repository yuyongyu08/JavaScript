function shallowClone(source) {
    if(!source) return;

    let target = null;
    if(Object.getPrototypeOf(source) === Object.prototype){
        target = {};
        Object.keys(source).forEach((key)=>{
            target[key] = source[key]
        })
    }else{
        target = source
    }

    return target
}

let developer = require('../data');
console.log('target:', developer);

let newDeveloper = shallowClone(developer);
console.log('newDeveloper:', newDeveloper);


newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start); //false?

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);


