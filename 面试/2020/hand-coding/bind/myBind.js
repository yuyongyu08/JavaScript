module.exports = function (context, ...args) {
    let fn = this;

    let bindFn = function (...newArgs) {
        return fn.call(
            this instanceof bindFn ? this : context, //当返回的绑定函数作为构造函数被new调用，绑定的上下文指向实例对象
            ...args, //原因：绑定时的参数
            ...newArgs //原因：调用时的参数
        );
    }

    bindFn.prototype = Object.create(fn.prototype)

    return bindFn
}