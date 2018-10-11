/**
 * 类数组：key是有序数字的对象，{ '0': 'yuyongyu', '1': 'yuyy', '2': 'yyyy' }
 * @param item
 */
function test(...item) {
    return arguments;
}

let arrLike = test('yuyongyu', 'yuyy', 'yyyy');

/**
 * 1. for...
 */

console.log(arrLike);
for (let i= 0,length = arrLike.length; i < length; i++){
    console.log(arrLike[i]);
}