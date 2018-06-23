let obj1 = {};
let obj2 = {a: 1, b:2};


//1.利用JSON
console.log(JSON.stringify(obj1) === '{}');
console.log(JSON.stringify(obj2) === '{}');


//2.for...in...
function isEmptyObject(obj) {
    for (let prop in obj){
        if(prop){
            return false
        }
    }

    return true
}

console.log(isEmptyObject(obj1));
console.log(isEmptyObject(obj2));


//3.Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(obj1).length < 1);
console.log(Object.getOwnPropertyNames(obj2).length < 1);


//4.Object.keys()
console.log(Object.keys(obj1).length < 1);
console.log(Object.keys(obj2).length < 1);
