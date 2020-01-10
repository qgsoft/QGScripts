//---------------------Global Vars-------------------------
//需要拦截检查视频
var NeedInterceptCheckVideo = false;
var CurrentSite = false;
var REGREX_IQY = [ 
    new RegExp(".*t7z.cupid.iqiyi.com.*?","i")
];
var REGREX_VQQ = [
    /.*livew.l.qq.com\/livemsg.*?/i,
    /.*btrace.video.qq.com.*/i,
    /.*script\/play\/vip.*?\.js.*?/i,
    /.*script\/mplay\/\d+\.js.*?/i,
    /.*tencentvideo\/script\/msite\/msite.*/i,
    /.*h5defn.*?\.js,h5uifullscreen.*?\.js.*/i
]
var REGREX_YOUKU = [
    //未知,可能是跟踪
    /.*mmstat.com.*/i,
    //横幅拦截
    /.*yksmartbanner.*?\.js/i
]
//---------------------------------------------------------

//脚本被加载
function OnLoad() {
    //app.log("加载完成");
}

function ProcessNewPage(url) {
    var strurl = url.toString();
    var schema = url.getScheme();
    //非HTTP类型的都禁止打开
    if(!schema.startsWith("http")){
        return true;
    } 
    
    if( NeedInterceptCheckVideo ) {
        if( strurl.endsWith(".apk") ) return true;  
        else if( strurl.contains("mcgi.v.qq.com/commdatav")) return true;
    }
    //允许打开URL
    return false;
}

//是否允许打开一个新的网址
function OnLoadUrl(webView,request) {
    return ProcessNewPage(request.getUrl());
}

//低版本的API处理
function OnLoadUrl2(webView,androidUrl) {
    return ProcessNewPage(androidUrl);
}

//Block爱奇艺广告
function BlockAD_IQY(text) {
    try{
        var reg_val = /(.*\()(\{.*\})/i;
        if( (result = reg_val.exec(text)) != null ) {
            var oldHeader = result[1];
            var jsonValue = result[2];
            //错误的格式
            if(!oldHeader || !jsonValue) return false;
            //转换为JSON
            jsonValue = JSON.parse(jsonValue);
            if(!jsonValue) return false;    
            //开始处理，先判断一下版本，目前只支持最新的3.0
            var haveAd = false;
            var version = jsonValue.v;
            if( version == "3.0") {
                var s = jsonValue.s;
                for(var i = 0; i < s.length; i++){
                    var vItem = s[i];
                    var adList = vItem.a;
                    if( adList && adList.length > 0 ){
                        s.splice(i,1);
                        haveAd = true;
                    }
                }
            }
            if( haveAd ){
                var dv = JSON.stringify(jsonValue);
                return oldHeader + dv + ")";
            }
        }
        return text;
    } catch(e) {
        return "";
    }
}

//Block腾讯视频广告
function Block_VQQ(text){
    try{
        var reg_val = /(.*\()(\{.*\})/i;
        if( (result = reg_val.exec(text)) != null ) {
            var oldHeader = result[1];
            var jsonValue = result[2];
            //错误的格式
            if(!oldHeader || !jsonValue) return false;
            
            //转换为JSON
            jsonValue = JSON.parse(jsonValue);
            if(!jsonValue) return false; 

            var haveAd = false;
            var adlist = jsonValue.adList;
            if( adlist ) {
                var s = adlist.item;
                if( s ) {
                    s.splice(0,s.length);
                    haveAd = true;       
                }
            }
            var adLoc = jsonValue.adLoc;
            if( adLoc ){
                adLoc.iCheckLogin = 0,
                adLoc.iCheckUser = 0,
                adLoc.iVipInfoRsp = 1,
                adLoc.isvip = 1;
                haveAd = true;
            }
            if( haveAd ){
                var dv = JSON.stringify(jsonValue);
                return oldHeader + dv + ")";
            }
        }
        return text;
    } catch(e) {
        return "";
    }
}

//处理优酷广告
function Block_YOUKU(json){  
    var emptyAd = json+`({"VER":"3.0","REQID":"0","SKIP":1,"VAL":[],"P":7})`;
    return emptyAd;
}

//处理爱奇艺
function Process_IQY(webView,request,webUrl,isFromMainFrame,isGet,scheme){
    //爱奇艺广告BLOCK
    if(REGREX_IQY[0].test(webUrl)) {
        var client = new Http(webUrl,"get").run();
        if(client){
            return ["application/json","utf-8",BlockAD_IQY(client)];
        }
    }
    if (webUrl.lastIndexOf("chunk-vendors.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/chunk-vendors.min.js"];
    } else if (webUrl.lastIndexOf("chunk-video") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/chunk-video.min.js"];
    } else if (webUrl.lastIndexOf("appPl.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/appPl.min.js"];
    } else if (webUrl.lastIndexOf("main.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/main.min.js"];
    } else if (webUrl.lastIndexOf("chunk-common.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/chunk-common.min.js"];
    } else if (webUrl.lastIndexOf("appPs.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/appPs.min.js"];
    } else if (webUrl.lastIndexOf("appP.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/appP.min.js"];
    } else if (webUrl.lastIndexOf("chunk-play.") > 0 ){
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/iqy/chunk-play.min.js"];
    } 
    return false;
}

//处理QQ视频
function Process_QQVIDEO(webView,request,webUrl,isFromMainFrame,isGet,scheme){
    //爱奇艺广告BLOCK
    if(REGREX_VQQ[0].test(webUrl)) {
        var client = new Http(webUrl,"get").run();
        if(client){
            return ["text/json","utf-8",Block_VQQ(client)];
        }
    } else if(REGREX_VQQ[1].test(webUrl)) {
        return ["","",""];
    }
    //腾讯视频系列
    if( REGREX_VQQ[2].test(webUrl)) {   
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/qqvideo/vip_2.min.js"];
    } else if(REGREX_VQQ[3].test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/qqvideo/20191009.min.js"];
    } else if(REGREX_VQQ[4].test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/qqvideo/msite.01b4.min.js"];
    } else if(REGREX_VQQ[5].test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/qqvideo/h5defn.dcbbaa.min.js"];
    } else if(webUrl.startsWith("https://puui.qpic.cn/vupload/0/1570868832052_opuuuid196.png")) {
        //这是一个推荐列表的VIP图标，隐藏掉
        return ["","",""]
    }
    return false;
}

//处理优酷
function Process_YOUKU(webView,request,webUrl,isFromMainFrame,isGet,scheme){
    //优酷广告BLOCK
    if(REGREX_YOUKU[0].test(webUrl)) {
        return ["application/javascript","utf-8","window.goldlog=(window.goldlog||{});goldlog.Etag=\"0\";goldlog.stag=1;"];
    } else if(REGREX_YOUKU[1].test(webUrl)) {
        return ["","",""];
    } else if(webUrl.startsWith("https://mf.atm.youku.com/mf?")){
        var callback = /callback=(.*)/i.exec(webUrl);
        if( callback != null ){
            return ["application/json","utf-8",Block_YOUKU(callback[1])];
        }   
    }

    //替换JS
    if ( /.*alilog\/mlog\/aplus_v2.js.*/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/aplus_v2.js"];
    } else if ( /.*mtop.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/mtop.min.js"];
    } else if ( /.*h5phoneplayer.min.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/h5phoneplayer.js"];
    } else if ( /^https:\/\/g.alicdn.com.*comment.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/comment.js"];
    } else if ( /^https:\/\/g.alicdn.com.*log.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/log.js"];
    } else if ( /^https:\/\/g.alicdn.com.*pagesdk.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/pagesdk.js"];
    }
    else if ( /^https:\/\/g.alicdn.com.*ykhomepage.*Page.chunk.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/homepage/Page.chunk.min.js"];
    } else if ( /^https:\/\/g.alicdn.com.*playpage.*Page.chunk.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/playpage/Page.chunk.min.js"];
    }
    else if ( /^https:\/\/g.alicdn.com.*ykhomepage.*runtime.*Page.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/homepage/runtime~Page.js"];
    } else if ( /^https:\/\/g.alicdn.com.*playpage.*runtime.*Page.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/playpage/runtime~Page.js"];
    }
    else if ( /^https:\/\/g.alicdn.com.*ykhomepage.*vendor.chunk.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/homepage/vendor.chunk.js"];
    } else if ( /^https:\/\/g.alicdn.com.*playpage.*vendor.chunk.js.*?/i.test(webUrl) ) {
        return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.006/youku/playpage/vendor.chunk.js"];
    } 
    return false;
}

//参数1:webView是不靠谱的。可能会为空在ServiceWorkder线程中
//拦截一个请求、JS文件等。支持拦截ServiceWorker中的请求
function OnInterceptRequest(webView,request,webUrl,isFromMainFrame,isGet,scheme) {
    //是视频网站要检查
    if(NeedInterceptCheckVideo){
        if(CurrentSite == "iqiyi") {
            return Process_IQY(webView,request,webUrl,isFromMainFrame,isGet,scheme);
        } 
        else if(CurrentSite=="qqvideo")
        {
            return Process_QQVIDEO(webView,request,webUrl,isFromMainFrame,isGet,scheme);
        }
        else if(CurrentSite =="youku"){
            return Process_YOUKU(webView,request,webUrl,isFromMainFrame,isGet,scheme);
        }
    }
    return false;
}

//进入一个新的网站
function OnUrlChange(url){
    NeedInterceptCheckVideo = false;
    //进入爱奇艺
    if(url.indexOf("iqiyi")>=0){
        CurrentSite = "iqiyi";
        app.SetCookies(".iqiyi.com",["P00003=1;","P00002=1;"]);
        NeedInterceptCheckVideo = true;
        app.SetInterceptResource(false);
    } else if (url.indexOf("v.qq.com")>=0){
        CurrentSite = "qqvideo";
        NeedInterceptCheckVideo = true;
        app.SetInterceptResource(false);
    } else if( url.indexOf("youku.com")) {
        CurrentSite = "youku";
        NeedInterceptCheckVideo = true;
        app.SetInterceptResource(false);
    }
    else {
        CurrentSite = false;
        app.SetInterceptResource(true);
    }
}

//页面开始加载
function OnPageStart(webView,url) {

}

//一个页面加载完成
function OnPageLoadComplete() {

}
