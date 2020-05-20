let arr = [1, 2, 3, 4, 5];

let b = arr.slice();

//1.【转String】

//方法1：toString()
console.log(arr.toString()); //1,2,3,4,5

//方法2：join()
console.log(arr.join()); //1,2,3,4,5

//方法3：...(扩展运算符) TODO
console.log(...arr); //1 2 3 4 5





//2.【转Object(类数组对象)】
console.log(Object.assign({}, arr)); //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
