(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appur"],{9999:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("AuraHeadTitle",{attrs:{fixed:!0,title:"播放记录","left-url":"/u/"},scopedSlots:e._u([{key:"right",fn:function(){return[i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:e.morePingback,expression:"morePingback"},{name:"show",rawName:"v-show",value:e.getTotal()>0,expression:"getTotal() > 0"}],staticClass:"c-more-link",attrs:{href:"javascript:void(0)"},on:{click:e.toggleEdit}},[e._v("\n        "+e._s(e.edited?"取消":"编辑")+"\n      ")])]},proxy:!0}])}),i("div",{staticClass:"m-box"},[e.allTotal>0||e.total>0||e.getTotal>0?i("div",{staticClass:"m-box-items m-box-items-full"},[i("div",{staticClass:"m-nav-playRecord-box"},[i("section",{staticClass:"m-nav-playRecord m-three-nav-fixed"},[e._m(0),i("div",{directives:[{name:"pingback",rawName:"v-pingback",value:"609081_recordshort",expression:"'609081_recordshort'"}],class:{"playFilter-switch":!0,selected:e.videoType===e.onlyLongVideoType,disabled:e.edited},on:{click:e.filterRecord}},[i("i",{staticClass:"c-glyphicon c-glyphicon-checkbox"}),i("span",{staticClass:"c-info"},[e._v("过滤短视频")])])])])]):e._e()]),e.videoType===e.allVideoType?i("UserRecordList",{key:"allVideo",attrs:{"set-video-type":e.videoType,"video-type":e.allVideoType,total:e.allTotal,edited:e.edited},on:{"update:total":function(t){e.allTotal=t},removeSuccess:e.removeSuccess}}):e._e(),e.videoType===e.onlyLongVideoType?i("UserRecordList",{key:"onlyLongVideo",attrs:{"set-video-type":e.videoType,"video-type":e.onlyLongVideoType,total:e.total,edited:e.edited},on:{"update:total":function(t){e.total=t},removeSuccess:e.removeSuccess}}):e._e(),i("BackTop"),e.isLogin?e._e():i("div",{staticClass:"m-mine-fixedLogin"},[i("div",{staticClass:"inner"},[i("div",{staticClass:"c-info"},[e._v("登录后，播放记录可随时同步哦~")]),i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"609081_recordlogin",expression:"'609081_recordlogin'"}],staticClass:"c-btn-link",attrs:{href:"/user.html"}},[e._v("立即登录")])])])],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"playRecord-tip"},[i("i",{staticClass:"c-myicon c-myicon-suo"}),i("span",{staticClass:"c-info"},[e._v("播放记录仅本人可见")])])}],a=(i("96cf"),i("3b8d")),r=i("73d5"),n=i("9e5e"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("LoadPage",{attrs:{callback:e.loadVideo}},[e._l(e.recordGroup,function(t,s){return t.index>=0?i("div",{key:s,staticClass:"m-box"},[i("div",{staticClass:"m-box-items m-box-items-full"},[i("section",{staticClass:"m-timeTitle"},[i("h3",{staticClass:"c-title-des"},[e._v(e._s(t.title))])])]),i("div",{staticClass:"m-box-items m-box-items-full"},e._l(e.videos,function(o,a){return o.group===s&&o.videoName&&o.videoUrl?i("div",{key:a,class:{"m-topList":!0,"m-toplist-first":a===t.index}},[i("div",{directives:[{name:"pingback",rawName:"v-pingback",value:"806061_bfjlchoose",expression:"'806061_bfjlchoose'"},{name:"show",rawName:"v-show",value:e.edited,expression:"edited"}],staticClass:"checkbox",class:{selected:o.selected},on:{click:function(t){return e.toggleCheck(o)}}},[i("i",{staticClass:"c-glyphicon c-glyphicon-checkbox"})]),i("div",{staticClass:"topList-img"},[i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"609081_recordvideo",expression:"'609081_recordvideo'"}],staticClass:"topList-link",style:{"background-image":"url("+o.resizedVideoImageUrl+")"},attrs:{href:o.videoUrl}},[i("div",{staticClass:"c-rb"},[i("span",{staticClass:"c-date"},[e._v(e._s(o.duration))])])])]),i("div",{staticClass:"topList-text"},[i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"609081_recordvideo",expression:"'609081_recordvideo'"}],staticClass:"topList-title",attrs:{href:o.videoUrl}},[e._v("\n            "+e._s(o.videoName)+"\n            "),o.sourceId>0&&o.tvYear?[e._v("\n              "+e._s(o.tvYear)+"\n            ")]:e._e()],2),i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"609081_recordvideo",expression:"'609081_recordvideo'"}],attrs:{href:o.videoUrl}},[i("em",{staticClass:"topList-video"},[i("i",{class:{"c-glyphicon":!0,"c-glyphicon-cellphone":11!==o.terminalId,"c-glyphicon-computer":11===o.terminalId}}),e._v(e._s(o.remainDuration)+"\n            ")])])])]):e._e()}),0)]):e._e()}),i("LoadBottom",{directives:[{name:"show",rawName:"v-show",value:!e.noRecord,expression:"!noRecord"}],attrs:{callback:e.loadVideo,"load-complete":e.loadComplete}}),e.noRecord?i("div",{staticClass:"m-box-items m-box-items-full"},[i("section",{staticClass:"m-noRecord"},[i("div",{staticClass:"c-icon-noRecord"}),i("div",{staticClass:"c-info"},[e._v("看过的那些精彩视频，保存在这里")])])]):e._e(),i("UserRecordButton",{directives:[{name:"show",rawName:"v-show",value:e.edited,expression:"edited"}],attrs:{num:e.checkedNum,"is-all":e.isAll},on:{checkAll:e.checkAll,remove:e.removeBtn}}),i("AuraPopup",{directives:[{name:"show",rawName:"v-show",value:e.isShowPop,expression:"isShowPop"}],attrs:{info:"确定要删除所有播放记录（包括短视频）么？","left-button-text":"取消","right-button-text":"确认清空"},on:{leftButtonClick:function(t){e.isShowPop=!1},rightButtonClick:e.removeRecord}}),i("AuraToast",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],attrs:{text:"删除失败，请稍后再试"}}),i("AuraFooter")],2)},l=[],d=(i("6d67"),i("ac6a"),i("f3e2"),i("d25f"),i("bd86")),u=(i("57e7"),i("c5f6"),i("fd12")),h=i("da1f"),p=i("aa91"),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"m-mine-fixedHandle"},[i("div",{staticClass:"inner"},[i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:e.morePingback,expression:"morePingback"}],staticClass:"c-link",attrs:{href:"javascript:void(0)"},on:{click:e.toggleChoose}},[e._v("\n      "+e._s(e.isAll?"取消全选":"全选")+"\n    ")]),i("a",{directives:[{name:"pingback",rawName:"v-pingback",value:e.morePingback,expression:"morePingback"}],staticClass:"c-link",class:{disabled:!e.num},attrs:{href:"javascript:void(0)"},on:{click:e.deleteRecord}},[e._v("\n      删除"+e._s(e.num||"")+"\n    ")])])])},m=[],f={name:"UserRecordButton",props:{num:{type:Number,default:0},isAll:{type:Boolean,default:!1}},data:function(){return{morePingback:{}}},methods:{toggleChoose:function(){this.isAll?this.morePingback.rseat="806061_bfjlcancle":this.morePingback.rseat="806061_bfjlall",this.$emit("checkAll",!this.isAll)},deleteRecord:function(){this.num?this.morePingback.rseat="806061_bfjldelete":this.morePingback.rseat="",this.$emit("remove")}}},g=f,b=i("2877"),k=Object(b["a"])(g,v,m,!1,null,null,null),y=k.exports,x=i("7d82"),w=i("b5c7"),_={name:"UserRecordList",components:{AuraPopup:u["a"],LoadBottom:h["a"],LoadPage:p["a"],UserRecordButton:y},props:{videoType:{type:Number,required:!0,validator:function(e){return[w["b"],w["a"]].indexOf(e)>-1}},setVideoType:{type:Number,required:!0,validator:function(e){return[w["b"],w["a"]].indexOf(e)>-1}},edited:{type:Boolean,default:!1}},data:function(){var e;return{recordGroup:(e={},Object(d["a"])(e,x["b"],{title:"今天",index:-1}),Object(d["a"])(e,x["c"],{title:"一周以内",index:-1}),Object(d["a"])(e,x["a"],{title:"更早",index:-1}),e),page:0,pageSize:20,total:0,videos:[],isSelected:!1,isAll:!1,isShowPop:!1,showError:!1}},computed:{noRecord:function(){return 0===this.total},loadComplete:function(){return this.page>0&&this.total<=this.page*this.pageSize},checkedNum:function(){return this.videos.filter(function(e){return e.selected}).length}},watch:{edited:function(e){e||(this.videos.forEach(function(e){e.selected=!1}),this.isAll=!1)},total:function(){this.$emit("update:total",this.total)}},methods:{loadVideo:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.videoType===this.setVideoType){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",this.getUserRecord(this.videoType));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getUserRecord:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var i,s,o,a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i={onlyLongVideo:t,page:this.page+1,pageSize:this.pageSize},e.next=3,Object(w["d"])(i);case 3:return s=e.sent,o=s.data,a=o.records,r=void 0===a?[]:a,n=o.total,this.handleVideos(r),this.videos=this.videos.concat(r),r.length>0&&(this.page=this.page+1),this.total=n,this.updateRecordIndex(),e.abrupt("return",r);case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleVideos:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach(function(t){t.selected=e.isAll,t.remainDuration=e.remainDuration(t);var i=Object(x["i"])(t.addtime);i&&(t.group=i)})},updateRecordIndex:function(){this.recordGroup[x["c"]].index=-1,this.recordGroup[x["b"]].index=-1,this.recordGroup[x["a"]].index=-1;for(var e=this.videos.length-1;e>=0;e--){var t=this.videos[e].group;this.recordGroup[t].index=e}},remainDuration:function(e){var t,i=e.remainTime,s=e.videoPlayTime,o=e.videoDuration;return t=0===s||s===o?"已看完":s<60?"观看不足1分钟":"剩余 ".concat(i),t},toggleCheck:function(e){this.isAll=!1,e.selected=!e.selected},checkAll:function(e){this.isAll=e,this.videos.forEach(function(t){t.selected=e})},removeRecord:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.checkedNum<=0)){e.next=2;break}return e.abrupt("return");case 2:return t=this.videos.filter(function(e){return e.selected}).map(function(e){return"".concat(e.tvId,"_1")}).join(","),i={del_records:t,empty:this.isAll?1:0},e.prev=4,e.next=7,Object(w["c"])(i);case 7:s=e.sent,s&&"A00000"===s.code?(this.total=this.isAll?0:this.total-this.checkedNum,this.videos=this.videos.filter(function(e){return!e.selected}),this.isShowPop=!1,this.updateRecordIndex(),this.$emit("removeSuccess",this.isAll)):this.showToastError(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),this.showToastError();case 14:case"end":return e.stop()}},e,this,[[4,11]])}));function t(){return e.apply(this,arguments)}return t}(),showToastError:function(){var e=this;this.showError=!0,setTimeout(function(){e.showError=!1},2e3)},removeBtn:function(){this.isAll?this.isShowPop=!0:(this.isShowPop=!1,this.removeRecord())}}},T=_,C=Object(b["a"])(T,c,l,!1,null,null,null),R=C.exports,P=i("fe3a"),j=i("b2e7"),A={name:"UserRecord",components:{AuraHeadTitle:r["a"],BackTop:n["a"],UserRecordList:R},mixins:[P["a"]],title:"视频播放记录-爱奇艺",style:["base","user"],data:function(){return{videoType:w["a"],onlyLongVideoType:w["b"],allVideoType:w["a"],isLogin:!0,allTotal:0,total:0,morePingback:{},edited:!1}},asyncData:function(e){e.res},mounted:function(){this.isLogin=Object(j["M"])()},methods:{filterRecord:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.edited||(this.videoType=this.videoType===this.allVideoType?this.onlyLongVideoType:this.allVideoType);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getTotal:function(){return this.videoType===this.allVideoType?this.allTotal:this.total},toggleEdit:function(){this.edited=!this.edited,this.edited?this.morePingback.rseat="806061_bfjledit":this.morePingback.rseat="806061_bfjlexit"},removeSuccess:function(){this.edited=!1}}},L=A,N=Object(b["a"])(L,s,o,!1,null,null,null);t["default"]=N.exports}}]);