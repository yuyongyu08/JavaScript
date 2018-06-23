let developer = {
    title: 'Frontend',
    basic: {
        html: '5',
        css: '3',
        js: 'es6'
    },
    frameworks: ['React', 'Vue', 'AngularJS'],
    summary: function(){
        console.log('I am FE developer');
    }
};

/*
* 方式1：逐个复制
*
* */
function cloneInShallow(source) {
    let target = {};

    for (prop in source){
        target[prop] = source[prop];
    }

    return target
}
let newDeveloper = cloneInShallow(developer);

/*
* 方式2：Object.assign()
*
* */
// let newDeveloper = Object.assign({}, developer);

console.log(newDeveloper);

//基本类型：不改变原对象
newDeveloper.title = 'Frontend Leader';
console.log(developer.title); // Frontend

// 对象：改变原对象
newDeveloper.basic.http = '2.0';
console.log(developer.basic.http); // 2.0
newDeveloper.basic.js = 'es5';
console.log(developer.basic.js); // es5

//数组：改变原对象
newDeveloper.frameworks.push('Angular');
console.log(developer.frameworks); // [ 'React', 'Vue', 'AngularJS', 'Angular' ]

//函数：不改变原对象
newDeveloper.summary = function () {
    console.log('I like FE development');
};
developer.summary(); // I am FE developer

