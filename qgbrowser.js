var domainTest = new RegExp("https?:\/\/(www.)?"+window.location.host,"i");
var clearAd = {
    clear_ad_from_hack:function(){
        //删除一些恶意软件的ID
        var ids = ["_blank"];
        for(var i = 0; i < ids.length; i++){
            var ele = document.getElementById(ids[i])
            if(ele!=null){
                ele.remove();
                document.body.innerHTML="<h1>茄瓜浏览器提醒您:该网站存在恶意代码已被阻止访问。若该网站有自动弹出下载APK。请勿安装谨防上当受骗。</h1>"
            }
        }
    },
    //基于规则的去广告
    clear_ad_from_ai: function() {   
        var iframes = document.getElementsByTagName("iframe");
        for( var i = iframes.length-1; i >=0;i--){
            this.check_iframe(iframes[i]);
        } 
    },
    //删除父节节点
    delParent(ele){
        if(!ele) return;
        var parent = null;
        do{
            if( ele.childElementCount == 0 ){
                parent = ele.parentElement;
                ele.remove();
                ele = parent;
            } else {
                ele = null;
            }
        }while(ele)
    },
    /*清理一些跟踪型的广告Cookie*/
    find_cookies: function(){
        var cookie = window.qgjs.getCookie(window.location.host);
        if(cookie){
            if(cookie.indexOf("kt_tcookie")>=0){
                this.clear_current_host_cookies();
            }
        }
    },
    /*删除当前网站的COOKIE*/
    clear_current_host_cookies:function(){
        var currentCookie = window.qgjs.getCookie(window.location.host);
        if(currentCookie!=null){
            var arrCookie=currentCookie.split("; "); 
            for(var i=0;i <arrCookie.length;i++)
            {
                var arr=arrCookie[i].split("=");
                if(arr.length>0) this.del_cookie(arr[0]);	
            }
        }
    },
    /*删除一个条COOKIE，因权限问题需使用APP的接口删除*/
    del_cookie:function(name){
        var domain = window.location.host;
        var value =  name + "=0; expires=Wed, 31 Dec 2000 23:59:59 GMT";
        window.qgjs.setCookie(domain,value);
        window.qgjs.setCookie("."+domain,value);
        window.qgjs.setCookie(domain.replace("www",""), value);
    },
    clear_ad: function() {
        this.clear_ad_from_hack();
        this.clear_ad_from_ai();
    },
    check_iframe:function(ele){
        var eleParent = ele.parentElement;
        var fenshu = 0.0;
        //宽比,最高1分
        var wF = (ele.clientWidth / document.body.clientWidth);
        wF = Math.min(1,wF);
        //小框特别加分0.5分
        if(ele.clientWidth <= 400)  wF += 0.5;
        fenshu += wF;
    
        //高比,最高1分
        var hF = (ele.clientHeight / document.body.clientHeight)
        hF = Math.min(1,hF);
        //高度大于屏幕一半的时候减分
        if( hF > 0.5 ) hF = hF * -1;
        else{
            //小框特别照顾0.5分
            if( ele.clientHeight <= 400 && ele.clientHeight >=80 )  hF += 0.5;
        }
        if(eleParent != null){
            if( ele.clientWidth > eleParent.clientWidth) {
                hF = Math.abs(hF) + 0.2;
            }
            if( ele.clientHeight > eleParent.clientHeight ){
                hF = Math.abs(hF) + 0.2;
            }
        } 
        fenshu += hF;
        //非本域名下的加1分
        if( ele.src != null ){
            if(domainTest.test(ele.src)){
                fenshu -= 2;
            } else {
                fenshu += 0.5;
            }
        }
        if( fenshu >= 1.2 ){
            var p1 = ele.parentElement;
            ele.remove();
            this.delParent(p1);
        }   
    }
}

//开始删除广告
function begindeletead(){
    clearAd.clear_ad();
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(e) {
            if(e.type == "childList"){
                //遍历新创建的节点
                e.addedNodes.forEach( function(newNode){
                    //清理IFRAME
                    if(newNode.nodeName=="IFRAME") clearAd.check_iframe(newNode);
                });
            }
        });
    });
    mutationObserver.observe( document.documentElement,{
        childList:true,
        subtree:true,
    })
}

//对象隐藏时播放视频
function objectIsHide(ele,video) {
    for( var i = 0; i < ele.length; i++ ){  
        var node = ele[i];
        if( node.clientHeight > 0 && video.paused ) {
            video.play();
            break;         
        }
    }
}

//恢复视频状态,在浏览器里打开APP了标头了会调用这个方法
function videosite(){   
    if( window.location.host.concat("iqiyi") ){
        var video = document.getElementById('video');
        setInterval(function(){
            var pauseDialog = document.getElementsByClassName("m-player-tip");
            var playerLoading = document.getElementsByClassName("c-player-loading");
            objectIsHide(pauseDialog,video);
            objectIsHide(playerLoading,video);

            //检查是否为单独付费影片
            var ele = document.getElementsByClassName("c-btn-viplink");
            if( ele != null && ele.length > 0 ) {
                for( var i = 0; i < ele.length; i++ ){
                    var node = ele[i];
                    if(node.textContent.indexOf("购买本片") >= 0 && node.id != "firstts" && node.style.display!="none"){
                        node.id = "firstts";
                        alert("该影片为单次付费购买类型，不在VIP权限范围内，无法观看。");
                    }
                }
            }
        },300);      
    }
}

//初始化
if( !document.getElementById("qginit") ){
    var newEle = document.createElement("script");
    newEle.id = "qginit";
    document.body.appendChild(newEle);
    //清除广告
    if(window.qgjs){
        clearAd.find_cookies(); 
        if( window.qgjs.adenabled()){
            begindeletead();
        }
        videosite();
    } else {
        begindeletead();
    }
}
