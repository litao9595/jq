//滚动加载更多
function LoadMore(fn,obj){
    var timeoutInt;
    var _this=this;
    this.obj=obj;
    this.jonscroll=function(){
        window.onscroll = function () {
            if (timeoutInt != undefined) {
                window.clearTimeout(timeoutInt);
            }
            timeoutInt=function(){
                if(_this.getScrollHeight() == _this.getDocumentTop() + _this.getWindowHeight()){
                    //当滚动条到底时,这里是触发内容
                    fn(_this.obj)
                }
            }();
        }
    };
    this.jonscroll();
    //文档高度
    this.getDocumentTop=function(){
        var scrollTop =  0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    };
    //可视窗口高度
    this.getWindowHeight=function(){
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    };
    //滚动条滚动高度
    this.getScrollHeight=function(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    };
}

var ks=new LoadMore(function(obj){
},{pageNo:1,pageSize:10});


//获取地址栏参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

