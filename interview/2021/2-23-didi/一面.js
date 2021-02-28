
// getElementStr.prototype.render = function () {
//     return this.template
// }

class Element {
    constructor(node) {
        this.tagName = node.tagName;
        this.props = Object.entries(node.props).reduce((a, b) => {
            return a + `${b[0]}="${b[1]}" `
        }, '');
        this.children = node.children;
    }

    render() {
        return `<${this.tagName} ${this.props}>${this.children.join('')}</${this.tagName}>`
    }
}

let ele = Element({
    tagName: 'ul',
    props: { 'class': 'list' },
    children: [
        Element({ tagName: 'li', children: ['item2'] }),
        Element({ tagName: 'li', children: ['item2'] })]
})