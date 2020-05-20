//Set声明：
//方式1：
// let mySet = new Set();
// mySet.add('yuyongyu');
// mySet.add('yongyu');
// mySet.add('yuyy');
// mySet.add('yyy');
// mySet.add('y');

//方式2：
let mySet = new Set(['yuyongyu', 'yongyu', 'yuyy', 'yyy', 'y']);


/*
* for 【不可用】
*/
for (let i=0; i<mySet.size; i++){
    console.log('for:', i, mySet[i]);
}

/*
* for...in 【不可用】
*/
for (let item in mySet){
    console.log('for...in:', item);
}

/*
* 1.for...of
*/
for (let item of mySet){
    console.log('for...of:', item);
}

/**
 * Object.keys()、Object.values()、Object.entries() 【不可用】
 */

//遍历索引
Object.keys(mySet).forEach(function (value, index, array) {
    console.log('Object.keys:', mySet[value]);
});

//遍历元素
Object.values(mySet).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[索引, 元素]
Object.entries(mySet).forEach(function (value, index, array) {
    console.log('Object.entries:', value[1]);
});


/*
* 2.keys()，values()，entries() 详见：http://es6.ruanyifeng.com/#docs/iterator#%E8%AE%A1%E7%AE%97%E7%94%9F%E6%88%90%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84
* 返回的都是Iterator对象。keys()和values()行为一致，因为Set键名和键值是同一个值
*/

for (let item of mySet.keys()){
    console.log('Set.keys:', item);
}

for (let item of mySet.values()){
    console.log('Set.values:', item);
}

for (let item of mySet.entries()){
    console.log('Set.entries:', item);
}

/*
* 3.forEach
*/
mySet.forEach((value, key) => console.log('mySet.forEach:', value, key));
