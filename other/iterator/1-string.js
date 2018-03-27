let message = 'hello';

/*
* 方法1：for
**/
console.log('*****for*****');
for (var i = 0; i < message.length; i++) {
    console.log(message[i]);
}


/*
* 方法1：for...of...
**/
console.log('*****for...of...*****');
for (let msg of message) {
    console.log(msg);
}


/*
* @param from 从此位置开始，包括此位置
* @param length 要截取的长度
**/
console.log(message.substr(2, 2));


/*
* @param start 从此位置开始，包括此位置
* @param end 到此位置结束，不包括此位置
**/
console.log(message.substring(2, 4));