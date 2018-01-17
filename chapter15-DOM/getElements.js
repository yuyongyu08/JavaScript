/**
 * Created by yuyongyu on 2018/1/11.
 */
document.getElementById('id')

document.getElementsByName('name')

document.getElementsByTagName('tagName')

document.getElementsByClassName('className1 className2')

document.querySelector('css selector')

document.querySelectorAll('css selector')


var htmlCollection = document.getElementsByTagName('h1');

htmlCollection.forEach(function (element) {
    console.log(element.className);
});

htmlCollection.filter(function (element) {
    return element.id = 'slogan'
});

htmlCollection.map(function (element) {
    element.title = 'test'
});

Array.prototype.map.call(htmlCollection, function (element) {
    element.title = 'test'
});



//NodeList是实时的

var parent = document.getElementById('parent');
var child_nodes = parent.childNodes; //NodeList
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // should output "3"


//NodeList是实时的
var nodeList = document.querySelectorAll('h1.title1');
console.log(nodeList.length);// 2
var parent = document.getElementById('parent');
var newEle = document.createElement('h1');
newEle.className = 'title1'
parent.appendChild(newEle);
console.log(nodeList.length); // still 2



//HTMLCollection是实时的
var htmlCollection = document.getElementsByTagName('h1');
console.log(htmlCollection.length);// 2
var parent = document.getElementById('parent');
parent.appendChild(document.createElement('h1'));
console.log(htmlCollection.length);// 3

