function Mother(name) {
    this.name = name;
    this.father = 'baba'
}

let c1 = new Mother('huahua');
let c2 = new Mother('huihui');

console.log(c1.father);
console.log(Mother.prototype);

Mother.prototype.father = 'Yuyy';

Object.getPrototypeOf(c1).father = 'yyy'

console.log(c1.father);
