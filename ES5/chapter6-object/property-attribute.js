let a = {
    _b: 'world'
};

Object.defineProperty(a, 'b', {
    set: function (newValue) {
        console.log('设置：', newValue);
        this._b = newValue;
    },

    get: function () {
        console.log('取值：');
        return this._b
    }
});


a.b = 'hello';

console.log(a.b);


//装饰一颗圣诞树
var tree = {};
tree.decorate = function () {
    console.log('tree');
}

/*接着，再定义 getDecorator()方法，该方法用于添加额外的装饰器。装饰器被实现为构造器函数，都继承自 tree 对象。*/

tree.getDecorator = function (deco) {
    tree[deco].prototype = this;
    return new tree[deco];
};

/*下面来创建3个装饰器，我们将它设为 tree 的一个属性（以保持全局命名空间的纯净）。 以下对象也提供了 decorate()方法，注意它先调用了父类的decorate()方法。*/

tree.Red = function () {
    this.decorate = function () {
        this.Red.prototype.decorate();
        // console.log(this.Red.prototype);
        // console.log(this.Red.prototype.decorate);
        console.log('red');
    };
    this.name = 'red';
}
tree.Blue = function () {
    this.decorate = function () {
        this.Blue.prototype.decorate();
        // console.log(this.Blue.prototype.decorate);
        //tree['Blue']的原型是tree，所以打印出"tree"
        console.log('blue');
    }
    this.name = 'blue';
}
tree.Angel = function () {
    this.decorate = function () {
        this.Angel.prototype.decorate();
        // console.log(this.Angel.prototype.decorate);
        console.log('angle');
    }
    this.name = 'angel';
}

/*把所有的装饰器都添加到基础对象中：*/

tree = tree.getDecorator('Blue');
tree = tree.getDecorator('Angel');
tree = tree.getDecorator('Red');

/*运行：*/
tree.decorate();
//tree
//blue
//angle
//red

/*解析：
   1、执行tree = tree.getDecorator('Blue')：
       tree['Blue'].prototype = tree;
       tree = {decorate: ƒ, name: "blue"}
       即tree['Blue']赋值给tree，tree['Blue']的原型指向tree
   输出:
   "tree"
   "blue"

   2、执行tree = tree.getDecorator('Angel')：
       tree['Angel'].prototype = tree['Blue'],(这时候tree已经赋值为tree['Blue'])
       tree = {decorate: ƒ, name: "Angle"}
       即tree['Angel']赋值给tree，tree['Angel']的原型指向tree['Blue']
   输出：
   "angel"

   3、执行tree = tree.getDecorator('Red')：
       tree['Red'].prototype = tree['Angel'],(这时候tree已经赋值为tree['Angel'])
       tree = {decorate: ƒ, name: "Red"}
       即tree['Red']赋值给tree，tree['Red']的原型指向tree['Angel']
   输出：
   "red"
*/

/*
图解：从下往上依次继承
  tree = {decorate:fn,getDecorator:fn}
                    |
     tree['Blue'].prototype//tree={decorate: ƒ, name: "blue"}
                                    |
                        tree['Angel'].prototype//tree={decorate: ƒ, name: "Angle"}
                                                        |
                                                 tree['Red'].prototype//tree={decorate: ƒ, name: "Red"}
*/