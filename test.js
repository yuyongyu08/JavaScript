let org = {
    name: 'yuyy',
    age: 18
};

let tar = {};

tar = org;

tar.j = org;

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


let newTar = deepClone(tar);



