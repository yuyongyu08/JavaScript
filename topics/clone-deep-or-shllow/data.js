let developer = {
    title: 'Frontend',
    base: {
        html: '5',
        css: '3',
        js: 'es6'
    },
    frameworks: ['React', 'Vue', 'AngularJS', {node: 'express'}],
    sayHi: function(){
        console.log(`I am ${this.title} developer`);
    },
    start: new Date(),
    like: new Set('美食', '电影', '运动'),
};

module.exports = developer;