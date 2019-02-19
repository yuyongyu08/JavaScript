let set = new Set();

set.add('yuyy');
set.add('male');
set.add('1991');

console.log(set); //Set { 'yuyy', 'male', '1991' }


//1.转Array
console.log(Array.from(set)); //[ 'yuyy', 'male', '1991' ]