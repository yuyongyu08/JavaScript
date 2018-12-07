let user = {
    name: 'yuyy'
};

Object.defineProperty(user, 'name', {
    configurable: false
});

//影响1：任何尝试删除目标属性都将无效
delete user.name;
console.log(user.name); // yuyy



//影响2：修改属性的writable, configurable, enumerable特性的行为都将无效
Object.defineProperty(user, 'name', {
    writable: false
});
user.name = 'yyy';
console.log(user.name); //yuyy

Object.defineProperty(user, 'name', {
    configurable: true
}); // TypeError: Cannot redefine property: name