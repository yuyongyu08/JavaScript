/**
 * 类数组对象：key是有序数字的对象，{ '0': 'yuyongyu', '1': 'yuyy', '2': 'yyyy' }
 * @param item
 */
function test(...item) {
    return arguments;
}

let arrLike = test('yuyongyu', 'yuyy', 'yyy'); //{ '0': 'yuyongyu', '1': 'yuyy', '2': 'yyyy' }

console.log(typeof arrLike); //object

/**
 * 1. for...
 */

for (let i= 0,length = arrLike.length; i < length; i++){
    console.log('for:', arrLike[i]);
}




/**
 * 2、Object.keys()、Object.values()、Object.entries()
 */

//遍历key
Object.keys(arrLike).forEach(function (value, index, array) {
    console.log('Object.keys:', arrLike[value]);
});

//遍历value
Object.values(arrLike).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[key, value]
Object.entries(arrLike).forEach(function (value, index, array) {
    console.log('Object.entries: ', value[1]);
});




/**
 * 3. Array.slice()
 */

Array.prototype.slice.call(arrLike).forEach(function (value, index, array) {
    console.log('Array.slice:', value);
});




/**
 * 4. Array.from()
 */

Array.from(arrLike).forEach(function (value, index, array) {
    console.log('Array.from:', value);
});