(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appctkx"],{"3fb6":function(a,e,r){"use strict";r.r(e);var i=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ChannelPage",{attrs:{types:a.channelCategorys,cid:a.channelId,cname:"tuokouxiu",pos:"1"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.onSearchByTag;return[r("ChannelTuokouxiuList",{attrs:{"card-map":a.cardMap},on:{clickLoadMore:i}})]}}])})},t=[],n=(r("7f7f"),r("e178")),c=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ChannelListCommon",{attrs:{page:a.page,total:1},on:{"update:page":function(e){a.page=e}}},[a.cardMap[1]?r("ChannelCarousel",{directives:[{name:"pingback",rawName:"v-pingback",value:"707261_tyunying",expression:"'707261_tyunying'"}],attrs:{"is-title-below":!0,videos:a.cardMap[1].videos}}):a._e(),a.cardMap[1.1]?r("VideoList",{attrs:{videos:a.cardMap[1.1].videos,remainder:2},scopedSlots:a._u([{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"811212_ttuijian",expression:"'811212_ttuijian'"},{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_ttuijian",card:i,hu:a.userStatus},expression:"{rseat: '811212_ttuijian', card: videos, hu: userStatus}"}],staticClass:"m-pic-horizontal",attrs:{videos:i}})]}}],null,!1,2656916665)}):a._e(),a.cardMap[1.2]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_tiqiyihao",expression:"'811211_tiqiyihao'"}],attrs:{videos:a.cardMap[1.2].videos,name:"m-recList"},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[1.2].cardName}})]},proxy:!0},{key:"body",fn:function(a){var e=a.videos;return[r("ChannelChaseVideo",{directives:[{name:"pingback",rawName:"v-pingback",value:"811212_tiqiyihao",expression:"'811212_tiqiyihao'"}],attrs:{videos:e}})]}}],null,!1,1937247828)}):a._e(),a.page>=1?[a.cardMap[2]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_thot",expression:"'811211_thot'"}],attrs:{videos:a.cardMap[2].videos,start:1,reminder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[2].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.startVideos,t=e.videos;return[r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"811212_thot",expression:"'811212_thot'"},{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_thot",card:i,hu:a.userStatus},expression:"{rseat: '811212_thot', card: startVideos, hu: userStatus}"}],staticClass:"m-pic-horizontal-full",attrs:{videos:i}}),r("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"811212_thot",expression:"'811212_thot'"},{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_thot",card:i,hu:a.userStatus},expression:"{rseat: '811212_thot', card: startVideos, hu: userStatus}"}],staticClass:"m-pic-horizontal",attrs:{videos:t}})]}}],null,!1,1353935153)}):a._e(),a.cardMap[3]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_ttalk",expression:"'811211_ttalk'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_ttalk",card:a.cardMap[3]}),expression:"showPingback({block: '811211_ttalk', card: cardMap[3]})"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[3],pingback:a.pingback},expression:"{card: cardMap[3], pingback}"}],attrs:{videos:a.cardMap[3].videos,reminder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[3].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_ttalk",card:i,cardMap:a.cardMap[3],hu:a.userStatus},expression:"{rseat: '811212_ttalk', card: videos, cardMap: cardMap[3], hu: userStatus}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[3],pingback:a.pingback},expression:"{card: cardMap[3], pingback}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_ttalk",videos:i,vfrmblk:"811211_ttalk"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_ttalk",expression:"'811213_ttalk'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[3].libs,"more")}}})]},proxy:!0}],null,!1,2430872093)}):a._e(),a.cardMap[4]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_tfun",expression:"'811211_tfun'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_tfun",card:a.cardMap[4]}),expression:"showPingback({block: '811211_tfun', card: cardMap[4]})"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[4],pingback:a.pingback},expression:"{card: cardMap[4], pingback}"}],attrs:{videos:a.cardMap[4].videos,remainder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[4].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_tfun",card:i,cardMap:a.cardMap[4],hu:a.userStatus},expression:"{rseat: '811212_tfun', card: videos, cardMap: cardMap[4], hu: userStatus}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[4],pingback:a.pingback},expression:"{card: cardMap[4], pingback}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_tfun",videos:i,vfrmblk:"811211_tfun"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_tfun",expression:"'811213_tfun'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[4].libs,"more")}}})]},proxy:!0}],null,!1,1749027773)}):a._e(),a.cardMap[5]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_thistory",expression:"'811211_thistory'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_thistory",card:a.cardMap[5]}),expression:"showPingback({block: '811211_thistory', card: cardMap[5]})"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[5],pingback:a.pingback},expression:"{card: cardMap[5], pingback}"}],attrs:{videos:a.cardMap[5].videos,remainder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[5].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_thistory",card:i,cardMap:a.cardMap[5],hu:a.userStatus},expression:"{rseat: '811212_thistory', card: videos, cardMap: cardMap[5], hu: userStatus}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[5],pingback:a.pingback},expression:"{card: cardMap[5], pingback}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_thistory",videos:i,vfrmblk:"811211_thistory"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_thistory",expression:"'811213_thistory'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[5].libs,"more")}}})]},proxy:!0}],null,!1,2956450461)}):a._e(),a.cardMap[6]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_texplain",expression:"'811211_texplain'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_texplain",card:a.cardMap[6]}),expression:"showPingback({block: '811211_texplain', card: cardMap[6]})"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[6],pingback:a.pingback},expression:"{card: cardMap[6], pingback}"}],attrs:{videos:a.cardMap[6].videos,remainder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[6].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_texplain",card:i,cardMap:a.cardMap[6],hu:a.userStatus},expression:"{rseat: '811212_texplain', card: videos, cardMap: cardMap[6], hu: userStatus}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[6],pingback:a.pingback},expression:"{card: cardMap[6], pingback}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_texplain",videos:i,vfrmblk:"811211_texplain"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_texplain",expression:"'811213_texplain'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[6].libs,"more")}}})]},proxy:!0}],null,!1,1664632573)}):a._e(),a.cardMap[7]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_tselect",expression:"'811211_tselect'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_tselect",card:a.cardMap[7]}),expression:"showPingback({block: '811211_tselect', card: cardMap[7]})"},{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:a.cardMap[7],pingback:a.pingback},expression:"{card: cardMap[7], pingback}"}],attrs:{videos:a.cardMap[7].videos,remainder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[7].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_tselect",card:i,cardMap:a.cardMap[7],hu:a.userStatus},expression:"{rseat: '811212_tselect', card: videos, cardMap: cardMap[7], hu: userStatus}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:a.cardMap[7],pingback:a.pingback},expression:"{card: cardMap[7], pingback}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_tselect",videos:i,vfrmblk:"811211_tselect"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_tselect",expression:"'811213_tselect'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[7].libs,"more")}}})]},proxy:!0}],null,!1,59533533)}):a._e(),a.cardMap[8]?r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"811211_temotion",expression:"'811211_temotion'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:a.showPingback({block:"811211_temotion",card:a.cardMap[8]}),expression:"showPingback({block: '811211_temotion', card: cardMap[8]})"}],attrs:{videos:a.cardMap[8].videos,remainder:2},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:a.cardMap[8].cardName}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("AuraVideoList",{directives:[{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"811212_temotion",card:i,cardMap:a.cardMap[8],hu:a.userStatus},expression:"{rseat: '811212_temotion', card: videos, cardMap: cardMap[8], hu: userStatus}"}],staticClass:"m-pic-horizontal",attrs:{itempingback:"811212_temotion",videos:i,vfrmblk:"811211_temotion"}})]}},{key:"footer",fn:function(){return[r("AuraCardMore",{directives:[{name:"pingback",rawName:"v-pingback",value:"811213_temotion",expression:"'811213_temotion'"}],attrs:{text:"查看更多"},nativeOn:{click:function(e){return a.searchByTags(a.cardMap[8].libs,"more")}}})]},proxy:!0}],null,!1,4024388476)}):a._e(),r("VideoList",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"707261_trebofenlei",expression:"'707261_trebofenlei'"},{name:"bi-show-pingback",rawName:"v-bi-show-pingback",value:{block:"707261_trebofenlei"},expression:"{block: '707261_trebofenlei'}"}],attrs:{videos:a.cardMap[9]?a.cardMap[9].hotTags:[],name:"m-hotTags"},scopedSlots:a._u([{key:"header",fn:function(){return[r("AuraCardTitle",{attrs:{title:"热播分类"}})]},proxy:!0},{key:"body",fn:function(e){var i=e.videos;return[r("ChannelHotTag",{directives:[{name:"pingback",rawName:"v-pingback",value:"707261_trebofenlei",expression:"'707261_trebofenlei'"},{name:"bi-pingback",rawName:"v-bi-pingback",value:{rseat:"707261_trebofenlei",card:i,hu:a.userStatus},expression:"{rseat: '707261_trebofenlei', card: videos, hu: userStatus}"}],attrs:{"hot-tags":i},on:{selectTag:a.searchByTags}})]}}],null,!1,3015574338)})]:a._e()],2)},s=[],o=(r("6d67"),r("96cf"),r("3b8d")),d=r("cebc"),p=r("2f62"),u=r("6810"),k=r("4ebf"),l=r("3203"),b=r("6638"),v=r("46cd"),m=r("d83d"),g=r("0b77"),h=r("7e9b"),f=r("a8db"),_=r("eb20"),w=r("5321"),M=r("b2e7"),y=r("8296"),x="BI",N={},C=Object(_["b"])({key:x,sendShow:j}),S=Object(_["a"])({key:x,sendClick:I});function O(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N=a}function I(a){V(Object(d["a"])({},a,{t:20}),event)}function j(a){L(Object(d["a"])({},a,{t:21}))}function L(a){if(a){var e=a.video,r=void 0===e?{}:e,i=Object(f["a"])(a,["video"]),t=Object(d["a"])({rpage:N.rpage||"category_home.8196",c1:N.c1||"8196",r_vidlist:r.tvId,r_eventid:N.event_id,r_bkt:a.bkt,r_area:a.area,r_tvid:r.tvId,r_feedid:r.feedId,purl:location.href||"",bkt:a.bkt,r_source:a.rSource,r_originl:a.rOriginl,rank:a.rank,itemlist:a.itemlist,ht:a.ht,e:a.e,themeid:a.themeid,u:Object(M["w"])(),r:r.qipuId},i);Object(w["d"])(t)}}function V(a,e){if(a){var r=a.video,i=void 0===r?{}:r;e.preventDefault();var t=e.target,n=Object(y["I"])(t,"LI"),c=Object(y["y"])(n);if("number"===typeof c){var s=a.card[c],o={t:a.t,rpage:N.rpage||"category_home.8196",c1:N.c1||"8196",r_vidlist:i.tvId,r_eventid:N.event_id,r_bkt:a.cardMap&&a.cardMap.kvs?a.cardMap.kvs.bkt:"",r_area:a.cardMap&&a.cardMap.kvs?a.cardMap.kvs.r_area:"",e:a.cardMap&&a.cardMap.kvs?a.cardMap.kvs.e:"",r:s.qipuId,r_tvid:i.tvId,r_feedid:i.feedId,bkt:a.cardMap&&a.cardMap.kvs?a.cardMap.kvs.bkt:"",itemlist:s.videoId,rank:c+1,r_originl:s.pingBackInfo?s.pingBackInfo.rOriginl:"",r_source:s.pingBackInfo?s.pingBackInfo.rSource:"",ht:s.pingBackInfo&&"true"===s.pingBackInfo.isVipOnly?1:0,block:a.block,rseat:a.rseat,u:Object(M["w"])(),pu:Object(M["C"])(),hu:a.hu,purl:location.href||"",themeid:a.cardMap&&a.cardMap.kvs?a.cardMap.kvs.card_id:""};Object(w["d"])(o)}}}var T=r("2c06"),B={name:"ChannelYuanchuangList",components:{ChannelWeekVideoList:k["a"],ChannelChaseVideo:l["a"],ChannelHotTag:b["a"],ChannelListCommon:v["a"],VideoList:u["a"],ChannelCarousel:m["a"]},directives:{"recommend-show-pingback":h["e"],"recommend-click-pingback":h["d"],"bi-show-pingback":C,"bi-pingback":S},mixins:[g["a"]],props:{cardMap:{type:Object,default:function(){return{}}}},data:function(){return{page:0,sendBIPingback:L,userStatus:0,hotTags:[]}},computed:Object(d["a"])({},Object(p["e"])("tuokouxiu",["pingback"])),beforeMount:function(){var a=Object(o["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return this.pingback.c1="31",this.pingback.rpage="h5_talkshow",O(this.pingback),a.next=5,Object(M["G"])();case 5:this.userStatus=a.sent;case 6:case"end":return a.stop()}},a,this)}));function e(){return a.apply(this,arguments)}return e}(),methods:{searchByTags:function(a,e){this.$emit("clickLoadMore",a,e)},showPingback:function(a){var e=a.card.videos,r=this.getPingbackItem(e);return{block:a.block,isSend:"",e:a.card.kvs.e,r_area:a.card.kvs.r_area,ht:r.ht.length>0?r.ht.join(","):"",r_source:r.rSource.length>0?r.rSource.join(","):"",r_originl:r.rOriginl.length>0?r.rOriginl.join(","):"",rank:r.ranks.length>0?r.ranks.join(","):"",itemlist:r.itemlist.length>0?r.itemlist.join(","):"",pu:Object(M["C"])(),u:this.$cookies.get(T["f"]),hu:this.userStatus,bkt:a.card.kvs.bkt,themeid:a.card.kvs.card_id}},getPingbackItem:function(a){var e=[],r=[],i=[],t=[],n=[];return a.map(function(a,c){a.videoId&&r.push(a.videoId),a.pingBackInfo&&a.pingBackInfo.isVipOnly&&i.push("true"===a.pingBackInfo.isVipOnly?1:0),a.pingBackInfo&&a.pingBackInfo.rSource&&t.push(a.pingBackInfo.rSource),a.pingBackInfo&&a.pingBackInfo.rOriginl&&n.push(a.pingBackInfo.rOriginl),e.push(c+1)}),{ranks:e,itemlist:r,ht:i,rSource:t,rOriginl:n}}}},A=B,P=r("2877"),z=Object(P["a"])(A,c,s,!1,null,null,null),q=z.exports,$=r("fe3a"),D=r("95ac"),E=r("9ec9"),H="tuokouxiu",J={name:"ChannelTuokouxiu",components:{ChannelTuokouxiuList:q,ChannelPage:D["a"]},asyncData:function(a){var e=a.store;a.route,a.res;e.registerModule(H,n["a"],{preserveState:e.state[H]})},mixins:[$["a"],E["a"]],style:["base","channel"],title:"脱口秀频道-脱口秀节目高清视频-爱奇艺",head:function(){return this.channelSeo({cname:H,keywords:"脱口秀视频,脱口秀节目,脱口秀节目排行榜",appid:2104633,description:"爱奇艺脱口秀频道拥有大量的高清脱口秀视节目频，包含内地、香港、台湾、韩国、日本、美国等热播脱口秀节目，分为文化、娱乐、搞笑、访谈、历史、社会、财经等类型。拥有《晓松奇谈》、《唐唐脱口秀》、《老梁故事汇》、《笑霸来了》、《四大名助》、《晚安朋友圈》、《暴走大事件》等热门的脱口秀节目。"})},data:function(){return{name:H,title:"doubleTitle"}},destroyed:function(){this.$store.unregisterModule(this.name)}},R=J,G=Object(P["a"])(R,i,t,!1,null,null,null);e["default"]=G.exports}}]);