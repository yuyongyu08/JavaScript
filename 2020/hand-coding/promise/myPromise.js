class MyPromise {
    constructor(executor) {
        this._statusSet = {
            pending: 'PENDING',
            fulfilled: 'FULFILLED',
            rejected: 'REJECTED',
        };

        this._status = this._statusSet.pending;

        this._value = undefined;

        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }

    }

    _resolve(val) {
        if (this._status !== this._statusSet.pending) return;

        this._status = this._statusSet.fulfilled;
        this._value = val;
    }

    _reject(err) {
        if (this._status !== this._statusSet.pending) return;

        this._status = this._statusSet.rejected;
        this._value = err
    }

    then(onFulfiled, onRejected) {
        switch (this._status) {
            case this._statusSet.fulfilled:
                onFulfiled(this._value)
                break;
            case this._statusSet.rejected:
                onRejected(this._value)
                break;
            default:

                break;
        }
        return this
    }

    catch(cb) {
        this._status === this._statusSet.rejected && cb && cb(this._value);
        return this
    }
}

let promise = new MyPromise((resolve, reject) => {
    try {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('success!')
            } else {
                reject('fail!')
            }
        }, 1000)
    } catch (error) {
        reject(error)
    }
})

promise.then(res => {
    console.log(res);
}, err => {
    console.log('reject:', err);
})