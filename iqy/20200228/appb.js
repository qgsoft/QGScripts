(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appb"],{3123:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("BillboardHeader",{attrs:{"channel-id":t.channelId},on:{showIntro:function(e){t.showIntro=!0}}}),a("BillboardContent",{attrs:{"channel-id":t.channelId}}),t.showIntro?a("BillboardIntro",{on:{closeIntro:function(e){t.showIntro=!1}}}):t._e(),a("BackTop")],1)},s=[],n=a("795b"),l=a.n(n),r=(a("96cf"),a("3b8d")),o=a("fe3a"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-header-group"},[a("div",{staticClass:"header-group-innder m-header-group-rank header-fixed"},[a("header",{staticClass:"m-header",class:t.headerTop},[a("AuraLogoIqiyi",{attrs:{to:"/"}}),a("i",{staticClass:"army-icon"}),a("div",{staticClass:"m-rank-info"},[a("div",{staticClass:"c-title"},[t._v("风云榜")]),a("HeaderTopButton")],1)],1),a("BillboardHeaderNav",t._g(t._b({attrs:{"head-class":t.headerNav}},"BillboardHeaderNav",t.$attrs,!1),t.$listeners))],1)])},d=[],u=a("f4c6"),h=a("7f00"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BillboardHeadLabels",{attrs:{"item-id":t.channelId,"head-class":t.headClass},scopedSlots:t._u([{key:"default",fn:function(){return t._l(t.channels,function(e){return a("AuraHeadLabel",{directives:[{name:"pingback",rawName:"v-pingback",value:"704191_Charmlist_tabclick",expression:"'704191_Charmlist_tabclick'"}],key:e.id,attrs:{selected:e.id==t.channelId,text:e.name,"item-id":e.id,href:"javascript:;"},on:{click:function(a){return t.onClick(e.id,a)}}})})},proxy:!0},{key:"extra",fn:function(){return[a("div",{class:{selected:t.isOpen,"nav-more":!0}},[a("a",{staticClass:"c-menu-linkmore",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.isOpen=!t.isOpen}}},[a("i",{staticClass:"c-glyphicon c-glyphicon-arrowDown"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"m-nav-unfold"},[a("ul",{staticClass:"nav-list"},t._l(t.channels,function(e){return a("AuraHeadLabel",{directives:[{name:"pingback",rawName:"v-pingback",value:"704191_Charmlist_tabclick",expression:"'704191_Charmlist_tabclick'"}],key:e.id,attrs:{selected:e.id==t.channelId,text:e.name,href:"javascript:;"},on:{click:function(a){return t.onClick(e.id,a)}}})}),1),a("div",{staticClass:"nav-tip"},[a("a",{staticClass:"tip-link",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.$emit("showIntro")}}},[t._v("\n            爱奇艺内容热度相关说明\n            "),a("i",{staticClass:"c-glyphicon c-glyphicon-feed"})])])])])]},proxy:!0}])})},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{ref:"nav",staticClass:"g-nav-head"},[a("div",{ref:"wrapper",staticClass:"m-nav-head m-sliding",class:t.headClass},[a("ul",{ref:"list",staticClass:"m-nav-head-list m-sliding-list"},[t._t("default")],2)]),t._t("extra")],2)},f=[],C=a("5176"),b=a.n(C),g=a("1fba"),_={name:"BollboardHeadLabels",props:{headClass:{type:String,default:""},itemId:{type:String,default:""}},watch:{itemId:function(t){this.scrollToElement()}},mounted:function(){this.$nextTick(function(){this.scroll=new g["a"](this.$refs.wrapper,b()({scrollX:!0,eventPassthrough:!1,preventDefault:!0,click:!0,HWCompositing:!1,useTransition:!1})),this.scrollToElement()}),this.halfNavWidth=this.$refs.nav.clientWidth/2},destroyed:function(){this.scroll&&this.scroll.destroy()},methods:{scrollToElement:function(){if(this.itemId){var t=this.$refs.list.querySelector('[item-id="'.concat(this.itemId,'"]'));this.scroll.scrollToElement(t,0,-this.halfNavWidth+t.offsetWidth/2)}}}},y=_,x=a("2877"),k=Object(x["a"])(y,v,f,!1,null,null,null),T=k.exports,w=a("b9df"),I=(a("d25f"),"-1"),N=[{name:"总榜",id:"-1"},{name:"电视剧",id:"2"},{name:"电影",id:"1"},{name:"综艺",id:"6"},{name:"动漫",id:"4"},{name:"娱乐",id:"7"},{name:"搞笑",id:"22"},{name:"健康",id:"32"},{name:"生活",id:"21"},{name:"母婴",id:"29"},{name:"脱口秀",id:"31"},{name:"军事",id:"28"},{name:"片花",id:"10"},{name:"旅游",id:"9"},{name:"时尚",id:"13"},{name:"知识",id:"12"},{name:"财经",id:"24"},{name:"音乐",id:"5"},{name:"汽车",id:"26"},{name:"纪录片",id:"3"},{name:"体育",id:"17"},{name:"儿童",id:"15"},{name:"游戏",id:"8"},{name:"科技",id:"30"}];function B(){return N}function L(t){return t+="",N.filter(function(e){return e.id===t})}var O={name:"BillboardHeaderNav",components:{BillboardHeadLabels:T,AuraHeadLabel:w["a"]},props:{headClass:{type:String,default:""},channelId:{type:String,default:""}},data:function(){return{isOpen:!1,channels:B()}},methods:{onClick:function(t,e){this.isOpen=!1,this.$router.push({hash:"#".concat(t)})}}},$=O,H=Object(x["a"])($,p,m,!1,null,null,null),j=H.exports,E=a("2c06"),P={name:"BillboardHeader",components:{AuraLogoIqiyi:u["a"],BillboardHeaderNav:j,HeaderTopButton:h["a"]},data:function(){return{headerTop:"",headerNav:""}},mounted:function(){var t=Object(E["G"])();t===E["s"]?(this.headerTop="header-army",this.headerNav="nav-head-army"):(this.headerTop="m-header-customized",this.headerNav="m-header-customized")}},S=P,A=Object(x["a"])(S,c,d,!1,null,null,null),z=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"m-box"},[a("div",{staticClass:"m-box-items m-box-items-full"},[a("section",{staticClass:"m-tab-nav"},[a("div",{staticClass:"m-tab-nav-list"},t._l(t.tabs,function(e){return a("span",{key:e.type,staticClass:"c-tab-item",class:{selected:t.curTab.type===e.type},on:{click:function(a){return t.reLoadPage(e)}}},[t._v(t._s(e.name)+"\n          ")])}),0)])])]),a("LoadPage",{ref:"loadPage",attrs:{callback:t.init}},[a("BillboardList",{attrs:{videos:t.videos,"idx-type":t.curTab.idxType}}),a("LoadBottom",{directives:[{name:"show",rawName:"v-show",value:t.videos.length,expression:"videos.length"}],attrs:{callback:t.nextPage,"load-complete":t.loadComplete}}),a("AuraFooter")],1)],1)},R=[],W=(a("ac6a"),a("f3e2"),a("57e7"),a("aa91")),q=a("da1f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-box"},[a("div",{staticClass:"m-box-items m-box-items-full"},[a("section",{staticClass:"m-imgTextList m-rankListAll mt10"},[a("ul",{staticClass:"imgTextList-item"},t._l(t.videos,function(e,i){return a("li",{key:i},[a("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"704272_Charmlist_item",expression:"'704272_Charmlist_item'"}],staticClass:"rank-link",attrs:{href:e.pageUrl||"/404.html"}},[a("AuraVideo",{staticClass:"img",style:{"background-image":"url("+e.imageUrl+")"},attrs:{video:e,tag:"div"},scopedSlots:t._u([{key:"lt",fn:function(){return[a("span",{staticClass:"rank-num"},[t._v(t._s(i+1))])]},proxy:!0}],null,!0)}),a("div",{staticClass:"info"},[e.mainTitle?a("span",{staticClass:"c-title",class:{"c-row-title":e.subtitle}},[t._v(t._s(e.mainTitle)+"\n              ")]):t._e(),e.subtitle?a("span",{staticClass:"c-type"},[t._v(t._s(e.subtitle)+"\n              ")]):t._e(),e.kvs[t.idxType]?a("span",{staticClass:"c-video"},[t._v(t._s(t.idxText[t.idxType])+" "+t._s(t._f("formatNum")(e.kvs[t.idxType]))+"\n              ")]):t._e()])],1)])}),0)])])])},J=[],F=a("45bc"),G={name:"BillboardList",filters:{formatNum:F["c"]},props:{videos:{type:Array,default:function(){return[]}},idxType:{type:String,default:""}},data:function(){return{idxText:{hot_idx:"热度",play_idx:"播放指数"}}}},M=G,V=Object(x["a"])(M,U,J,!1,null,null,null),X=V.exports,Y=a("f112"),K={name:"BillboardContent",components:{LoadPage:W["a"],LoadBottom:q["a"],BillboardList:X},props:{channelId:{type:String,required:!0}},data:function(){return{curTab:{},videos:[],pageNum:1,pageSize:20,loadComplete:!1,tabs:[{name:"热度榜",type:"realTime",dim:"hour",idxType:"hot_idx"},{name:"飙升榜",type:"rise",dim:"hour",idxType:"hot_idx"},{name:"播放指数榜",type:"playIndex",dim:"day",idxType:"play_idx"}]}},watch:{channelId:function(){this.reLoadPage(this.tabs[0])}},methods:{init:function(){return this.curTab=this.tabs[0],this.getList()},reLoadPage:function(t){t&&(this.curTab=t),this.pageNum=1,this.$refs.loadPage.load(this.getList)},nextPage:function(){return this.pageNum++,this.getList()},getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(Y["b"])({channelId:this.channelId,type:this.curTab.type,dim:this.curTab.dim,pageNum:this.pageNum,pageSize:this.pageSize});case 2:e=t.sent,this.loadComplete=!e.isHasNext,e.items&&(this.videos=this.pageNum>1?this.videos.concat(e.items):e.items),["-1","6"].indexOf(this.channelId)>-1&&["realTime","rise"].indexOf(this.curTab.type)>-1&&this.videos.forEach(function(t){6===t.channelId&&(t.lowerRightCorner="")});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},Q=K,Z=Object(x["a"])(Q,D,R,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cover",on:{touchstart:function(t){t.preventDefault()}}}),a("section",{staticClass:"m-popup popup-illustrate",on:{touchstart:function(e){return e.preventDefault(),t.handlePopTouch(e)}}},[a("div",{staticClass:"popup-info"},[t._m(0),a("div",{ref:"wrapper",staticClass:"des-content",staticStyle:{height:"100%"}},[t._m(1)])])])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-title"},[a("span",[t._v("爱奇艺内容热度相关说明")]),a("a",{staticClass:"popup-close",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"c-glyphicon c-glyphicon-guideClose"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"c-des"},[a("div",{staticClass:"des-title"},[t._v("内容热度")]),a("div",{staticClass:"des-info"},[t._v("内容热度是客观反映内容当前受欢迎程度的指标。内容热度基于海量用户行为数据，通过当前用户观看行为数据、视频互动行为（包含评论、弹幕、泡泡等互动行为数据）等指标，综合评估用户对内容的反馈情况，进而衡量内容本身的质量和当前受欢迎程度。")])]),a("div",{staticClass:"c-des"},[a("div",{staticClass:"des-title"},[t._v("播放指数")]),a("div",{staticClass:"des-info"},[t._v("播放指数是客观反映内容累积播放效果的指标。播放效果主要基于用户历史的观看行为等数据评估，可以综合体现内容长期的受众覆盖和观看质量。")])]),a("div",{staticClass:"c-des"},[a("div",{staticClass:"des-title"},[t._v("排行榜")]),a("div",{staticClass:"des-info"},[t._v("热度榜：根据当前内容热度值排序，实时更新；")]),a("div",{staticClass:"des-info"},[t._v("飙升榜：根据24小时内容热度飙升值排序，每15分钟更新；")]),a("div",{staticClass:"des-info"},[t._v("播放指数榜：根据播放指数值排序，每天更新。")])]),a("div",{staticClass:"c-des"},[a("div",{staticClass:"des-title"},[t._v("内容热度等级")]),a("div",{staticClass:"des-info"},[t._v("内容热度等级基于内容热度分布情况，将内容热度分为超热，非常热和普通的三个区间")]),a("div",{staticClass:"des-info"},[a("i",{staticClass:"icon-video-hot icon-hot-best"}),t._v("超热")]),a("div",{staticClass:"des-info"},[a("i",{staticClass:"icon-video-hot icon-hot-better"}),t._v("非常热")]),a("div",{staticClass:"des-info"},[a("i",{staticClass:"icon-video-hot icon-hot-good"}),t._v("普通")])])])}],it={name:"BillboardIntro",mounted:function(){this.$nextTick(function(){this.scroll=new g["a"](this.$refs.wrapper,b()({scrollY:!0,eventPassthrough:!1,preventDefault:!0,click:!0,HWCompositing:!1,useTransition:!1}))})},destroyed:function(){this.scroll&&this.scroll.destroy()},methods:{handlePopTouch:function(t){"c-glyphicon c-glyphicon-guideClose"===t.target.className&&this.$emit("closeIntro")}}},st=it,nt=Object(x["a"])(st,et,at,!1,null,null,null),lt=nt.exports,rt=a("9e5e"),ot={name:"Billboard",components:{BillboardHeader:z,BillboardContent:tt,BillboardIntro:lt,BackTop:rt["a"]},mixins:[o["a"]],style:["base"],title:"热门影视剧排行-热门视频排行榜-风云榜|爱奇艺",asyncData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.res;case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),head:function(){return{meta:[{name:"description",lang:"zh-CN",content:"爱奇艺风云榜是基于海量爱奇艺用户的观看数据打造的专业榜单。在这里，您可以了解到时下热门的视频，榜单内容涵盖电视剧、电影、综艺、动漫、体育、娱乐、搞笑、脱口秀、纪录片、音乐等多种类型，为您提供热门视频，在这里总可以找到您想看的优质内容。"},{name:"keywords",lang:"zh-CN",content:"电视剧排行榜,电影排行榜,综艺排行榜,热门视频排行榜"}]}},data:function(){return{channelId:"",showIntro:!1,callappCode:"channel",appCid:8192}},beforeMount:function(){this.updateChannelId(this.$route.hash)},methods:{updateChannelId:function(t){if(!t)return this.channelId=I;var e=t.slice(1),a=L(e);this.channelId=a.length?a[0].id:I},closeIntro:function(){this.showIntro=!1},getCallappOptions:function(){return{extralOptions:{selectedTab:this.appCid}}}},beforeRouteUpdate:function(t,e,a){this.updateChannelId(t.hash),l.a.resolve().then(a).catch(a)}},ct=ot,dt=Object(x["a"])(ct,i,s,!1,null,null,null);e["default"]=dt.exports}}]);