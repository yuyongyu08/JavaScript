let message = 'hello';


/**
 * 方法1：for..
 * 遍历索引
 */
for (let i = 0; i < message.length; i++) {
    console.log(message[i]);
}

/**
 * 方法2：for...in...
 * 遍历索引
 */
for(let i in message){
    console.log(message[i]);
}

/**
 *  方法3：for...of...
 *  遍历元素
 */
for (let msg of message) {
    console.log(msg);
}

/**
 * 方法4：Object.keys()、Object.values()、Object.entries()
 */

//遍历索引
Object.keys(message).forEach(function (value, index, array) {
   console.log(message[value]);
});

//遍历元素
Object.values(message).forEach(function (value, index, array) {
    console.log(value);
});

//遍历[索引, 元素]
Object.entries(message).forEach(function (value, index, array) {
   console.log(value[1]);
});