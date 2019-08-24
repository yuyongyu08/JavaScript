function log() {
    console.log('bar.log() called');

    var newEle = document.createElement('h2');
    newEle.textContent = 'bar.log was called!';
    document.body.appendChild(newEle);
}

let a = 2;

export default {
    log,
    a
};
