function shallowClone(source) {
    if(!source) return;

    let copy = null;
    if(Object.prototype.toString.call(source) === '[object Object]'){
        copy = {};
        Object.keys(source).forEach((key)=>{
            copy[key] = source[key]
        })
    }else{
        copy = source
    }

    return copy
}

let developer = require('../data');
console.log('copy:', developer);

let newDeveloper = shallowClone(developer);
console.log('newDeveloper:', newDeveloper);


newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start); //false?

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);


