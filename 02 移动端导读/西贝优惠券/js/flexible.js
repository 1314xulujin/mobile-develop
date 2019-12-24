(function(){
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    //防抖函数
    function debounce(handler ,interval){
        var timer = null;
        handler(); //首次执行
        return function(){
            if(timer!=null) clearTimeout(timer);
            timer = setTimeout(handler,interval)
        }
    }
    //具体的处理函数
    function handler(){
        var clientW = window.innerWidth;//获取当前窗口的宽度
        var fz = clientW / 375 * 100;
        document.documentElement.style.fontSize=fz + "px";
    }
    //监听窗口的缩放事件
    window.addEventListener(supportsOrientationChange,debounce(handler,300));
})()