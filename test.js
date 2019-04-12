let user = {
    name: {a: 'yuyy'}
};

let name = {a: 'yuyy'};

console.log(user.name === name);
console.log(user.name == name);

switch (user.name){
    case name:
        console.log(1);
    case 'yuyy':
        console.log(2);
}