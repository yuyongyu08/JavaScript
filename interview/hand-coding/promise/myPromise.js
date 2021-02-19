class MyPromise {
    constructor(executor) {
        this._statusSet = {
            pending: 'PENDING',
            fulfilled: 'FULFILLED',
            rejected: 'REJECTED',
        };
        this._status = this._statusSet.pending;

        this._value = undefined;
        this._reason = undefined;

        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];

        const _resolve = val => {
            if (this._status === this._statusSet.pending) {
                this._status = this._statusSet.fulfilled;
                this._value = val;
                this.resolvedCallbacks.forEach(fn => fn(val));
            }
        };

        const _reject = err => {
            if (this._status === this._statusSet.pending) {
                this._status = this._statusSet.rejected;
                this._value = err;
                this.rejectedCallbacks.forEach(fn => fn(err));
            }
        }

        try {
            executor(_resolve, _reject)
        } catch (error) {
            this._reject(error)
        }

    }

    then(onFulfiled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const resolveFn = value => {
                try {
                    const x = onFulfiled && onFulfiled(value);
                    x instanceof MyPromise ? x.then(value) : resolve(value)
                } catch (error) {
                    reject(error)
                }
            }

            const rejectFn = err => {
                try {
                    const x = onRejected && onRejected(err)
                    x instanceof MyPromise ? x.then(err) : reject(err)
                } catch (error) {
                    reject(error)
                }
            }

            switch (this._status) {
                case this._statusSet.fulfilled:
                    resolveFn(this._value)
                    break;
                case this._statusSet.rejected:
                    rejectFn(this._value)
                    break;
                case this._statusSet.pending:
                    this.resolvedCallbacks.push(resolveFn);
                    this.rejectedCallbacks.push(rejectFn);
                    break;
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
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
    console.log('resolve:', res);
}, err => {
    console.log('reject:', err);
}).then().then(res => {
    console.log('second resolve:', res);
}, err => {
    console.log('second reject:', err);
})