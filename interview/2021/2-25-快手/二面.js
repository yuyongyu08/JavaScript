var name = '123'

let obj = {
    name: '456',
    getName: function () {
        function printName() {
            console.log(name); //指向全局
            console.log(this.name);
        }

        printName() //调用者为undefined
    },
    getName1: () => {
        function printName() {
            console.log(name); //指向全局
            console.log(this.name);
        }

        printName() //调用者为undefined
    },
    getName2: function () {
        let printName = () => {
            console.log(name); //指向getName2的上一层
            console.log(this.name);
        }

        printName() //调用者为undefined
    },
    getName3: () => { //指向obj的上一层：global
        let printName = () => {
            console.log(name); //指向getName3的上一层：obj
            console.log(this.name);
        }

        printName() //调用者为undefined
    },
}

obj.getName(); //undefined
obj.getName1(); //undefined
obj.getName2(); //456
obj.getName3(); //undefined

/**
 * 总结：
 * 普通函数：this永远指向调用者，即便是父函数中的子函数，同样适用
 * 箭头函数：从自己作用域的上一层继承this
*/




for (let index = 0; index < 3; index++) {
    setTimeout(() => {
        console.log(index);
    })
}