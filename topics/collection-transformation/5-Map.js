let map = new Map();
map.set('name', 'yuyy');
map.set('gender', 'male');
map.set('birthday', '1991');

console.log(map); //Map { 'name' => 'yuyy', 'gender' => 'male', 'birthday' => '1991' }

//【转Array】
console.log(Array.from(map)); //[ [ 'name', 'yuyy' ],[ 'gender', 'male' ],[ 'birthday', '1991' ] ]

