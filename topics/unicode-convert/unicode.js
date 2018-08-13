function textToUnicode(text) {
    return text.split('').map(function (value, index, array) {
        return '\\u' + value.charCodeAt(0).toString(16).toUpperCase().padStart(4,  '0'); //ES2017语法
    }).join('')
}


function unicodeToText(unicode) {
    return JSON.parse('"' + unicode + '"')
}

var text = 'hello,world!';

console.log(textToUnicode(text));
console.log(unicodeToText(textToUnicode(text)));


