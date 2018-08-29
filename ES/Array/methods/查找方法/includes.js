/**
 * 判断一个数组是否包含一个指定的值，比对元素时用===
 * 参数：any
 * 返回：boolean
 *
 */
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // true

console.log(arr.includes([2,3])); //false

console.log(arr.includes([2])); //false


let persons = [
    {
        id: '1',
        name: 'yuyy'
    },
    {
        id: '2',
        name: 'yyy'
    }
];

console.log(persons.includes({id: '1', name: 'yuyy'})); // false


let person = {
    id: '1',
    name: 'yuyy'
};

let personList = [
    person,
    {
        id: '2',
        name: 'yyy'
    }
];

console.log(personList); // [ { id: '1', name: 'yuyy' }, { id: '2', name: 'yyy' } ]

console.log(person === personList[0]); //true

console.log(personList.includes(person)); // true