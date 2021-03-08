function fn(a, b, cb) {
    cb(a+b);
}

function carry() {
    let cache = {};

    return (a, b, cb) => {
        const key = encodeURIComponent(a) + encodeURIComponent(b)
        if (cache[key]) {
            cb(cache[key])
        } else {
            fn(a, b, data => {
                cache[key] = data;
                cb(data);
            })
        }
    }
}

const cacheFn = carry();