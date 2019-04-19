(function () {
    function init(elements){
        this.elements = elements;
        console.log(elements);

        //绑定滚动事件
        bindEvent();

        //触发滚动
        scrollHandler();
    }

    function bindEvent(){
        if(window.addEventListener){
            window.addEventListener("scroll", scrollHandler, false);
        } else {
            window.attachEvent("onscroll", scrollHandler, false);
        }
    }

    function scrollHandler(){
        for(var element of this.elements){
            if(!element.src && elementInView(element)){
                var src = element.attributes['data-src'].value;
                loadImage(element, src)
            }
        }
    }

    /*
    * 原理：元素的位置高度
    * 元素位置 < 屏幕可视高度 + 滚动高度
    *
    * */
    function elementInView(element){
        var viewHeight = getViewHeight();
        var scrollTop = getScrollTop();
        var elementOffsetTop = getOffsetTop(element);

        return elementOffsetTop < viewHeight + scrollTop;
    }

    function loadImage(image, src){
        image.src = src
    }


    //屏幕可视高度
    function getViewHeight() {
        // 标准浏览器及IE9+ || 标准浏览器及低版本IE标准模式 || 低版本混杂模式
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    //滚动高度
    function getScrollTop() {
        // 标准浏览器及IE9+ || 标准浏览器及低版本IE标准模式 || 低版本混杂模式
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }

    //元素位置：考虑到定位元素的后代元素和一些其他元素（表格单元），offsetTop是相对于祖先元素情况，递归获取
    function getOffsetTop(el) {
        return el.offsetParent
            ? el.offsetTop + getOffsetTop(el.offsetParent)
            : el.offsetTop
    }

    init(document.querySelectorAll("[data-src]"));
})();


