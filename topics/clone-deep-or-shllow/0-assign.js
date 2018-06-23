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

let newDeveloper = developer;

console.log(newDeveloper);

//基本类型：改变原对象
newDeveloper.title = 'Frontend Leader';
console.log(developer.title); // Frontend Leader

//对象：改变原对象
newDeveloper.basic.http = '2.0';
console.log(developer.basic.http); // 2.0
newDeveloper.basic.js = 'es5';
console.log(developer.basic.js); // es5

//数组：改变原对象
newDeveloper.frameworks.push('Angular');
console.log(developer.frameworks); // [ 'React', 'Vue', 'AngularJS', 'Angular' ]

//函数：改变原对象
newDeveloper.summary = function () {
    console.log('I like FE development');
};
developer.summary(); // I like FE development
