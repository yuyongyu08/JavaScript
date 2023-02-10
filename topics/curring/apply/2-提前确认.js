const on = function (ele, eventName, handler) {
  if (document.addEventListener) {
    ele.addEventListener(eventName, handler, false);
  } else {
    ele.attachEvent("on" + eventName, handler);
  }
};

on(document.querySelector(".demoe"), "click", () => console.log("clicked"));

//柯里化，只需要做一次兼容判断，无需每次调用都判断
const curry = function () {
  if (document.addEventListener) {
    return (ele, eventName, handler) => ele.addEventListener(eventName, handler, false);
  } else {
    return (ele, eventName, handler) => ele.attachEvent("on" + eventName, handler);
  }
};

const curringOn = curry();
curringOn(document.querySelector(".demoe"), "click", () => console.log("clicked"));
