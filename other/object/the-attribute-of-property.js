let user = {
    name: 'yuyy',
    birthday: '1991-07-21',
    job: 'programmer'
};

Object.defineProperty(user, 'age', {
    get: function () {
        return new Date().getFullYear() - new Date(this.birthday).getFullYear()
    },
    set: function(nweAge) {
        this.birthday = String(new Date().getFullYear() - nweAge) + '-07-21';
    }
});

//数据属性
let dataProp = Object.getOwnPropertyDescriptor(user, 'name');
console.log('数据属性:\n' ,dataProp);

//访问器属性
let getterProp = Object.getOwnPropertyDescriptor(user, 'age');
console.log('访问器属性（只能通过Object.defineProperty()定义）:\n', getterProp);


console.log('\n');
console.log('for...in...迭代');
for(let prop in user){
    console.log(prop+':', user[prop]);
}
console.log('注意：访问器属性（age）不可枚举!!!');


console.log('\n');

console.log('设置前');
console.log('生日：', user.birthday);
console.log('年龄：', user.age);

console.log('\n');
console.log('设置年龄');
user.age = 30;
console.log('\n');

console.log('设置后');
console.log('生日：', user.birthday);
console.log('年龄：', user.age);