(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apppi"],{a48c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.illegel?a("IframeContainer",{attrs:{src:e.src,header:e.header,nav:e.nav,title:e.title,"channel-id":e.channelId}}):e._e()},r=[],c=a("e814"),i=a.n(c),o=(a("759f"),a("fe3a")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.header?a("HeaderSearch",{on:{search:e.search}}):e._e(),e.header?a("HeaderTop"):e._e(),e.nav?a("HeaderNav",{attrs:{"channel-id":e.channelId}}):e._e(),e.title?a("AuraHeadTitle",{attrs:{title:e.title},scopedSlots:e._u([{key:"left",fn:function(){return[a("a",{staticClass:"c-goback",attrs:{href:"javascript:void(0);"},on:{click:e.back}},[a("i",{staticClass:"c-glyphicon c-glyphicon-arrowLeft"})])]},proxy:!0}],null,!1,2533083108)}):e._e(),a("CommonIframe",{attrs:{src:e.src}}),e.header?a("AuraFooter"):e._e()],1)},l=[],h=a("6659"),d=a("14cb"),u=a("72be"),f=a("e4ab"),p=a("73d5"),m=a("b383"),v=a.n(m),y={name:"IframeContainer",components:{HeaderSearch:h["a"],HeaderTop:d["a"],HeaderNav:u["a"],AuraHeadTitle:p["a"],CommonIframe:f["a"]},props:{src:{type:String,default:""},header:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},title:{type:String,default:""},channelId:{type:String,default:"17"}},methods:{search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.key){var t={source:e.source,key:e.key,pos:e.pos,vfrm:e.vfrm};location.href="/search.html?".concat(v.a.stringify(t))}},back:function(){window.history.back()}}},b=y,w=a("2877"),I=Object(w["a"])(b,s,l,!1,null,null,null),g=I.exports,k=a("8296"),_={name:"PageIframe",components:{IframeContainer:g},mixins:[o["a"]],style:["base","channel"],title:"爱奇艺|在线视频网站-海量正版高清视频在线观看",data:function(){return{src:"",header:!0,nav:!0,title:"",channelId:"17",whiteList:["sports.iqiyi.com"]}},asyncData:function(e){e.res,e.store},computed:{illegel:function(){var e=this;return this.whiteList.some(function(t){return!!e.src&&k["d"].parse(e.src).host===t})}},mounted:function(){var e=this.$route.query;this.src=e.src?window.location.protocol+Object(k["L"])(e.src):"",this.title=e.title||"",this.header=!e.header||1===i()(e.header),this.nav=!e.nav||1===i()(e.nav),this.channelId=e.channelId||this.channelId}},H=_,C=Object(w["a"])(H,n,r,!1,null,null,null);t["default"]=C.exports}}]);