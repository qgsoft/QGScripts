(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{"449c":function(a,e,r){"use strict";r.r(e);var n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ChannelPage",{attrs:{types:a.channelCategorys,cid:a.channelId,"list-type":"vertical",pos:"1",cname:"dianying"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.onSearchByTag;return[r("ChannelDianyingList",{attrs:{"card-map":a.cardMap},on:{clickLoadMore:n}})]}}])})},i=[],c=r("e178"),t=r("95ac"),s=function(){var a=this,e=a.$createElement,r=a._self._c||e;return a.cardMap?r("ChannelListCommon",{attrs:{page:a.page,total:3},on:{"update:page":function(e){a.page=e}}},[a.cardMap[1]?r("VideoList",{attrs:{videos:a.cardMap[1].videos},scopedSlots:a._u([{key:"body",fn:function(a){var e=a.videos;return[r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"702141_jingxuanjiaodiantu1",expression:"'702141_jingxuanjiaodiantu1'"}],staticClass:"m-pic-horizontal-full",attrs:{videos:e}})]}}],null,!1,2444754950)}):a._e(),a.cardMap[2]?r("VideoList",{directives:[{name:"auto-recommend-show-pingback",rawName:"v-auto-recommend-show-pingback",value:{card:a.cardMap[2],block:"901291_dtuijian",channelId:a.channelId},expression:"{card: cardMap[2], block: '901291_dtuijian', channelId}"}],attrs:{videos:a.cardMap[2].videos,remainder:3},scopedSlots:a._u([{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"702141_jingxuanshutu",expression:"'702141_jingxuanshutu'"},{name:"auto-recommend-click-pingback",rawName:"v-auto-recommend-click-pingback",value:{card:a.cardMap[2],rseat:"702141_jingxuanshutu",channelId:a.channelId},expression:"{card: cardMap[2], rseat: '702141_jingxuanshutu', channelId}"}],staticClass:"m-pic-vertical",attrs:{videos:n}})]}}],null,!1,1057682933)}):a._e(),a.page>=1?[a.cardMap[3]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"702141_dingyue",expression:"'702141_dingyue'"}],attrs:{videos:a.cardMap[3].videos},scopedSlots:a._u([{key:"header",fn:function(){return[r("section",{staticClass:"m-title"},[r("h2",{staticClass:"c-title-des"},[a._v(a._s(a.cardMap[3].cardName)+"\n            "),a.cardMap[3].updateSize>0?r("span",{staticClass:"c-info-bg"},[r("span",{staticClass:"c-info-text"},[a._v("今日新增"+a._s(a.cardMap[3].updateSize)+"部")])]):a._e()])])]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"scroll",rawName:"v-scroll.scrollX",modifiers:{scrollX:!0}},{name:"pingback",rawName:"v-pingback",value:"702141_dingyue",expression:"'702141_dingyue'"}],staticClass:"m-pic-vertical m-pic-vertical-sliding m-sliding",attrs:{videos:n,lazyload:!0},scopedSlots:a._u([{key:"top",fn:function(e){var n=e.video;return[n.showTime?r("div",{staticClass:"piclist-time"},[r("span",{staticClass:"time"},[a._v(a._s(n.showTime))])]):a._e()]}}],null,!0)})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"170418_yuyuemore",expression:"'170418_yuyuemore'"}],attrs:{href:"/dianying/timeLine.html",text:"查看更多"}})]},proxy:!0}],null,!1,1291344590)}):a._e(),a.cardMap[4]&&a.cardMap[4].videos.length>=8?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"702141_mofang",expression:"'702141_mofang'"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[4],pingback:a.pingback},expression:"{card: cardMap[4], pingback}"}],attrs:{videos:a.cardMap[4].videos.slice(0,8)},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[4].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("section",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[4],pingback:a.pingback},expression:"{card: cardMap[4], pingback}"},{name:"pingback",rawName:"v-pingback",value:"702141_mofang",expression:"'702141_mofang'"}],staticClass:"m-cube"},[r("ul",{staticClass:"m-cube-list"},a._l(n,function(e,n){return r("li",{key:n},[r("router-link",{staticClass:"cube-link",attrs:{to:"/m/dianying/cube?tag="+e.qipuId+"&channelId="+a.channelId}},[r("div",{staticClass:"cube-title"},[a._v(a._s(e.mainTitle))]),r("div",{staticClass:"cube-num"},[a._v(a._s(e.subtitle))])])],1)}),0)])]}}],null,!1,2273891986)}):a._e(),a.cardMap[5]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"702141_wangluo",expression:"'702141_wangluo'"},{name:"auto-recommend-show-pingback",rawName:"v-auto-recommend-show-pingback",value:{card:a.cardMap[5],block:"702141_wangluo",channelId:a.channelId},expression:"{card: cardMap[5], block: '702141_wangluo', channelId}"}],attrs:{videos:a.cardMap[5].videos,start:1,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[5].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos,i=e.startVideos;return[r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"702141_wangluo",expression:"'702141_wangluo'"},{name:"auto-recommend-click-pingback",rawName:"v-auto-recommend-click-pingback",value:{card:a.cardMap[5],rseat:"702141_wangluo",channelId:a.channelId},expression:"{card: cardMap[5], rseat: '702141_wangluo', channelId}"}],staticClass:"m-pic-horizontal-full",attrs:{videos:i,lazyload:!0}}),r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"702141_wangluo",expression:"'702141_wangluo'"},{name:"auto-recommend-click-pingback",rawName:"v-auto-recommend-click-pingback",value:{card:a.cardMap[5],rseat:"702141_wangluo",channelId:a.channelId},expression:"{card: cardMap[5], rseat: '702141_wangluo', channelId}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702141_wangluomore",expression:"'702141_wangluomore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[5].libs)}}})]},proxy:!0}],null,!1,1466644871)}):a._e()]:a._e(),a.page>=2?[a.cardMap[6]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[6],pingback:a.pingback},expression:"{card: cardMap[6], pingback}"}],attrs:{videos:a.cardMap[6].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[6].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[6],pingback:a.pingback},expression:"{card: cardMap[6], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_haolaiwumore",expression:"'702142_haolaiwumore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[6].libs)}}})]},proxy:!0}],null,!1,3890449926)}):a._e(),a.cardMap[7]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[7],pingback:a.pingback},expression:"{card: cardMap[7], pingback}"}],attrs:{videos:a.cardMap[7].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[7].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[7],pingback:a.pingback},expression:"{card: cardMap[7], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_huayumore",expression:"'702142_huayumore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[7].libs)}}})]},proxy:!0}],null,!1,2510328454)}):a._e(),a.cardMap[8]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[8],pingback:a.pingback},expression:"{card: cardMap[8], pingback}"}],attrs:{videos:a.cardMap[8].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[8].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[8],pingback:a.pingback},expression:"{card: cardMap[8], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_rihantaimore",expression:"'702142_rihantaimore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[8].libs)}}})]},proxy:!0}],null,!1,3920766406)}):a._e(),a.cardMap[9]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[9],pingback:a.pingback},expression:"{card: cardMap[9], pingback}"}],attrs:{videos:a.cardMap[9].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[9].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[9],pingback:a.pingback},expression:"{card: cardMap[9], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_oulumore",expression:"'702142_oulumore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[9].libs)}}})]},proxy:!0}],null,!1,1039780614)}):a._e()]:a._e(),a.page>=3?[a.cardMap[10]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[10],pingback:a.pingback},expression:"{card: cardMap[10], pingback}"}],attrs:{videos:a.cardMap[10].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[10].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[10],pingback:a.pingback},expression:"{card: cardMap[10], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_aiqingmore",expression:"'702142_aiqingmore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[10].libs)}}})]},proxy:!0}],null,!1,2709782470)}):a._e(),a.cardMap[11]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[11],pingback:a.pingback},expression:"{card: cardMap[11], pingback}"}],attrs:{videos:a.cardMap[11].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[11].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[11],pingback:a.pingback},expression:"{card: cardMap[11], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_dongzuomore",expression:"'702142_dongzuomore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[11].libs)}}})]},proxy:!0}],null,!1,452144102)}):a._e(),a.cardMap[12]?r("VideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[12],pingback:a.pingback},expression:"{card: cardMap[12], pingback}"}],attrs:{videos:a.cardMap[12].videos,remainder:3},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[12].cardName}})]},proxy:!0},{key:"body",fn:function(e){var n=e.videos;return[r("AuraVideoList",{directives:[{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[12],pingback:a.pingback},expression:"{card: cardMap[12], pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:n,lazyload:!0}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"702142_kongbumore",expression:"'702142_kongbumore'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[12].libs)}}})]},proxy:!0}],null,!1,2631567142)}):a._e()]:a._e()],2):a._e()},o=[],d=r("2f62"),p=r("6810"),l=r("0b77"),u=r("46cd"),m=r("7e9b"),v={name:"ChannelDianyingList",components:{VideoList:p["a"],ChannelListCommon:u["a"]},directives:{"recommend-show-pingback":m["e"],"recommend-click-pingback":m["d"],"auto-recommend-show-pingback":m["b"],"auto-recommend-click-pingback":m["a"]},mixins:[l["a"]],props:{cardMap:{type:Object,default:function(){return{}}}},data:function(){return{page:0}},computed:Object(d["e"])("dianying",["channelId","pingback"])},k=v,g=r("2877"),b=Object(g["a"])(k,s,o,!1,null,null,null),f=b.exports,y=r("fe3a"),M=r("9ec9"),h="dianying",w={name:"ChannelDianying",components:{ChannelDianyingList:f,ChannelPage:t["a"]},asyncData:function(a){var e=a.store;a.route,a.res;e.registerModule(h,c["a"],{preserveState:e.state[h]})},mixins:[y["a"],M["a"]],style:["base","channel"],title:"电影频道-热门好看的电影大全-正版高清电影在线观看|爱奇艺",head:function(){return this.channelSeo({cname:h,keywords:"电影,电影大全,热门电影,好看的电影,高清在线电影,高清电影下载,高清电影。",appid:2104655,description:"爱奇艺电影频道拥有大量高清在线电影资源，热门高清电影、好评电影、电影预告在线观看。包含国产电影、韩国电影、日本电影、美国电影、欧洲电影、印度电影、泰国电影。电影类型有戏剧电影、科幻电影、爱情片、动作片、枪战片、谍战片、悬疑、恐怖片、魔幻、犯罪、惊辣、奇幻、战斗片、青春、坚挺伦理等。热门电影大片抢先看。"})},data:function(){return{name:h}},destroyed:function(){this.$store.unregisterModule(h)}},_=w,x=Object(g["a"])(_,n,i,!1,null,null,null);e["default"]=x.exports}}]);