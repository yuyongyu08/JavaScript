let Tom = {
    name: 'Tom',
    sayName: function () {
        console.log(`Hi, I am ${this.name}!`);
    },
    sayTitle(titles = []){
        console.log(`I am ${this.name}, my title: ${titles.join('、')}`);
    }
};

Tom.sayName();
Tom.sayTitle(['developer']);

let Jerry = {
    name: 'Jerry'
};


//this显式指向Jery
Tom.sayTitle.apply(Jerry, [['developer', 'programmer', 'engineer']]);
Tom.sayTitle.call(Jerry, ['developer', 'programmer', 'engineer']);
Tom.sayTitle.bind(Jerry)(['developer', 'programmer', 'engineer']);
