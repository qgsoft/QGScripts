(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appvcu"],{ff5d:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"m-box"},[t("AuraHeadTitle",{attrs:{title:a.tagName||"更多影片推荐"}})],1),t("LoadPage",{ref:"loadPage",attrs:{"init-load":!a.videos.length}},[t("div",{staticClass:"m-box"},[t("div",{staticClass:"m-box-items m-box-items-full"},[t("AuraVideoList",{directives:[{name:"recommend-show-pingback",rawName:"v-recommend-show-pingback",value:{card:{videos:a.videos,cardName:"",tag:a.tag},pingback:a.pingback},expression:"{card: { videos: videos, cardName: '', tag: tag }, pingback}"},{name:"recommend-click-pingback",rawName:"v-recommend-click-pingback",value:{card:{videos:a.videos,cardName:"",tag:a.tag},pingback:a.pingback},expression:"{card: { videos: videos, cardName: '', tag: tag }, pingback}"}],staticClass:"m-pic-vertical",attrs:{videos:a.videos}})],1)]),t("BackTop"),t("LoadBottom",{attrs:{"load-complete":!a.remaining,callback:a.loadMore}}),a.remaining?a._e():t("AuraFooter")],1)],1)},i=[],c=t("cebc"),o=t("2f62"),r=t("fe3a"),s=t("aa91"),d=t("73d5"),g=t("6810"),u=t("9e5e"),m=t("da1f"),l=t("302b"),p=(t("96cf"),t("ac6a"),t("f3e2"),t("3b8d")),v=t("936f"),b=t("11ad"),h=t("2c06"),f=t("8296");function k(a){return w.apply(this,arguments)}function w(){return w=Object(p["a"])(regeneratorRuntime.mark(function a(e){var t,n,i,c,o,r,s,d,g=arguments;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=e.commit,e.state,n=g.length>1&&void 0!==g[1]?g[1]:{},i=n.qipuId,c=n.page,o=n.channelId,r=this.$cookies.get(h["f"]),a.next=6,v["a"].jsonp("".concat(b["l"],"/").concat(i,"/").concat(c,"/?uid=").concat(r,"&channelId=").concat(o));case 6:if(s=a.sent,d=s&&s.data,!d||"A00000"!==d.code||!d.data){a.next=11;break}return t("setData",{videos:d.data.videos,remaining:d.data.isNextPage,tagName:d.data.topic,pingback:d.data.pingback}),a.abrupt("return",d.data.videos);case 11:case"end":return a.stop()}},a,this)})),w.apply(this,arguments)}function N(a,e){y(e.videos),a.videos=a.videos.concat(e.videos),a.remaining=e.remaining,a.tagName=e.tagName,a.pingback=e.pingback}function x(a,e){a.tag=e}function y(a){a.forEach(function(a){a.mainTitle=a.title,a.imageUrl=Object(f["W"])(a.imageUrl)})}var I={namespaced:!0,state:function(){return{videos:[],remaining:1,tag:"",tagName:"",pingback:{}}},actions:{getData:k},mutations:{setData:N,setTag:x}},$=t("7e9b"),j="vipCube",q={name:"ChannelSecondaryCube",components:{AuraHeadTitle:d["a"],LoadPage:s["a"],BackTop:u["a"],LoadBottom:m["a"],AuraFooter:l["a"],VideoList:g["a"]},directives:{"recommend-show-pingback":$["e"],"recommend-click-pingback":$["d"]},asyncData:function(a){var e=a.store;a.route,a.res;e.registerModule(j,I,{preserveState:e.state[j]})},mixins:[r["a"]],style:["base","channel"],title:function(){return this.tagName||"电影频道"},data:function(){return{page:1}},computed:Object(c["a"])({},Object(o["e"])(j,["videos","remaining","tagName","pingback","tag"])),mounted:function(){var a=this;this.videos.length||this.$refs.loadPage.load(function(){return a.$store.dispatch("".concat(j,"/getData"),{qipuId:a.$route.query.tag,channelId:a.$route.query.channelId,page:1})})},destroyed:function(){this.$store.unregisterModule(j)},methods:Object(c["a"])({},Object(o["b"])(j,["getData"]),{loadMore:function(){var a=this;return this.getData({qipuId:this.$route.query.tag,channelId:this.$route.query.channelId,page:this.page+1}).then(function(e){a.page++})}})},C=q,D=t("2877"),O=Object(D["a"])(C,n,i,!1,null,null,null);e["default"]=O.exports}}]);