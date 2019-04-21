;(function () {
    // import debounce1 from '../solution/debounce';
    // let throttle = require('../solution/throttle');

    /*
    * 防抖原理：每次触发后，在约定时间之后执行，如果在约定时间前再次触发，则重制等待时间
    *
    * */
    function debounce(cb, wait) {
        let timer = null;

        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                cb.apply(this, arguments);
            }, wait)
        }
    }

    /*
    * 节流原理：每次触发后，立即执行，但在约定时间内再次触发都不执行，保证约定时间内只执行一次
    *
    * */
    function throttle(cb, wait) {
        let timer = null;

        return function () {
            if(!timer){
                cb.apply(this, arguments);

                timer = setTimeout(function () {
                    clearTimeout(timer);
                    timer = null;
                }, wait)
            }
        }
    }

    function callback() {
        let c = window.counter++;
        console.log(c);
        document.getElementById('app').innerText = c;
    }

    function changeWay(type) {
        document.removeEventListener('mousemove', window.cb);

        window.cb = null;
        if(type == 1){
            cb = debounce(callback, 200)
        }else if (type == 2){
            cb = throttle(callback, 200)
        }else{
            cb = callback;
        }

        document.addEventListener('mousemove', window.cb)
    }

    window.changeWay = changeWay;
    window.counter = 0;


})();

