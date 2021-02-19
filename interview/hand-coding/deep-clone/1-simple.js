module.exports = function (target, cache = new WeakMap()) {
    if (!target || typeof target !== 'object') return target;

    if (cache.get(target)) {
        return target
    }
    const copy = Array.isArray(target) ? [] : {}
    cache.set(target, copy)
    Object.keys(target).forEach(key => copy[key] = deepClone(target[key], cache))
    return copy
}

//缺点：无法拷贝函数、Map、Set、正则等其他类型