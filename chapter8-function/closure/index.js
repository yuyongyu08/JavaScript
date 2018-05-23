var message = 'global';

function a() {
    var message = 'a scope';

    var expo = function () {
        return message;
    }

    return expo
}

function b() {
    var message = 'b scope';

    console.log(a()());
}

b();