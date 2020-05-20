let user = {
    name: 'yuyy',
    gender: 'male',
    birthday: '1991'
};

//1.【转String】

console.log(user.toString()); //[object Object]

console.log(JSON.stringify(user)); //{"name":"yuyy","gender":"male","birthday":"1991"}


//2.【转Array】

//方法1：Object.keys()、Object.values()、Object.entries()
let entries = Object.entries(user);
console.log(Array.isArray(entries)); //true
console.log(entries); //[ [ 'name', 'yuyy' ],[ 'gender', 'male' ],[ 'birthday', '1991' ] ]

let keys = Object.keys(user);
console.log(Array.isArray(keys)); //true
console.log(keys); //[ 'name', 'gender', 'birthday' ]

let values = Object.values(user);
console.log(Array.isArray(values)); //true
console.log(values); //[ 'yuyy', 'male', '1991' ]

//方法2：Array.from
console.log(Array.from(user));