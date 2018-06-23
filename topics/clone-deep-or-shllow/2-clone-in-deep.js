let developer = {
    title: 'Frontend',
    basic: {
        html: '5',
        css: '3',
        js: 'es6'
    },
    frameworks: ['React', 'Vue', 'AngularJS', {node: 'express'}],
    summary: function(){
        console.log('I am FE developer');
    }
};

/*
* 方式1: 纯手工打造
* */
function cloneInDeep(source) {
    if(source && typeof source === 'object'){
        let target = {};
        for (let prop in source){
            let value = source[prop];

            if(Array.isArray(value)){
                let newArray = [];
                value.forEach(function (item, index) {
                    if(Array.isArray(item) || Object.getPrototypeOf(item) === Object.prototype){
                        newArray.push(cloneInDeep(item))
                    }else{
                        newArray.push(item)
                    }
                });

                target[prop] = newArray;
            }else if(Object.getPrototypeOf(value) === Object.prototype){
                target[prop] = cloneInDeep(value);
            }else{
                target[prop] = value;
            }
        }

        return target
    }else{
        throw new Error('source is not object!')
    }
}
let newDeveloper = cloneInDeep(developer);


/*
* 方式2: JSON.parse(JSON.stringify(obj))
* 弊端：会抛弃对象的constructor
* 适用：能够被json直接表示的数据结构，对象中只包含number、string、boolean、array、扁平对象
* 不适用：含有function、regexp
* */
// let newDeveloper = JSON.parse(JSON.stringify(developer));


/*
* 方式3: jQuery
* */
let $ = require('jquery');
// let newDeveloper = $.extend({}, developer);

/*
* 方式4: lodash
* */
let _ = require('lodash');
// let newDeveloper = _.cloneDeep(developer);


console.log(newDeveloper);

//基本类型：不改变原对象
newDeveloper.title = 'Frontend Leader';
console.log(developer.title); // Frontend

// 对象：不改变原对象
newDeveloper.basic.http = '2.0';
console.log(developer.basic.http); // undefined
newDeveloper.basic.js = 'es5';
console.log(developer.basic.js); // es6

//数组：不改变原对象
newDeveloper.frameworks.push('Angular');
console.log(developer.frameworks); // [ 'React', 'Vue', 'AngularJS' , { node: 'express' } ]
newDeveloper.frameworks[3].node = 'koa';
console.log(developer.frameworks); // [ 'React', 'Vue', 'AngularJS' , { node: 'express' } ]

//函数：不改变原对象
newDeveloper.summary = function () {
    console.log('I like FE development');
};
developer.summary(); // I am FE developer

