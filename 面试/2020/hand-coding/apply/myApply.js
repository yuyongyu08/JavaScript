function myApply(context, args) {
    //第一个参数为null或者undefined时，this指向全局对象window，值为原始值的指向该原始值的自动包装对象，如 String、Number、Boolean
    context = (!context ? window : context) || new Object(context);

    //第二个参数可以不传，但类型必须为数组或者类数组
    if(args && !Array.isArray(args)){
        throw new Error('第二个参数必须为数组')
    }

    //为了避免函数名与上下文(context)的属性发生冲突，使用Symbol类型作为唯一值
    const key = Symbol();
    context[key] = this;

    //将函数作为传入的上下文(context)属性执行
    let result = args ? context[key](...args) : context[key]();

    //函数执行完成后删除该属性
    delete context[key];

    return result;
}

module.exports = myApply