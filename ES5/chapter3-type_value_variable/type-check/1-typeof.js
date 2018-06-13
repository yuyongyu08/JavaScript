console.log(typeof 'hello world'); //string
console.log(typeof 3); //number
console.log(typeof true); //boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

//弊端：无法准确分辨出null、object、array
console.log(typeof {a: 123}); //object
console.log(typeof [1,2,3]); //object
console.log(typeof function () {
    console.log('function');
}); //function

//解决：借助instanceof