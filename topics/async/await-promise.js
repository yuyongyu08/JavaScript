async function fn() {
    const result = await new Promise((resovle) => {
        console.log('promise start');
        resovle('promise resovle')
    }).then((val) => {
        console.log(val);
        return 'promise end'
    })

    console.log(result);
    return 'async end'
}

fn().then(val => console.log(val))

/**
 * promise start
 * promise resovle
 * promise end
 * async end
 */