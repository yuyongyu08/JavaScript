;(function () {
    function callback(id) {
        let el = document.getElementById(id);

        let counter = el.dataset.counter;
        let c = parseInt(counter) + 1;
        el.dataset.counter = c;
        el.innerText = c;
    }

    let zone = document.getElementById('app');
    zone.addEventListener('mousemove', callback.bind(null, 'normal'));
    zone.addEventListener('mousemove', debounce(callback.bind(this, 'debounce'), 200));
    zone.addEventListener('mousemove', throttle(callback.bind(this, 'throttle'), 200));
})();