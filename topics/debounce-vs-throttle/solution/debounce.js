/*
   * 防抖原理：每次触发后，在约定时间之后执行，如果在约定时间前再次触发，则重置等待时间
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