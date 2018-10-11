let arr = [1, 2, 3, 4, 5];

//1.转string

//方法1：toString()
console.log(arr.toString()); //1,2,3,4,5

//方法2：join()
console.log(arr.join()); //1,2,3,4,5

//方法3：...(扩展运算符)
console.log(...arr); //1 2 3 4 5


//2.转object
console.log(Object.assign({}, arr));
