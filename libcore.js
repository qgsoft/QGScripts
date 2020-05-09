//---------------------Global Vars-------------------------
//需要拦截检查视频
var NeedInterceptCheckVideo = true;
var CurrentSite = false;
//---------------------------------------------------------

//构造一个最新的JS地址
function GetScriptUrl(path) {
    return "https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.017/" + path;
}

//脚本被加载
function OnLoad() {
   
}

//处理一个新打开的页面
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

//--------------------------------------------------------------------
// 爱奇艺表达式集合
//--------------------------------------------------------------------
var REGS_IQY= {
    main : [
        app.CReg(".*main\..*?\.js"),
        app.CReg("callApp:function\\(\\)\\{.*?\\}\\(\\)"),
        app.CReg("p00002:[^,}]+"),
        app.CReg("p00003:[^,}]+"),
    ],
    chunkPlay : [
        app.CReg(".*chunk-play\..*?\.js"),
        //应该用调用APP问题
        app.CReg("\\w\\.callApp&&.*?callappNum.*?isAdvert,"),
        //点击全屏后APP同步横屏
        app.CReg("this\.isFullscreen=(\\w)\.isFullscreen"),
    ],
    chunkVideo : [
        //0、JS文件匹配
        app.CReg(".*chunk-video\..*?\.js"),
        //1、点击全屏后APP同步横屏
        app.CReg("\\w.isFullscreen=(\\w).isFullscreen"),
        //修改视频清晰度
        app.CReg("if\\(\\!window.cmd5xdash\\|\\|\\!window.cmd5x\\).*?window\\.cmd5x\\?window\\.cmd5x.*?,(\\w)\\}"),
        //HLS播放
        app.CReg("(?<=key:\"src\",value:function)\\((\\w)\\)\\{.*?\\}\\}")
    ],
    appPl : [
        app.CReg(".*appPl\..*?\.js"),
        app.CReg("return (\\w)\\.isSelected=\\w\\.isSelected"),
        app.CReg("\"is-call-app\":.*?,"),
    ],
    chunkCommon : [
        app.CReg(".*chunk-common\..*?\.js"),
        app.CReg("return t.hotWords.length"),
        app.CReg("(?<=\\[602,701,702,703\\]\\.includes\\(\\w\\)\\?\\{).*?\\}")
    ],
    appPs : [
        app.CReg(".*appPs\..*?\.js"),
        app.CReg("\\w\\.callApp&&.*?callappNum.*?isAdvert,"),
    ],
    ares4h5: [
        app.CReg(".*?ares4-h5.min.*"),
        app.CReg("success:function\\((\\w),(\\w),(\\w)\\)\\{(.*?now\\(\\).*?\\w\\(\\2,\\1\\).*?)\\}"),
    ],
    aresMobileh5:[
        app.CReg(".*?ares-mobile-h5.min.*"),
    ],
    appch : [
        app.CReg(".*appch\..*?\.js"),
        app.CReg("if\\(!this\\.isHide\\(\\)\\)"),
    ],
    mbwebHttp : [
        app.CReg(".*mbweb.http\..*?\.js"),
        //以下2个都是修改视频为高清1080
        app.CReg("(?<=tvid:\\w,)bid:[^,]+"),   
        app.CReg("prio:.*?JSON.stringify\\(\\{ff:\"f4v\",code:\\d\\}\\)"),
        //HLS播放
        app.CReg("(?<=key:\"setSrc\",value:function)(\\((\\w),.*?\\))\\{.*?\\}\\},")
    ],
    t7zcupid : [
        app.CReg(".*t7z.cupid.iqiyi.com/show.*"),
    ],
    dataxbaidu : [
        app.CReg(".*datax.baidu.com.*"),
    ],
}
//核心
function Process_IQY(request,webUrl){
    if(REGS_IQY.main[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.main[1].replace(client,"callApp:function(){}");
            html = REGS_IQY.main[2].replace(html,"p00002:true");
            html = REGS_IQY.main[3].replace(html,"p00003:true");
            return ["text/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.appPl[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.appPl[1].replace(client,"$1.type = 2;$1.isCallApp=false;$0");
            var html = REGS_IQY.appPl[2].replace(html,"\"is-call-app\":false,")
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.chunkCommon[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.chunkCommon[1].replace(client,"return false");
            html = REGS_IQY.chunkCommon[2].replace(html,"text:\"提示<br>用券或超前点播是单独付费类型,不在VIP范围内。请在热播期后再来观看\",callAppText: \"试试其它VIP视频\"}");
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.appPs[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.appPs[1].replace(client,"false,")
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.chunkPlay[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        app.log("地址是:" + webUrl);
        if(client){
            var html = REGS_IQY.chunkPlay[1].replace(client,"false,")
            html = REGS_IQY.chunkPlay[2].replace(html,"if(window.qgjs)window.qgjs.setScreenOrientation($1.isFullscreen);$0")
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.ares4h5[0].matches(webUrl) || REGS_IQY.aresMobileh5[0].matches(webUrl)) {
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.ares4h5[1].replace(client,"success:function($1,$2,$3){$1.s=[];$1.c=[];$4}");
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.appch[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_IQY.appch[1].replace(client,"if(false)");
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.mbwebHttp[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            //高清视频
            var html = REGS_IQY.mbwebHttp[1].replace(client,"bid:800");
            html = REGS_IQY.mbwebHttp[2].replace(html,"prio:JSON.stringify({ff:\"m3u8\",code:2})");
            html = REGS_IQY.mbwebHttp[3].replace(html,"$1{if(Hls.isSupported()){var video=document.getElementById('video');var hls=new Hls();hls.loadSource($2);hls.attachMedia(video);hls.on(Hls.Events.MANIFEST_PARSED,function(){video.play();})}else{alert(\"播放失败,您当前的系统版本不支持极清视频(请尝试更新)\");}}},");
            return ["application/javascript","utf-8",html];
        }
    }
    else if(REGS_IQY.chunkVideo[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            //高清视频
            var html = REGS_IQY.chunkVideo[2].replace(client,"$1.ori=\"pcw\";$1.bid=800;$1.abid=800;$1.k_ft1=755914244096;$0");
            html = REGS_IQY.chunkVideo[1].replace(html,"if(window.qgjs)window.qgjs.setScreenOrientation($1.isFullscreen==true);$0");
            html = REGS_IQY.chunkVideo[3].replace(html,"($1){if('undefined'===typeof $1) return this.cache.src || '';this.cache.src=$1,this.player.src=$1,this.trigger('src',$1);if(Hls.isSupported()){var video=document.getElementById('video');var hls=new Hls();hls.loadSource($1);hls.attachMedia(video);hls.on(Hls.Events.MANIFEST_PARSED,function(){video.play();})}else{alert(\"播放失败,您当前的系统版本不支持极清视频(请尝试更新)\");}}");
            return ["application/javascript","utf-8",html];
        }
    } else if(REGS_IQY.dataxbaidu[0].matches(webUrl)){
        return [request,"http://cdn.staticfile.org/hls.js/0.13.2/hls.js"]
    }
    return false;
}

//--------------------------------------------------------------------
// 处理腾讯视频
//--------------------------------------------------------------------
var REGS_QQVIDEO = {
    ADBlock : [
        //广告
        app.CReg(".*livew.l.qq.com\/livemsg.*"),
        //跟踪
        app.CReg(".*btrace.*?qq.com"),
    ],
    msite : [
        app.CReg(".*msite\..*?\.js"),
        //底部横幅
        app.CReg("this.defaultItem=\\{.*?this\.fixedBottom\\(\\)"),
        app.CReg("(?<=\\)\\)\\},)registerOpenApp:function\\((\\w)\\)\\{.*?\\}\\},"),
        //不要提示播放信息。试看等等
        app.CReg("this.clientData&&\\(px&&console.log\\(this.clientData\\)"),
        app.CReg("this.player=new Txplayer\\(this.config\\)")
    ],
    h5htmlframe : [
        app.CReg(".*js/plugins/h5htmlframe.*"),
        //1、替换成1080P
        app.CReg("<txpdiv class=\"txp_label\">.*?</txpdiv>"),
        //2、删除点击1080P的事件
        app.CReg("(?<=u5bb9\"\\},this\.write\\(\\)),this\.addEventListener\\(\\)"),
        //3、4全屏修复
        app.CReg("(?<=videoRequestFullScreen:function\\(\\)\\{)var (\\w)=.*?;"),
        app.CReg("(?<=videoExitFullScreen:function\\(\\)\\{)var (\\w)=.*?;") 
    ],
    h5defn : [
        app.CReg(".*js/plugins/h5defn.*"),
        app.CReg("toggleFullScreen:function\\(\\).*?(?=,exportsModuleApis:function)"),
    ]
}
//高效版直接拦截，不需要请求广告链接
function Block_VQQ_V2(webUrl) {
    var p1 = webUrl.lastIndexOf("callback")
    var oldHeader = "";
    if( p1 != -1) {
        p1 += 9;
        var p2 = webUrl.indexOf("&",p1);
        if( p2 != -1 ){
            oldHeader = webUrl.substr(p1,p2-p1);
        } else {
            oldHeader = webUrl.substr(p1);
        }
        return oldHeader + `({"adGetv":{"br":0,"id":10201,"merged":1,"oid2url":0},"adList":{"IsNeedTime":"0","has_scene_info":"1","item":[]},"adLoc":{"adFlag":0,"add":0,"aid":"100211","aidInAdtype":[{"adid":"100211","adtype":"WK"},{"adid":"100211","adtype":"WL"}],"breakTime":null,"breaks":"0.0","duration":0,"iCheckLogin":0,"iCheckUser":0,"iUserTypeReq":-1,"iVipInfoRsp":1,"isvip":1,"mult":null,"oaid":"1","rfid":"","tm":0,"tpid":2,"tvAdFreeFlag":0,"vad":null,"vid":""}}` + ")"; 
    }
    return false;
}

/* 普通版拦截广告，需要裁剪数据。
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
        return text;
    }
}
*/

// 核心
function Process_QQVIDEO(request,webUrl){
    if(REGS_QQVIDEO.ADBlock[0].matches(webUrl)) {
        return ["text/json","utf-8",Block_VQQ_V2(webUrl)];
    } 
    else if(REGS_QQVIDEO.ADBlock[1].matches(webUrl)) {
        return ["","",""];
    }
    else if(REGS_QQVIDEO.msite[0].matches(webUrl) ) {
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_QQVIDEO.msite[1].replace(client,"");
            html = REGS_QQVIDEO.msite[2].replace(html,"registerOpenApp:function($1){var t=$1.target.hasAttribute('open-app'),n=\\$($1.target).parents('[open-app]').length;if(t||n){var r=t?\\$($1.target):\\$($1.target).parents('[open-app]'),a=r.attr('data-cid'),c=r.attr('data-vid'),s=r.attr('data-lid');var tourl='/play.html?cid='+a+'&vid='+c;if(s!=undefined)tourl+='&lid='+s;window.location.href=tourl;}},");
            html = REGS_QQVIDEO.msite[3].replace(html,`this.clientData.gameData=[];if(this.clientData.playData.video.pay_status==7){alert("该影片为单独付费类型不在VIP范围内(请在热播期后再来或单独购买)");}this.clientData.payInfo.c_status=8;this.clientData.playData.video.pay_status=8;this.clientData.playData.payStatus=1;this.clientData&&(px&&console.log(this.clientData)`);
            html = REGS_QQVIDEO.msite[4].replace(html,`this.config.autoplay=true;this.config.isShowDurationLimit=false;this.player=new Txplayer(this.config)`); 
            return ["text/javascript","utf-8",html];
        }
    } 
    else if(REGS_QQVIDEO.h5htmlframe[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_QQVIDEO.h5htmlframe[1].replace(client,"<txpdiv class=\"txp_label\">1080</txpdiv>");
            html = REGS_QQVIDEO.h5htmlframe[2].replace(html,"");
            html = REGS_QQVIDEO.h5htmlframe[3].replace(html,"$0$1=$1.parentNode.parentNode;");
            html = REGS_QQVIDEO.h5htmlframe[4].replace(html,"$0$1=$1.parentNode.parentNode;if(document.exitFullscreen){document.exitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}");
            return ["text/javascript","utf-8",html];
        }
    }
    else if(REGS_QQVIDEO.h5defn[0].matches(webUrl)){
        var client = new Http(webUrl,"get").run();
        if(client){
            var html = REGS_QQVIDEO.h5defn[1].replace(client,"toggleFullScreen:function(){this.context.dataset.isWindowFullscreen?this.exitWindowFullscreen():this.enterWindowFullscreen();},requestFullScreen:function(a,b,c){b===\"enter\"?this.context.msg.broadcast(\"videoRequestFullScreen\"):this.context.msg.broadcast(\"videoExitFullScreen\");},isFullScreen:function(){var a=document.mozFullScreen||document.webkitIsFullScreen;return a},exitWindowFullscreen:function(a){var b=this;if(window.qgjs)window.qgjs.setScreenOrientation(false);b.dataset.\\$fullscreenBtn.attr(\"data-status\",false),b.context.dataset.isWindowFullscreen=false,a||b.requestFullScreen(null,\"exit\")},enterWindowFullscreen:function(a){var b=this;if(window.qgjs)window.qgjs.setScreenOrientation(true);b.dataset.\\$fullscreenBtn.attr(\"data-status\",true),b.context.dataset.isWindowFullscreen=true,a||b.requestFullScreen(null,\"enter\")},enterBrowserFullscreen:function(){this.enterWindowFullscreen();},exitBrowserFullscreen:function(a){this.exitWindowFullscreen();},addEventListerner:function(){var a=this;this.dataset.\\$fullscreenBtn.on(Txplayer.dataset.clickEventName,function(){a.toggleFullScreen()}),Txplayer.\\$(document).on(\"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange\",function(b){a.context.dataset.isWindowFullscreen=a.isFullScreen();}),this.context.msg.on(\"videoEnd\",function(b){if(a.context.dataset.isWindowFullscreen)a.exitWindowFullscreen();})}");
            return ["text/javascript","utf-8",html];
        }
    }
    else if(webUrl.startsWith("https://puui.qpic.cn/vupload/0/1570868832052")) {
        //这是一个推荐列表的VIP图标，隐藏掉
        return ["","",""]
    } 
    return false;
}

//--------------------------------------------------------------------
// 处理优酷数据
//--------------------------------------------------------------------
var YOUKU_REG = {
    BlockJS : [
        app.CReg(".*gm.mmstat.com.*"),
        app.CReg(".*yksmartbanner.*?\.js"),
    ],
    PageChunk : [
        app.CReg(".*ykhomepage.*/Page.chunk.js"),
        app.CReg(".*?h5-playpage.*?/Page.chunk.js$"),
    ],
    h5phoneplayer : [
        app.CReg(".*h5phoneplayer.min.js"),
        app.CReg("\\w\\.default.check\\((\\w)"),
        app.CReg("getJsonp:function.*?(?=translate)"),
        app.CReg("(?<=key:\"_initControlInfo\",value:function\\(\\)\\{).*?(?=\\}\\},)")
    ],
    AD:[
        app.CReg("\.ad-banner-wrapper\\{.*?\\}"),
        app.CReg("\.h5-detail-ad\\{.*?\\}"),
        app.CReg("\.Corner-container\\{.*?\\}")
    ]
}
//处理优酷广告
function Block_YOUKU(json){  
    var emptyAd = json+`({"VER":"3.0","REQID":"0","SKIP":1,"VAL":[],"P":7})`;
    return emptyAd;
}
function Process_YOUKU(request,webUrl){
    //优酷广告BLOCK
    if(YOUKU_REG.BlockJS[0].matches(webUrl)) {
        return ["","",""];
    } else if(YOUKU_REG.BlockJS[1].matches(webUrl)) {
        return ["","",""];
    } else if(webUrl.endsWith("yksmartbanner.min.js")) {
        return ["","",""];
    }     
    else if(YOUKU_REG.PageChunk[1].matches(webUrl)){ 
       return [request,GetScriptUrl("youku/play_page/Page.chunk.js")]
    } else if(webUrl.indexOf("mf.atm.youku.com/mf") >= 0 ){
        var p1 = webUrl.indexOf("callback=");
        if( p1 >= 0 ){
            var callback = webUrl.slice(p1+9);
            return ["application/javascript","utf-8",Block_YOUKU(callback)]
        }
    } else if(YOUKU_REG.h5phoneplayer[0].matches(webUrl)){ 
        return [request,GetScriptUrl("youku/youku-player.min.js")]
    } 
    else if(webUrl.endsWith("Page.chunk.css")){
        //去广告CSS
        var client = new Http(webUrl,"get").run();
        if(client){
            //首页去广告
            var html = YOUKU_REG.AD[0].replace(client,".ad-banner-wrapper{display:none}");
            return ["text/css","utf-8",html];
        }  
    } 
    else if(webUrl.endsWith("Page.css")){
        //去广告CSS
        var client = new Http(webUrl,"get").run();
        if(client){
            //播放页修改
            var html = YOUKU_REG.AD[1].replace(client,".h5-detail-ad{display:none}");
            html = YOUKU_REG.AD[2].replace(html,".Corner-container{display:none}");
            return ["text/css","utf-8",html];
        }  
    }
    else if(webUrl.indexOf("ykimg.alicdn.com/develop/image")>=0){
        return ["","",""]
    }
    return false;
}

//--------------------------------------------------------------------
// 处理默认数据
//--------------------------------------------------------------------
var REGS_AD = [
    app.CReg(".*/vipgg/.*?")
]
function Process_Default(webUrl){
    if(REGS_AD[0].matches(webUrl)){
        return ["","",""];
    }
    return false;
}

//参数1:webView是不靠谱的。可能会为空在ServiceWorkder线程中
//拦截一个请求、JS文件等。支持拦截ServiceWorker中的请求
function OnInterceptRequest(request,webUrl,isFromMainFrame) {
    //是视频网站要检查
    if(NeedInterceptCheckVideo){
        if(CurrentSite==1) {
            return Process_IQY(request,webUrl);
        } else if (CurrentSite==2){
            return Process_QQVIDEO(request,webUrl);
        } else if (CurrentSite==3){
            return Process_YOUKU(request,webUrl);
        } else if (CurrentSite == 5 && !isFromMainFrame){
            return Process_Default(webUrl);
        }
    }
    return false;
}

// 进入一个新的网站
function OnUrlChange(url){
    if(url.indexOf("iqiyi.com")>=0){
        CurrentSite = 1;
        app.SetInterceptResource(false);
    } else if(url.indexOf("v.qq.com")>=0){
        CurrentSite = 2;
        app.SetInterceptResource(false);
    } else if(url.indexOf("youku.com")>=0){
        CurrentSite = 3;
        app.SetInterceptResource(false);
    } else {
        CurrentSite = 5;
        app.SetInterceptResource(true);
    }
    return true
}