module.exports = function (Constructor, ...args) {
    let obj = {} //创建一个新的空对象，把this绑定到空对象

    Object.setPrototypeOf(obj, Constructor.prototype) //使空对象的__proto__指向构造函数的原型(prototype)

    let result = Constructor.apply(obj, args) //执行构造函数，为空对象添加属性

    return result instanceof Object ? result : obj //判断构造函数的返回值是否为对象，如果是对象，就使用构造函数的返回值，否则返回创建的对象
}