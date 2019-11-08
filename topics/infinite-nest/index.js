let from = {
    name: 'yuyy',
    age: 18,
    user: {
        a: 123
    }
};

let to = {};

to = from;

to.gender = Object.assign(from);

//解决方案
// to.gender = {...from};
// to.gender = Object.assign({}, from);
// to.gender = deepClone(from);

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


let newTo = deepClone(to);
console.log(newTo);

// console.log(JSON.parse(JSON.stringify(to)));


