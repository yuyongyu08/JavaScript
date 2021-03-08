var a = 1;

var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(a);
    let a = 2;
  },
  d: function () {
    console.log(0);
    setTimeout(_ => console.log(1));
    new Promise(resolve => {
      console.log(2);
    }).then(_ => {
      console.log(3);
    });
    console.log(4)
  }
}


obj.b(); // undefined {}
// obj.c(); //报错
// obj.d(); // 0 2 4 1

/**
 * 那么如何解释ES6中箭头函数中的this是定义时的绑定呢？
 * 所谓的定义时候绑定，就是this是【继承自父执行上下文！！中的this】，
 * 比如这里的箭头函数中的this.x，
 * 箭头函数本身与say平级以key:value的形式，
 * 也就是箭头函数本身所在的对象为obj，而obj的父执行上下文就是window，因此这里的this.x实际上表示的是window.x，因此输出的是11。
 */