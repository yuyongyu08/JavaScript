//Set声明：
//方式1：
let myMap = new Map();
myMap.set('firstName', 'yu');
myMap.set('secondName', 'yongyu');
myMap.set('gender', 'male');


//方式2：
// let myMap = new Map([['firstName', 'yu'], ['secondName', 'yongyu'], ['gender', 'male']]);

/*
* for 【不可用】
*/
for (let i = 0; i < myMap.size; i++){
    console.log('for:', i, myMap[i]);
}

/*
* for...in 【不可用】
*/
for (let item in myMap){
    console.log('for...in:', item);
}

/*
* 1.for...of
*/
for (let item of myMap){
    console.log('for...of:', item);
}

/**
 * Object.keys()、Object.values()、Object.entries() 【不可用】
 */

//遍历索引
Object.keys(myMap).forEach(function (value, index, array) {
    console.log('Object.keys:', myMap[value]);
});

//遍历元素
Object.values(myMap).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[索引, 元素]
Object.entries(myMap).forEach(function (value, index, array) {
    console.log('Object.entries:', value[1]);
});

/*
* 2.keys()，values()，entries()
*/
for (let item of myMap.keys()){
    console.log('Set.keys:', item);
}

for (let item of myMap.values()){
    console.log('Set.values:', item);
}

for (let item of myMap.entries()){
    console.log('Set.entries:', item);
}

/*
* 3.forEach
*/
myMap.forEach((value, key) => console.log('myMap.forEach:', value, key));