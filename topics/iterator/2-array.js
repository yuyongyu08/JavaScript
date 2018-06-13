let arr = [1, 2, 3, 4, 5];

/*
* 方法1：for
* 遍历数组的*索引*
**/
console.log('*****for*****');
for (var i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}

/*
* 方法2：forEach
**/
console.log('*****forEach*****');
arr.forEach(function (item) {
    console.log(item);
});


/*
* 方法3：for...of...
* 遍历数组的*元素*
**/
console.log('*****for...of...*****');
for (var obj of arr) {
    console.log(obj);
}


/*
* 方法4：for...in...(不建议使用)  遍历**可枚举的**属性
* 遍历数组的*索引*
**/
console.log('*****for...in...*****');
for (var obj in arr) {
    console.log(arr[obj]);
}

