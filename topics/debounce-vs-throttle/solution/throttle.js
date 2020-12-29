/*
   * 节流原理：每次触发后，立即执行，但在约定时间内再次触发都不执行，保证约定时间内只执行一次
   *
   * */
function throttle(cb, wait) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        cb(...args);
        timer = null;
      }, wait)
    }
  }
}