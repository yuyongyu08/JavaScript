let message = 'hello';


/**
 * 1.for...
 * 遍历索引
 */
for (let i = 0; i < message.length; i++) {
    console.log('for...:', message[i]);
}

/**
 * 2.for...in...
 * 遍历索引
 */
for(let i in message){
    console.log('for...in:', message[i]);
}

/**
 * 3.for...of...
 * 遍历元素
 */
for (let msg of message) {
    console.log('for...of:', msg);
}

/**
 * 4.Object.keys()、Object.values()、Object.entries()
 */

//遍历索引
Object.keys(message).forEach(function (value, index, array) {
   console.log('Object.keys:', array[value]);
});

//遍历元素
Object.values(message).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[索引, 元素]
Object.entries(message).forEach(function (value, index, array) {
   console.log('Object.entries:', value[1]);
});