(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appcl"],{"632b":function(n,i,e){"use strict";e.r(i);var t=function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",[e("div",{staticClass:"m-box"},[n._m(0),e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-list"},n._l(n.channelList1,function(i,t){return e("AuraLink",{directives:[{name:"pingback",rawName:"v-pingback",value:i.rseat,expression:"channel.rseat"}],key:t,staticClass:"m-list-link",attrs:{to:i.page===n.single?i.href:"",href:i.href,title:i.name}},[e("i",{class:["c-listicon",i.icon]}),e("span",{staticClass:"m-list-info"},[n._v("\n            "+n._s(i.name)+"\n          ")])])}),1)])]),e("div",{staticClass:"m-box"},[n._m(1),e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-list"},n._l(n.channelList2,function(i,t){return e("AuraLink",{directives:[{name:"pingback",rawName:"v-pingback",value:i.rseat,expression:"channel.rseat"}],key:t,staticClass:"m-list-link",attrs:{to:i.page===n.single?i.href:"",href:i.href,title:i.name}},[e("i",{class:["c-listicon",i.icon]}),e("span",{staticClass:"m-list-info"},[n._v("\n            "+n._s(i.name)+"\n          ")])])}),1)])]),e("div",{staticClass:"m-box"},[n._m(2),e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-list"},n._l(n.channelList3,function(i,t){return e("AuraLink",{directives:[{name:"pingback",rawName:"v-pingback",value:i.rseat,expression:"channel.rseat"}],key:t,staticClass:"m-list-link",attrs:{to:i.page===n.single?i.href:"",href:i.href,title:i.name}},[e("i",{class:["c-listicon",i.icon]}),e("span",{staticClass:"m-list-info"},[n._v("\n            "+n._s(i.name)+"\n          ")])])}),1)])]),e("AuraFooter")],1)},a=[function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-title"},[n._v("影视·休闲")])])},function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-title"},[n._v("精选·合家欢")])])},function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"m-box-items m-box-items-full"},[e("section",{staticClass:"m-channel-title"},[n._v("其他频道")])])}],s=(e("7f7f"),e("c3bb")),l=e("fe3a"),c=e("4f30"),h={name:"ChannelList",components:{FeedBack:s["a"]},mixins:[l["a"]],style:["base","channel"],title:"爱奇艺|爱奇艺视频-高清影视剧-网络视频在线观看",data:function(){return{channelList1:[],channelList2:[],channelList3:[],single:c["PAGE_SINGLE"]}},asyncData:function(n){n.store,n.route,n.res},created:function(){this.initList1(),this.initList2(),this.initList3()},methods:{initList1:function(){var n=c["getChannel"](c["CHANNEL_WEIDIANYING"]),i={page:n.page,href:n.url,name:n.name,icon:"c-list-wangluodianying",rseat:"707062_listwangluodianying"},e=c["getChannel"](c["CHANNEL_FUN"]),t={page:e.page,href:e.url,name:e.name,icon:"c-list-gaoxiao",rseat:"707062_listgaoxiao"},a={href:"//m-x.pps.tv",name:"奇秀直播",icon:"c-list-qixiu",rseat:"707062_listqixiu"},s=c["getChannel"](c["CHANNEL_LIVE"]),l={page:s.page,href:s.url,name:"直播中心",icon:"c-list-zhibo",rseat:"707062_listzhibo"},h=c["getChannel"](c["CHANNEL_LIB"]),r={href:h.url,name:h.name,icon:"c-list-quanwangyingshi",rseat:"707062_listvideo"};this.channelList1=[this.channel("dianshiju"),this.channel("dianying"),this.channel("jilupian"),this.channel("yingxun"),this.channel("pianhua"),i,this.channel("zongyi"),this.channel("dongman"),this.channel("tuokouxiu"),this.channel("yule"),t,this.channel("yinyue"),a,l,r]},initList2:function(){var n=c["getChannel"](c["CHANNEL_GAME"]),i={page:n.page,href:n.url,name:n.name,icon:"c-list-youxi",rseat:"707062_listyouxi"},e=c["getChannel"](c["CHANNEL_HOT"]),t={page:e.page,href:e.url,name:e.name,icon:"c-list-redian",rseat:"707062_listhot"},a=c["getChannel"](c["CHANNEL_BILLBOARD"]),s={page:a.page,href:a.url,name:a.name,icon:"c-list-fengyunbang",rseat:"707062_listbillboard"},l=c["getChannel"](c["CHANNEL_QIYICHUPIN"]),h={page:l.page,href:l.url,name:l.name,icon:"c-list-iqychupin",rseat:"707062_listiqiyi"},r=c["getChannel"](c["CHANNEL_SHAOER"]),o={page:r.page,href:r.url,name:r.name,icon:"c-list-ertong",rseat:"707062_listertong"};this.channelList2=[i,t,s,this.channel("zixun"),this.channel("yuanchuang"),h,o,this.channel("muying"),this.channel("jiaoyu"),this.channel("jiankang"),this.channel("shenghuo"),this.channel("tiyu")]},initList3:function(){this.channelList3=[this.channel("keji"),this.channel("junshi"),this.channel("qiche"),this.channel("caijing"),this.channel("lvyou"),this.channel("shishang"),this.channel("show"),this.channel("guanggao"),this.channel("gongyi")]},channel:function(n){var i=c["getChannel"](c["CHANNEL_".concat(n.toUpperCase())]);return{page:i.page,href:i.url,name:i.name,icon:"c-list-".concat(n),rseat:"707062_list".concat(n)}}}},r=h,o=e("2877"),m=Object(o["a"])(r,t,a,!1,null,null,null);i["default"]=m.exports}}]);