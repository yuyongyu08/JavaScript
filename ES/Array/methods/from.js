//用来将其他对象转换成数组

//参数1：arrayLike

//1.部署了Iterator接口的对象，比如：Set，Map，Array（加工数组）。
let set = new Set(['yuyy', 'male', '1991']);
console.log(Array.from(set)); //[ 'yuyy', 'male', '1991' ]

//2.类数组对象，什么叫类数组对象，就是一个对象必须有length属性，没有length，转出来的就是空数组。
console.log(Array.from('hello world')) //[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]


//参数2：mapfn，映射函数，每个元素经过此函数加工后作为结果数组的元素
console.log(Array.from([1, 2, 3, 4, 5], (n) => n + 10)); //[ 11, 12, 13, 14, 15 ]


//参数3：thisArg，可以将被处理的数据和处理对象分离
let obj = {
    handle(n){
        return n + 10;
    }
};

let newArr = Array.from([1, 2, 3, 4, 5], function (x) {
    return this.handle(x)
}, obj);

console.log(newArr); //[ 11, 12, 13, 14, 15 ]