function person(name, age, job) {
    console.log(arguments);
    console.log(typeof arguments);
}

person('yu', 20, 'it'); //{ '0': 'yu', '1': 20, '2': 'it' }


//转数组

//方法1：for

function person1(name, age, job) {
    let l = arguments.length;
    let arr = [];
    for(let i = 0; i < l; i++){
        arr.push(arguments[i])
    }
    console.log(arr);
    console.log(arr.length);
    console.log(Array.isArray(arr));
}

person1('yu', 20, 'it');

//方法2：
function person2(name, age, job) {

    let arr = Array.prototype.slice.call(arguments);

    console.log(arr);
    console.log(arr.length);
    console.log(Array.isArray(arr));
}

person2('yu', 20, 'it');