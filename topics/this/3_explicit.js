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

let Jery = {
    name: 'Jery'
};


//this显式指向Jery
Tom.sayTitle.apply(Jery, [['developer', 'programmer', 'engineer']]);
Tom.sayTitle.call(Jery, ['developer', 'programmer', 'engineer']);
Tom.sayTitle.bind(Jery)(['developer', 'programmer', 'engineer']);
