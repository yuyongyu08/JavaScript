function deepClone(source) {
    if(!source) return;

    let target = null;
    switch (true){
        case Array.isArray(source):
            target = [];
            source.forEach((item) => {
                target.push(deepClone(item));
            });
            break;
        case Object.getPrototypeOf(source) === Object.prototype:
            target = {};
            Object.keys(source).forEach((key) => {
                target[key] = deepClone(source[key])
            });
            break;
        default:
            
            target = source;
    }

    return target
}

let developer = require('../data');
console.log('target:', developer);

let newDeveloper = deepClone(developer);
console.log('newDeveloper:', newDeveloper);

newDeveloper.start = new Date(2020);
console.log(newDeveloper.start == developer.start);

newDeveloper.base.html = '6';
console.log(newDeveloper.base.html == developer.base.html);
