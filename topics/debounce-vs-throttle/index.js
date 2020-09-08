; (function () {
    let os = function () {
        const ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPC = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPC: isPC
        };
    }();

    function callback(id) {
        let el = document.getElementById(id);

        let counter = el.dataset.counter;
        let c = parseInt(counter) + 1;
        el.dataset.counter = c;
        el.innerText = c;
    }

    let zone = document.getElementById('app');

    let eventType = 'mousemove';
    if (os.isAndroid || os.isPhone) {
        eventType = 'touchmove'
    }
    zone.addEventListener(eventType, callback.bind(null, 'normal'));
    zone.addEventListener(eventType, debounce(callback.bind(this, 'debounce'), 200));
    zone.addEventListener(eventType, throttle(callback.bind(this, 'throttle'), 200));
})();