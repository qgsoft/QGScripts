(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appcapd"],{"5dff":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ChannelLoad",{attrs:{cname:"yingxun"}},[e.cardMap?a("div",[e.cardMap[1]?a("ChannelCarousel",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_yingxun_jiaodiantu",expression:"'180226_yingxun_jiaodiantu'"}],attrs:{videos:e.cardMap[1].videos}}):e._e(),a("ChannelYingxunTicket",{attrs:{"more-text-login":e.cardMap[2]&&e.cardMap[2].tag,"movie-list":[e.cardMap[3]||{},e.cardMap[4]||{},e.cardMap[5]||{}],"is-login":e.isLogin}}),a("ChannelTopCommon",{ref:"tab",staticClass:"m-box",attrs:{index:e.currentIndex,fix:!1,"tab-class":"m-tab-nav m-tab-nav-line m-tab-nav-film "+e.tabFixed,"position-memory":!1},on:{selectedIndex:e.tabChange}},[e.cardMap[6]?a("ChannelYingxunFeed",{key:1,attrs:{title:e.cardMap[6].cardName,"init-videos":e.cardMap[6].videos,type:0,tabpingback:"180226_tab_yugao"}}):e._e(),e.cardMap[7]?a("ChannelYingxunFeed",{key:2,attrs:{title:e.cardMap[7].cardName,"init-videos":e.cardMap[7].videos,type:1,tabpingback:"180226_tab_pianhua"}}):e._e()],1),a("PlayVideoRelated",{attrs:{"play-style":"top: -1000px;left: 0px;width: 100%;z-index: 1000;position: absolute;"}}),a("BackTop")],1):e._e()])},n=[],s=(a("7f7f"),a("fe3a")),r=a("e178"),o=a("17b0"),c=a("9ec9"),l=a("bd2b"),u=a("d83d"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-box"},[a("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"180226_yingxun_xiangkan",expression:"'180226_yingxun_xiangkan'"}],staticClass:"m-box-items m-box-items-full"},[a("section",{staticClass:"m-title noborderT"},[a("i",{staticClass:"c-channelicon c-channel-look"}),a("h2",{staticClass:"c-title-des"},[e._v("我的想看")]),a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_yingxun_xiangkan",expression:"'180226_yingxun_xiangkan'"}],staticClass:"c-link",attrs:{href:e.moreLink}},[e._v("\n        "+e._s(e.isLogin?e.moreTextLogin:"登录查看")+"\n        "),a("i",{staticClass:"c-glyphicon c-glyphicon-arrowRight"})])])]),e.movieList.length?a("ChannelTopCommon",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"180226_yingpiao",expression:"'180226_yingpiao'"}],ref:"tab",attrs:{index:e.currentIndex,fix:!1,"tab-class":"m-tab-nav m-tab-nav-line m-tab-nav-film","position-memory":!1},on:{selectedIndex:function(t){return e.currentIndex=t}}},e._l(e.movieList,function(e,t){return a("ChannelYingxunMovieSlide",{key:e.order,staticClass:"m-box-items m-box-items-full",attrs:{title:e.cardName,tabpingback:"180226_yingpiao_"+(t+1),itempingback:"180226_yingpiao_"+(t+1)+"ziliao",card:e,"hide-sub-title":!0}})}),1):e._e(),a("div",{staticClass:"m-box-items m-box-items-full"},[a("section",{staticClass:"m-linkMore"},[a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_yingpiao_all",expression:"'180226_yingpiao_all'"}],staticClass:"m-link",attrs:{href:"https://piao.iqiyi.com/f/h5/v1/static/movie/list?src=h5","glue-node":"viewMore"}},[e._v("查看更多"),a("i",{staticClass:"c-glyphicon c-glyphicon-more"})])])])],1)},p=[],h=(a("ac6a"),a("f3e2"),a("0cd8"),a("96cf"),a("3b8d")),m=a("3201"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-box-items m-box-items-full"},[a("AuraVideoList",e._b({directives:[{name:"scroll",rawName:"v-scroll.scrollX",value:{eventPassthrough:"vertical"},expression:"{eventPassthrough: 'vertical'}",modifiers:{scrollX:!0}}],staticClass:"m-pic-vertical m-pic-filmNew-vertical m-pic-vertical-sliding m-sliding",attrs:{videos:e.card.videos},scopedSlots:e._u([{key:"bottom",fn:function(t){var i=t.video;return[a("div",{staticClass:"piclist-btn"},[e.ticketBuyStatusMapText[i.ticketBuyStatus]?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_yingpiao_buy",expression:"'180226_yingpiao_buy'"}],staticClass:"c-green-link",attrs:{href:i.moivePageUrl+"&gateway=h5:h5home01"}},[e._v("\n          "+e._s(e.ticketBuyStatusMapText[i.ticketBuyStatus])+"\n        ")]):a("SubVideo",{staticClass:"c-gray-link",attrs:{video:i,addpingback:"180226_yingpiao_order",cancelpingback:"180226_yingpiao_cancle"}})],1)]}}])},"AuraVideoList",e.$attrs,!1))],1)},g=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.tag,{tag:"a",class:e.video.subVideo&&e.video.subVideo.isSubed?"selected":"",attrs:{href:"javascript:void(0)"},on:{click:function(t){return t.stopPropagation(),e.onSubClick(e.video)}}},[e._t("default",[a("i",{staticClass:"c-look-icon"}),e._v(e._s(e.video.subVideo&&e.video.subVideo.isSubed?"已想看":"想看")+"\n  ")],{isSubed:e.video.subVideo&&e.video.subVideo.isSubed})],2)},b=[],_=a("6f18"),x=a("b2e7"),k=a("5321"),y={name:"SubVideo",props:{video:{type:Object,default:function(){return{subVideo:{isSubed:!1,count:0}}}},tag:{type:String,default:"a"},addpingback:{type:String,default:""},cancelpingback:{type:String,default:""}},methods:{onSubClick:function(e){this.$emit("click"),Object(x["M"])()?this.toggleSub(e):window.location.href="/user.html"},toggleSub:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.subVideo.isSubed){e.next=7;break}return e.next=3,Object(_["c"])({subKeys:t.qipuId});case 3:a=e.sent,a&&a.success&&(this.sendRseat(this.cancelpingback),t.subVideo.isSubed=!1),e.next=11;break;case 7:return e.next=9,Object(_["b"])({subKeys:t.qipuId});case 9:i=e.sent,i&&i.success&&(this.sendRseat(this.addpingback),t.subVideo.isSubed=!0);case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),sendRseat:function(e){e&&Object(k["g"])({rt:this.tag,rseat:e})}}},C=y,w=a("2877"),S=Object(w["a"])(C,v,b,!1,null,null,null),T=S.exports,V=a("96d5"),M={name:"ChannelYingxunMovieSlide",components:{SubVideo:T},props:{card:{type:Object,default:function(){return{}}}},data:function(){return{ticketBuyStatusMapText:V["a"]}}},j=M,L=Object(w["a"])(j,f,g,!1,null,null,null),N=L.exports,O=a("dfb9"),$=a("8296"),I={name:"ChannelYingxunTicket",components:{ChannelTopCommon:m["a"],ChannelYingxunMovieSlide:N},mixins:[O["a"]],props:{moreTextLogin:{type:String,default:""},movieList:{type:Array,default:function(){return[]}},isLogin:{type:Boolean,default:!1}},data:function(){return{currentIndex:0,moreLink:"/m5/yingxun/wantSee.html"}},mounted:function(){if(!this.isLogin){var e="".concat(location.protocol,"//").concat(location.host).concat(this.moreLink);this.moreLink="/user.html?redirect_url=".concat(encodeURIComponent(e))}this.$nextTick(Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.movieList.reduce(function(e,t){return e.concat(t.videos)},[]),!t.length){e.next=5;break}return e.next=4,this.getSubVideo(t);case 4:this.movieList[2]&&this.updateRightCorner(this.movieList[2].videos);case 5:case"end":return e.stop()}},e,this)})))},methods:{updateRightCorner:function(e){e&&e.forEach(function(e){e.subVideo&&e.subVideo.count>0&&(e.lowerRightCorner=Object($["p"])(e.subVideo.count)+"人想看")})}}},P=I,R=Object(w["a"])(P,d,p,!1,null,null,null),A=R.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("FeedBottom",e._b({attrs:{"load-complete":e.complete,callback:e.load,feature:["subVideo"],block:"180226_feed"},scopedSlots:e._u([{key:"infobar",fn:function(t){var i=t.video;return[a("div",{staticClass:"m-box-items  m-box-items-full"},[a("div",{staticClass:"m-play-entrance"},[a("ul",{staticClass:"list-items"},[i.fatherVideo?a("li",[a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_feed_ziliao",expression:"'180226_feed_ziliao'"}],staticClass:"link-item",attrs:{href:i.fatherVideo.filmPageUrl,title:i.fatherVideo.mainTitle||i.fatherVideo.title||i.fatherVideo.subTitle||""}},[a("div",{staticClass:"img",style:"background-image:url("+i.fatherVideo.imageUrl+")"}),a("div",{staticClass:"info"},[a("div",{staticClass:"c-title"},[e._v(e._s(i.fatherVideo.title))]),a("div",{staticClass:"c-des"},[a("span",{staticClass:"c-score"},[e._v(e._s(i.fatherVideo.score)+"分")])]),a("div",{staticClass:"c-des"},[e._l(i.fatherVideo.category,function(t){return a("span",{key:t,staticClass:"c-tag"},[e._v(e._s(t))])}),a("span",{staticClass:"c-tag"},[e._v(e._s(i.fatherVideo.region))])],2)])]),i.fatherVideo.online?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_feed_play",expression:"'180226_feed_play'"}],staticClass:"c-green-link c-large-link",attrs:{href:i.fatherVideo.pageUrl,title:i.fatherVideo.mainTitle||i.fatherVideo.title||i.fatherVideo.subTitle||""}},[e._v("看完整版电影")]):a("div",[a("SubVideo",{staticClass:"c-gray-link",attrs:{video:i,addpingback:"180226_feed_order",cancelpingback:"180226_feed_cancel"}}),i.fatherVideo.ticketBuyStatus&&4!=i.fatherVideo.ticketBuyStatus?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"180226_feed_buy",expression:"'180226_feed_buy'"}],staticClass:"c-green-link",attrs:{href:i.fatherVideo.moviePageUrl+"&gateway=h5:h5home01"}},[e._v("\n                "+e._s(e.ticketBuyStatusMapText[i.fatherVideo.ticketBuyStatus])+"\n              ")]):e._e()],1)]):e._e()])])])]}}])},"FeedBottom",e.$attrs,!1))},U=[],E=(a("c5f6"),a("f933")),F={name:"ChannelYingxunFeed",components:{FeedBottom:E["a"],SubVideo:T},props:{type:{type:Number,default:0}},data:function(){return{complete:!1,page:1,emptyTimes:0,ticketBuyStatusMapText:V["a"]}},methods:{load:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.type,a=this.page?this.page+1:1,e.next=4,Object(V["g"])({type:t,page:a});case 4:if(i=e.sent,i){e.next=7;break}return e.abrupt("return");case 7:return this.page=a,this.emptyTimes=i.videos&&i.videos.length?0:++this.emptyTimes,this.complete=this.emptyTimes>=3||i&&!i.remaining,e.abrupt("return",i.videos);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},Y=F,z=Object(w["a"])(Y,B,U,!1,null,null,null),H=z.exports,q=a("b75f"),D=a("9e5e"),X=a("4e77"),G=a("2f62"),J="yingxun",K={name:"ChannelYingxun",components:{ChannelLoad:l["a"],ChannelCarousel:u["a"],ChannelYingxunTicket:A,ChannelTopCommon:m["a"],ChannelYingxunFeed:H,PlayVideoRelated:q["a"],BackTop:D["a"]},asyncData:function(e){var t=e.store;e.route,e.res;t.registerModule(J,r["a"],{preserveState:t.state[J]}),t.registerModule("play",o["a"],{preserveState:t.state.play}),t.commit("setIsLogin")},mixins:[s["a"],c["a"]],style:["base","channel"],title:"影讯频道-影院热映-即将上映电影|爱奇艺",head:function(){return this.channelSeo({cname:J,keywords:"影讯,热门电影快讯,热映电影,高清在线电影,高清电影下载,高清电影。",appid:2104655,description:"爱奇艺影讯频道拥有热门的电影影讯，热映电影、即将上映电影、电影预告、电影精彩片段在线观看。热门大片预告，电影精彩片段抢先看。"})},data:function(){return{name:J,currentIndex:0,tabFixed:"",appCid:8202}},computed:Object(G["e"])(["headerHeight","isLogin"]),mounted:function(){Object(X["e"])(this.scrollHide)},destroyed:function(){Object(X["h"])(this.scrollHide),this.$store.unregisterModule(this.name),this.$store.unregisterModule("play")},methods:{tabChange:function(e){this.currentIndex=e,this.$qiyiPlayer&&(this.$qiyiPlayer.pause(),this.$qiyiPlayer.hide())},scrollHide:function(e){this.tabFixed=window.scrollY>this.$refs.tab.$el.offsetTop-this.headerHeight?"tap-fixed":""}}},W=K,Q=Object(w["a"])(W,i,n,!1,null,null,null);t["default"]=Q.exports},b305:function(e,t,a){"use strict";a.r(t);var i,n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ChannelPage",{attrs:{cname:e.name,"scroll-hide-fix":!1},scopedSlots:e._u([{key:"default",fn:function(){return[a("ChannelAipindaoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"71128_aipindao_tuijian",expression:"'71128_aipindao_tuijian'"}],attrs:{"card-map":e.cardMap}})]},proxy:!0},{key:"channelSearch",fn:function(){return[a("ChannelAipindaoSearch",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"71128_aipindao_shaixuan",expression:"'71128_aipindao_shaixuan'"}],attrs:{icon:"c-tabNav-screen",title:"筛选"}})]},proxy:!0}])}),a("BackTop"),a("GlobalToast")],1)},r=[],o=(a("7f7f"),a("e178")),c=a("17b0"),l=a("fe3a"),u=a("9ec9"),d=a("95ac"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("FeedScroll",{ref:"scroll",staticClass:"hotSpot-wrap",staticStyle:{top:"1.24rem"},attrs:{"init-list":e.cardMap[2]&&e.cardMap[2].videos,"pull-down-refresh":{threshold:50,stop:0},"pull-up-load":{threshold:50,stop:0},callback:e.load,"inner-class":"hotSpot-inner","empty-tip":!1,"tip-delay":2e3},scopedSlots:e._u([{key:"pulldown",fn:function(t){var i=t.showPullDownLoading,n=t.error,s=t.complete,r=t.loadList;return[a("section",{staticClass:"m-hotSpot-update"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i,expression:"showPullDownLoading"}],staticClass:"inner"},[a("i",{staticClass:"update-icon"}),a("span",{staticClass:"c-info"},[e._v("正在加载")])]),a("section",{directives:[{name:"show",rawName:"v-show",value:!i&&n,expression:"!showPullDownLoading && error"}],staticClass:"m-hotSpot-bannerTip",on:{click:function(e){return r(!0)}}},[a("i",{staticClass:"c-glyphicon c-glyphicon-refresh"}),e._v("数据加载失败，请"),a("a",{staticClass:"c-link",attrs:{href:"javascript:void(0)"}},[e._v("下拉刷新")]),e._v("重试\n      ")]),a("section",{directives:[{name:"show",rawName:"v-show",value:!i&&s,expression:"!showPullDownLoading && complete"}],staticClass:"m-hotSpot-update"},[a("div",{staticClass:"inner"},[a("span",{staticClass:"c-info"},[e._v("没有更多了")])])])])]}},{key:"top",fn:function(){return[e.cardMap[1]?a("div",{staticClass:"m-box"},[a("div",{staticClass:"m-box-items m-box-items-full"},[a("AuraCardTitle",{staticClass:"noborderT",attrs:{title:e.cardMap[1].cardName}}),a("AuraVideoList",{directives:[{name:"scroll",rawName:"v-scroll.scrollX",value:{eventPassthrough:"vertical"},expression:"{eventPassthrough: 'vertical'}",modifiers:{scrollX:!0}},{name:"show-pingback",rawName:"v-show-pingback",value:"71128_aipindao_feed",expression:"'71128_aipindao_feed'"},{name:"pingback",rawName:"v-pingback",value:"71128_aipindao_feed_play",expression:"'71128_aipindao_feed_play'"}],staticClass:"m-pic-vertical m-pic-vertical-sliding m-sliding",attrs:{videos:e.cardMap[1].videos,"cur-qipu-id":-1}})],1)]):e._e()]},proxy:!0},{key:"listItem",fn:function(t){var i=t.video;return[a("div",{staticClass:"m-box"},[a("div",{staticClass:"m-box-items m-box-items-full"},[a("PlayerPlaceholder",{attrs:{video:i,"play-options":{action:e.isUp?"prepend":"append",group:e.timestamp}}}),a("section",{staticClass:"m-home-sourceHandle"},[i.userInfo?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"71128_aipindao_feed_user",expression:"'71128_aipindao_feed_user'"}],staticClass:"source-link",attrs:{href:i.userInfo.profileUrl}},[a("span",{staticClass:"c-photo",style:"background-image:url("+i.userInfo.avatar+");"}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"c-name"},[e._v(e._s(i.userInfo.userName?i.userInfo.userName:"爱奇艺用户"))]),a("i",{staticClass:"icon-home-i"})])])]):e._e(),a("div",{staticClass:"handle showHandle"},[i.controlInfo&&i.controlInfo.extendbarComment?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"71128_aipindao_feed_comment",expression:"'71128_aipindao_feed_comment'"}],staticClass:"c-link",attrs:{href:i.pageUrl,title:i.mainTitle||i.title||i.subTitle||""}},[a("i",{staticClass:"c-player-handle c-handle-comment"}),a("i",{staticClass:"c-num"},[e._v(e._s(i.comment))])]):e._e(),i.controlInfo&&i.controlInfo.like?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"71128_aipindao_feed_like",expression:"'71128_aipindao_feed_like'"}],class:i.isAgree?"selected c-link":"c-link",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.handleAgree(i)}}},[a("i",{staticClass:"c-player-handle c-handle-like"}),a("i",{staticClass:"c-num"},[e._v(e._s(0===i.like?"喜欢":i.like))])]):e._e()])])],1)])]}},{key:"extra",fn:function(){return[a("PlayVideoRelated",{attrs:{"play-style":"top: -1000px;left: 0px;width: 100%;z-index: 1000;position: absolute;"}})]},proxy:!0}])})},h=[],m=a("0a0d"),f=a.n(m),g=(a("96cf"),a("3b8d")),v=a("f2ae"),b=a("9ba8"),_=a("b75f"),x=a("00b9"),k=a("96d5"),y=a("b2e7"),C={name:"ChannelAipindaoList",components:{FeedScroll:v["a"],PlayerPlaceholder:b["a"],PlayVideoRelated:_["a"]},props:{cardMap:{type:Object,default:function(){return{1:[],2:[]}}}},data:function(){return{page:1,isUp:!1,timestamp:0,isLogin:!1}},mounted:function(){this.isLogin=Object(y["M"])()},methods:{handleAgree:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLogin){e.next=3;break}return window.location.href="/user.html",e.abrupt("return");case 3:return a=t.isAgree,e.next=6,Object(x["a"])(t);case 6:i=e.sent,"A00000"===i.data.code&&(isNaN(+t.like)&&(t.like=0),t.like=+t.like+(a?-1:1),t.isAgree=!a);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),load:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isUp=t,e.next=3,Object(k["d"])({page:this.page+1,pageUrl:window.location.href}).catch(function(){return!1});case 3:return a=e.sent,a&&a.length&&(this.page++,this.timestamp=f()()),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},w=C,S=a("2877"),T=Object(S["a"])(w,p,h,!1,null,null,null),V=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TabScroll",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"71128_aipindao_shaixuan",expression:"'71128_aipindao_shaixuan'"}]},e._l(e.tags,function(t,i){return a("div",{key:i,staticClass:"m-box",attrs:{title:t.title}},[a("div",{staticClass:"m-box-items m-box-items-full"},[a("section",{staticClass:"m-home-subscibe"},[a("SubList",{attrs:{users:e.data[t.tagset],pingback:{itemPingback:"71128_shaixuan_user"}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.user;return[a("div",{staticClass:"subscibe-operation"},[2===i.friend.status?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"71128_shaixuan_subscribe",expression:"'71128_shaixuan_subscribe'"}],staticClass:"handle",on:{click:function(t){return e.onAdd(i)}}},[a("i",{staticClass:"c-glyphicon c-glyphicon-guideClose"}),e._v("关注")]):e._e(),1===i.friend.status?a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"71128_shaixuan_circle",expression:"'71128_shaixuan_circle'"}],staticClass:"handle subscribed",attrs:{href:"/u/"+i.uid}},[e._v("去圈子")]):e._e()])]}}],null,!0)})],1)]),a("LoadBottom",{attrs:{load:!e.data[t.tagset]||!e.data[t.tagset].length,callback:e.load.bind(this,t.tagset),"load-complete":e.complete[t.tagset]}}),a("AuraFooter")],1)}),0)},j=[],L=(a("d92a"),a("6d67"),a("5176")),N=a.n(L),O=a("1fba"),$={name:"TabScroll",data:function(){return{selectIndex:0,moreSelected:!1}},mounted:function(){this.$nextTick(function(){this.scroll=new O["a"](this.$refs.wrapper,N()({scrollX:!0,eventPassthrough:!1,preventDefault:!0,click:!0,HWCompositing:!1,useTransition:!1})),this.scrollToElement()})},methods:{scrollToElement:function(){var e=this.$refs.wrapper.childNodes[0].childNodes[this.selectIndex];this.scroll&&e&&this.scroll.scrollToElement(e,0,!0,!0)},selectTab:function(e){this.selectIndex=e,this.scrollToElement(),this.$emit("tabClick",e)},toggleMore:function(){this.moreSelected=!this.moreSelected}},render:function(e){var t=this,a=this.$slots.default,i=a.map(function(a,i){return e("li",[e("a",{attrs:{href:"javascript:void(0);"},class:["c-linkChannel",i===t.selectIndex&&"selected"],on:{click:t.selectTab.bind(t,i)}},[a.data.attrs.title])])}),n=this.$slots.default[this.selectIndex];return e("div",[e("div",{class:"m-box-items m-box-items-full"},[e("div",{class:"m-dm-tapHead"},[e("section",{class:"g-nav-head bgfff m-nav-head-home"},[e("div",{ref:"wrapper",class:"m-nav-head m-sliding"},[e("ul",{class:"m-nav-head-list m-sliding-list",style:"-webkit-transform: translate(0px, 0px) scale(1); transform: translate(0px, 0px) scale(1);"},[i])]),e("div",{class:["nav-more",this.moreSelected&&"selected"],on:{click:this.toggleMore}},[e("a",{class:"c-menu-linkmore",attrs:{href:"javascript:void(0);"}},[e("i",{class:"c-glyphicon c-glyphicon-arrowDown"})]),e("div",{class:"m-nav-unfold"},[e("ul",{class:"nav-list"},[i])])])])])]),e("keep-alive",[n])])}},I=$,P=Object(S["a"])(I,i,n,!1,null,null,null),R=P.exports,A=a("da1f"),B=a("657e"),U=a("1533"),E={name:"ChannelAipindaoSearch",components:{TabScroll:R,LoadBottom:A["a"],SubList:B["a"]},data:function(){return{tags:[{tagset:"recommend",title:"推荐"},{tagset:"hot",title:"热门"},{tagset:"funny",title:"搞笑"},{tagset:"entertainment",title:"娱乐"},{tagset:"variety",title:"综艺"},{tagset:"game",title:"游戏"},{tagset:"beauty",title:"美女"},{tagset:"information",title:"资讯"},{tagset:"child",title:"少儿"},{tagset:"fitness",title:"健身"},{tagset:"life",title:"生活"},{tagset:"network",title:"网剧"},{tagset:"original",title:"原创"},{tagset:"fzone",title:"拍客"},{tagset:"cartoon",title:"动漫"},{tagset:"sport",title:"体育"},{tagset:"fashion",title:"时尚"},{tagset:"car",title:"汽车"},{tagset:"tour",title:"旅游"},{tagset:"tech",title:"科技"},{tagset:"military",title:"军事"},{tagset:"emotion",title:"情感"},{tagset:"food",title:"美食"},{tagset:"constellation",title:"命理"},{tagset:"economics",title:"财经"},{tagset:"education",title:"教育"},{tagset:"motherbaby",title:"育儿"},{tagset:"music",title:"音乐"}],data:{},page:{},complete:{},pageSize:20}},methods:{load:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var a,i,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this.page[t]?this.page[t]+1:1,i={page:a,pageSize:this.pageSize},e.next=4,Object(k["f"])(t,i);case 4:if(n=e.sent,s=n.userInfos,n&&s){e.next=8;break}throw new Error("getTagsetUser failed!");case 8:return this.page[t]=a,this.$set(this.data,t,(this.data[t]||[]).concat(s)),i.page*i.pageSize>=n.total&&(this.complete[t]=!0),e.abrupt("return",s);case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onAdd:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!Object(y["M"])()){e.next=7;break}return e.next=3,Object(U["f"])(t.uid).catch(function(){return!1});case 3:a=e.sent,a?(t.friend.status=U["b"],this.$dispatch("GlobalToast","hide")):this.$dispatch("GlobalToast","show",{text:"关注失败，请重试"}),e.next=8;break;case 7:window.location.href="/user.html";case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},F=E,Y=Object(S["a"])(F,M,j,!1,null,null,null),z=Y.exports,H=a("05d8"),q=a("9e5e"),D="aipindao",X={name:"ChannelAipindao",components:{ChannelAipindaoList:V,ChannelAipindaoSearch:z,ChannelPage:d["a"],GlobalToast:H["a"],BackTop:q["a"]},asyncData:function(e){var t=e.store,a=(e.route,e.res,e.isUpdate),i=e.req,n=e.isClient;a||(t.registerModule(D,o["a"],{preserveState:t.state[D]}),t.registerModule("play",c["a"],{preserveState:t.state.play})),t.commit("".concat(D,"/setPageUrl"),n?window.location.href:i.host+i.url)},mixins:[l["a"],u["a"]],style:["base","channel"],title:"爱奇艺号-优质热门短视频在线观看下载-头条娱乐资讯社会视频节目|爱奇艺",head:function(){return this.channelSeo({cname:D,keywords:"爱奇艺号，短视频，热门娱乐搞笑资讯内涵段子，腾讯视频，头条，快手，抖音，火山小视频，自媒体，开放平台",appid:2104633,description:"爱奇艺号自媒体优质视频内容生产平台，提供全网最新、最全的热门短视频，中国最大的视频平台，打造全网内容新生态。"})},data:function(){return{name:D,appCid:8195}},destroyed:function(){this.$store.unregisterModule(this.name),this.$store.unregisterModule("play")}},G=X,J=Object(S["a"])(G,s,r,!1,null,null,null);t["default"]=J.exports}}]);