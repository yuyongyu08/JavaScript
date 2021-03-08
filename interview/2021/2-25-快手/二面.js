var name = '123'

let obj = {
    name: '456',
    getName: function () {
        function printName() {
            console.log(name); //指向全局
            console.log(this.name);
        }

        printName() //调用者为undefined
    }
}

obj.getName()




for (let index = 0; index < 3; index++) {
    setTimeout(() => {
        console.log(index);
    })
}