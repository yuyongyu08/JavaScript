const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
};

[
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
].forEach(function (method) {
    var original = arrayProto[method]
    def(arrayMethods, method, function mutator(){
        var i = arguments.length
        var args = new Array(i)
        while (i--) {
            args[i] = arguments[i]
        }
        console.log('数组变动')
        return original.apply(this, args)
    }
)
});


let arr = [1, 2, 3];
arr.push('4');
