(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appusic"],{"172e":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("UserSpaceIChannelHeader",{attrs:{"show-button":!e.isOwn,"sub-pingback":"803201_headfollow","cancel-pingback":"803201_headdisfollow"}}),n("LoadPage",{attrs:{callback:e.init}},[e.latestVideos.length?n("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"803201_newest",expression:"'803201_newest'"}],staticClass:"m-box"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"803201_video",expression:"'803201_video'"}],staticClass:"m-pic-horizontal",attrs:{videos:e.latestVideos}})],1)]):e._e(),e.hotVideos.length?n("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"803201_hottest",expression:"'803201_hottest'"}],staticClass:"m-box"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-title"},[n("h3",{staticClass:"c-title-des"},[e._v("热门视频")])])]),n("div",{staticClass:"m-box-items m-box-items-full"},[n("AuraVideoList",{directives:[{name:"pingback",rawName:"v-pingback",value:"803201_video",expression:"'803201_video'"}],staticClass:"m-pic-horizontal",attrs:{videos:e.hotVideos}})],1)]):e._e(),e.userInfos.length?n("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"803201_recommend1",expression:"'803201_recommend1'"}],staticClass:"m-box"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-title"},[n("h3",{staticClass:"c-title-des"},[e._v(e._s(e.userinfo.nickname)+"推荐关注")])])]),n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-home-subscibe"},[n("SubList",{attrs:{users:e.userInfos.slice(0,3),pingback:e.pingback},on:{addSuccess:e.onAddSuccess,addFailure:e.onAddFailure}})],1)])]):e._e(),e.recommandUserInfos.length?n("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"803201_recommend2",expression:"'803201_recommend2'"}],staticClass:"m-box"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-title"},[n("h3",{staticClass:"c-title-des"},[e._v("关注"+e._s(e.userinfo.nickname)+"的人还关注")])])]),n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-home-subscibe"},[n("SubList",{attrs:{users:e.recommandUserInfos.slice(0,6),pingback:e.pingback},on:{addSuccess:e.onAddSuccess,addFailure:e.onAddFailure}})],1)]),e.recommandUserInfos.length?n("AuraMoreButton",{attrs:{href:"/aipindao/",title:"更多爱奇艺号","more-pingback":"803201_more"}}):e._e()],1):e._e(),e.bottomLoadShow?n("LoadBottom",{attrs:{load:!e.hasAllVideos&&!e.isOwn,callback:e.getFriends}}):e._e(),e.dataEmpty?n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-nowifi-tip"},[n("i",{staticClass:"wifi-icon"}),n("div",{staticClass:"info"},[e._v("\n          没有任何内容呢，\n          "),n("a",{attrs:{href:"/aipindao/"}},[n("span",{staticClass:"c-info-green"},[e._v("更多爱奇艺号")])]),e._v("\n          再看看吧~\n        ")])])]):e._e(),n("AuraPopup",{directives:[{name:"show",rawName:"v-show",value:e.isSubFailShow,expression:"isSubFailShow"}],attrs:{info:"关注失败，请重试","left-button-text":"我知道了"},on:{leftButtonClick:function(t){e.isSubFailShow=!1}}}),n("AuraFooter"),n("BackTop")],1)],1)},i=[],a=(n("6b54"),n("87b3"),n("768b")),r=(n("96cf"),n("3b8d")),o=n("cebc"),c=n("795b"),u=n.n(c),l=(n("ac6a"),n("5df3"),n("2f62")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-linkMore borderB"},[n("a",{directives:[{name:"pingback",rawName:"v-pingback",value:e.morePingback,expression:"morePingback"}],staticClass:"m-link m-love-link",attrs:{href:e.href},on:{click:function(t){return e.$emit("linkMore",t)}}},[n("i",{staticClass:"c-glyphicon c-glyphicon-morevideo"}),e._v(e._s(e.title)+"\n    ")])])])},p=[],m={name:"MoreButton",props:{title:{type:String,default:""},href:{type:String,default:"javascript:void(0)"},morePingback:{type:String,default:""}}},h=m,f=n("2877"),b=Object(f["a"])(h,d,p,!1,null,null,null),v=b.exports,g=n("fd12"),w=n("9e5e"),k=n("da1f"),x=n("aa91"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"m-box"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("div",{staticClass:"m-box-items m-box-items-full"},[n("section",{staticClass:"m-ihome-user"},[e.userinfo.icon?n("div",{staticClass:"bg-alpha",style:{"background-image":"url("+e.userinfo.icon+")"}}):e._e(),n("div",{staticClass:"user-info"},[n("div",{staticClass:"photo-wrap"},[e.userinfo.icon?n("span",{key:"icon",staticClass:"photo",style:{"background-image":"url("+e.userinfo.icon+")"}}):n("span",{key:"default",staticClass:"photo",style:{"background-image":"url(//www.iqiyipic.com/common/fix/headicons/male-130.png)"}})]),n("div",{staticClass:"title"},[n("span",{staticClass:"c-name"},[e._v(e._s(e.userinfo.nickname))]),1===e.renZhengStatus?n("span",[n("i",{staticClass:"icon-home-i"})]):e._e(),2===e.renZhengStatus?n("span",[n("i",{staticClass:"icon-home-mt"})]):e._e()]),n("div",{staticClass:"c-data"},[n("span",{staticClass:"user-date"},[e._v("粉丝 "+e._s(e._f("formatNum")(e.followed)))]),n("span",{staticClass:"user-date"},[e._v("播放 "+e._s(e._f("formatNum")(e.playTimes)))])]),n("div",{staticClass:"user-intro"},[e._v(e._s(e.verifyIntro))]),e.showButton?n("div",[e.friendStatus?n("span",{directives:[{name:"pingback",rawName:"v-pingback",value:e.cancelPingback,expression:"cancelPingback"}],key:"subed",staticClass:"handle disabled-handle",on:{click:e.cancelSub}},[e._v("\n                已关注")]):n("span",{directives:[{name:"pingback",rawName:"v-pingback",value:e.subPingback,expression:"subPingback"}],key:"sub",staticClass:"handle",on:{click:e.onAdd}},[n("i",{staticClass:"c-glyphicon c-glyphicon-guideClose"}),e._v("\n                关注")])]):e._e()])])])])]),n("AuraPopup",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],attrs:{info:"确定取消关注吗？","left-button-text":"确定","right-button-text":"取消"},on:{leftButtonClick:e.confirmCancelSub,rightButtonClick:function(t){e.isShow=!1}}}),n("AuraPopup",{directives:[{name:"show",rawName:"v-show",value:e.isFailShow,expression:"isFailShow"}],attrs:{info:e.failTip,"left-button-text":"我知道了"},on:{leftButtonClick:function(t){e.isFailShow=!1}}})],1)},C=[],S=n("45bc"),_=n("1533"),j=n("936f");function O(e){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="//pub.m.iqiyi.com/jp/h5/user/newest/".concat(t,"/"),e.prev=1,e.next=4,j["a"].jsonp(n);case 4:return s=e.sent,i=s.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",u.a.catch(Error));case 12:case"end":return e.stop()}},e,null,[[1,9]])})),I.apply(this,arguments)}function F(e){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="//pub.m.iqiyi.com/jp/h5/user/hottest/".concat(t,"/"),e.prev=1,e.next=4,j["a"].jsonp(n);case 4:return s=e.sent,i=s.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",u.a.catch(Error));case 12:case"end":return e.stop()}},e,null,[[1,9]])})),R.apply(this,arguments)}function P(e){return A.apply(this,arguments)}function A(){return A=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="//pub.m.iqiyi.com/jp/h5/user/playCount/".concat(t,"/"),e.prev=1,e.next=4,j["a"].jsonp(n);case 4:return s=e.sent,i=s.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",0);case 12:case"end":return e.stop()}},e,null,[[1,9]])})),A.apply(this,arguments)}var V=n("b2e7"),E={name:"UserSpaceIChannelHeader",components:{AuraPopup:g["a"]},filters:{formatNum:S["c"]},props:{subPingback:{type:String,default:""},cancelPingback:{type:String,default:""},showButton:{type:Boolean,default:!0}},data:function(){return{isShow:!1,isFailShow:!1,failTip:"",status:!1,playTimes:0,followed:0}},computed:Object(o["a"])({},Object(l["e"])("spaceIChannel",{userinfo:function(e){return e.userInfo.userinfo||{}},friendStatus:function(e){return e.friendStatus},renZhengStatus:function(e){return e.renZhengStatus},verifyIntro:function(e){return e.verifyIntro}})),mounted:function(){this.getPlayTimes(),this.getUserSns()},methods:Object(o["a"])({getUserSns:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(V["D"])({myuid:this.userinfo.uid});case 2:t=e.sent,this.followed=t.followed;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPlayTimes:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P(this.userinfo.uid);case 2:t=e.sent,this.playTimes=t?t.videosPlayCount:0;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onAdd:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!Object(V["M"])()){e.next=5;break}return e.next=3,this.addFriend();case 3:e.next=6;break;case 5:window.location.href="/user.html";case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addFriend:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_["c"])({uids:this.userinfo.uid});case 3:t=e.sent,t?(n=!0,this.setFriendStatus(n)):window.location.href="/user.html",e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),this.failTip="关注失败，请重试",this.isFailShow=!0;case 11:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),cancelSub:function(){this.isShow=!0},confirmCancelSub:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_["e"])({uids:this.userinfo.uid});case 3:t=e.sent,t&&(this.isShow=!1,this.setFriendStatus(!1)),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),this.failTip="取消关注失败，请重试",this.isShow=!1,this.isFailShow=!0;case 12:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},Object(l["d"])("spaceIChannel",["setFriendStatus"]))},N=E,B=Object(f["a"])(N,y,C,!1,null,null,null),U=B.exports,L=(n("759f"),n("11ad"));function T(e){return M.apply(this,arguments)}function M(){return M=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(L["y"])(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),M.apply(this,arguments)}function Z(e,t){return $.apply(this,arguments)}function $(){return $=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var s,i,r,o,c,l,d,p,m,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,t.state,i=n.uid,r=this.$cookies.get("P00003"),o=Object(V["F"])({uid:i,fields:"userinfo"}),c=Object(_["d"])(r,i),e.next=7,u.a.all([o,c]);case 7:l=e.sent,d=Object(a["a"])(l,2),p=d[0].data,m=d[1].data,h=void 0===m?[]:m,s("setUserInfo",p),s("setFriendStatus",h.some(function(e){return String(e.fuid)===i})),s("setMyuid",r);case 15:case"end":return e.stop()}},e,this)})),$.apply(this,arguments)}function D(e,t){return z.apply(this,arguments)}function z(){return z=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var s,i,a,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,t.state,i=n.uid,e.next=4,T(i);case 4:if(a=e.sent,a){e.next=7;break}return e.abrupt("return");case 7:r=a&&a.base,o=r?r.mark:0,c=a.more&&a.more.verifyIntro,s("setRenZhengStatus",o),s("setVerifyIntro",c);case 12:case"end":return e.stop()}},e)})),z.apply(this,arguments)}function H(e,t){e.userInfo=t}function q(e,t){e.friendStatus=t}function J(e,t){e.renZhengStatus=t}function G(e,t){e.verifyIntro=t}function K(e,t){e.myuid=t}var Q={namespaced:!0,state:function(){return{myuid:"",userInfo:{userinfo:{}},friendStatus:!1,renZhengStatus:0,verifyIntro:""}},actions:{getHeader:Z,getRenZhengInHeader:D},mutations:{setUserInfo:H,setFriendStatus:q,setRenZhengStatus:J,setVerifyIntro:G,setMyuid:K}},W=n("657e"),X=n("fe3a"),Y={name:"UserSpaceIChannel",components:{AuraMoreButton:v,AuraPopup:g["a"],BackTop:w["a"],LoadBottom:k["a"],LoadPage:x["a"],UserSpaceIChannelHeader:U,SubList:W["a"]},mixins:[X["a"]],style:["base","user"],title:function(){var e=this.userinfo.nickname||"爱奇艺用户";return"".concat(e,"最新最热视频-爱奇艺")},head:function(){var e=this.userinfo.nickname||"爱奇艺用户";return{meta:[{property:"og:title",lang:"zh-CN",content:"".concat(e,"最新最热视频-爱奇艺")},{name:"keywords",lang:"zh-CN",content:"".concat(e,"热门最新视频")},{name:"description",lang:"zh-CN",content:"爱奇艺".concat(e,"视频页提供最新最热的").concat(e,"相关视频，观众可以在线观看最热门的、最近更新的").concat(e,"影片视频节目")}]}},asyncData:function(e){var t=e.store;e.route;t.registerModule("spaceIChannel",Q,{preserveState:t.state.spaceIChannel})},data:function(){return{userInfos:[],recommandUserInfos:[],latestVideos:[],hotVideos:[],userLoaded:!1,isSubFailShow:!1,pingback:{itemPingback:"803201_1",subPingback:"803201_rseat_recommend",updatePingback:"803201_upset"}}},computed:Object(o["a"])({},Object(l["e"])("spaceIChannel",{userinfo:function(e){return e.userInfo.userinfo||{}},myuid:function(e){return e.myuid}}),{hasAllVideos:function(){return this.latestVideos.length&&this.hotVideos.length},videoDataEmpty:function(){return!this.latestVideos.length&&!this.hotVideos.length},friendDataEmpty:function(){return!this.userInfos.length&&!this.recommandUserInfos.length},bottomLoadShow:function(){return!this.userLoaded&&!this.isOwn},isOwn:function(){var e=this.$route.params.uid;return this.myuid===e},dataEmpty:function(){return this.videoDataEmpty&&this.friendDataEmpty}}),destroyed:function(){this.$store.unregisterModule("spaceIChannel")},methods:{init:function(){var e=this;return this.getVideos().then(function(){if(e.videoDataEmpty&&!e.isOwn)return e.getFriends()}).catch(function(t){return e.isOwn?u.a.reject(t):e.getFriends()})},getVideos:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,s,i,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.uid,n=O(t).catch(function(e){return e}),s=F(t).catch(function(e){return e}),e.next=5,u.a.all([n,s]);case 5:if(i=e.sent,r=Object(a["a"])(i,2),o=r[0],c=r[1],this.latestVideos=o&&o.videos||[],this.hotVideos=c&&c.videos||[],!this.isError(o)||!this.isError(c)){e.next=13;break}return e.abrupt("return",u.a.reject(o));case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),isError:function(e){return"[object Error]"===Object.prototype.toString.call(e)},getFriends:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.uid,e.next=3,Object(_["g"])(t).catch(function(e){return e});case 3:if(n=e.sent,s=n.user,i=n.recommandUser,this.userInfos=s&&s.userInfos||[],this.recommandUserInfos=i&&i.userInfos||[],!this.isError(s)||!this.isError(i)){e.next=12;break}return e.abrupt("return",u.a.reject(s));case 12:this.userLoaded=!0;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onAddSuccess:function(e){e.friend.status=_["b"]},onAddFailure:function(e){this.isSubFailShow=!0}}},ee=Y,te=Object(f["a"])(ee,s,i,!1,null,null,null);t["default"]=te.exports}}]);