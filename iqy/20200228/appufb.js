(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appufb"],{"8f4e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showBack?s("AuraHeadTitle",{attrs:{title:"意见反馈"},scopedSlots:t._u([{key:"left",fn:function(){return[s("a",{staticClass:"c-goback",attrs:{href:"javascript:void(0);"},on:{click:t.goBack}},[s("i",{staticClass:"c-glyphicon c-glyphicon-arrowLeft"})])]},proxy:!0}],null,!1,688549548)}):t._e(),t._m(0),s("div",{staticClass:"m-box"},[t._m(1),s("div",{staticClass:"m-box-items  m-box-items-full"},[s("section",{staticClass:"m-reportFaq-fk"},[s("ul",{staticClass:"reportFaq-list"},t._l(t.problems,function(e,n){return s("li",{key:n,ref:"problem",refInFor:!0,class:{"firstList-selected":t.mainIndex==n}},[s("div",{staticClass:"reportFaq-content",on:{click:function(e){return t.mainItemClick(n)}}},[s("span",{staticClass:"c-info"},[t._v(t._s(e.desc))]),t._m(2,!0)]),t.mainIndex==n?s("ul",{staticClass:"reportFaq-twoList"},t._l(e.subs,function(e,n){return s("li",{key:n,class:{selected:t.subIndex==n},on:{click:function(e){return t.subItemClick(n)}}},[s("div",{staticClass:"reportFaq-content"},[s("span",{staticClass:"c-info"},[t._v(t._s(e.desc))]),t._m(3,!0)])])}),0):t._e(),t.mainIndex==n?s("section",{staticClass:"m-reportFaq-info-fk"},[s("div",{staticClass:"textarea-wrap"},[t.contentError&&!e.subs.length?s("span",[s("div",{staticClass:"tel-asterisk"},[t._v("*")])]):t._e(),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"reportFaq-info",attrs:{placeholder:"可描述下您出现此问题的详细场景，便于我们更好地为 您解决问题"},domProps:{value:t.content},on:{blur:function(e){return t.checkContent(!1)},focus:function(e){t.contentError=!1},input:function(e){e.target.composing||(t.content=e.target.value)}}}),s("div",{staticClass:"reportFaq-img"},[t.image?s("div",{staticClass:"img-user",style:{"background-image":"url("+t.removeProtocol(t.image)+")"}}):t._e(),s("div",{staticClass:"img-input",staticStyle:{"background-image":"url(http://www.iqiyipic.com/common/fix/h5-aura/reportFaq-img-default.png)"}}),s("FileUpload",{staticClass:"select-input",attrs:{upload:t.upload,"input-name":"pic"}})],1)]),s("div",{staticClass:"error-tip",class:{dn:!(t.contentError&&!e.subs.length)}},[t._v("\n                "+t._s(t.contentErrorTip)+"\n              ")]),0===n?s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.browerContent,expression:"browerContent"}],staticClass:"reportFaq-tel",attrs:{type:"text",placeholder:"请输入您使用的浏览器或app名称"},domProps:{value:t.browerContent},on:{focus:function(e){t.contentError=!1},input:function(e){e.target.composing||(t.browerContent=e.target.value)}}})]):t._e(),s("div",{staticClass:"input-wrap"},[t.phoneError?s("span",[s("div",{staticClass:"tel-asterisk"},[t._v("*")])]):t._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"reportFaq-tel",attrs:{type:"text",placeholder:"请输入您的手机号",maxlength:"11"},domProps:{value:t.phone},on:{blur:function(e){return t.checkPhone(!1)},focus:function(e){t.phoneError=!1},input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("div",{staticClass:"error-tip",class:{dn:!t.phoneError}},[t._v("\n                "+t._s(t.phoneErrorTip)+"\n              ")])]):t._e()])}),0)]),s("div",{staticClass:"c-btn-reportFaq-fk"},[s("a",{staticClass:"c-btn-info",class:{disabled:!t.canSubmit},attrs:{href:"javascript:void(0)"},on:{click:t.submit}},[t._v("\n          提 交\n        ")])])])]),s("AuraToast",{directives:[{name:"show",rawName:"v-show",value:t.toast,expression:"toast"}],scopedSlots:t._u([{key:"text",fn:function(){return[s("span",{domProps:{innerHTML:t._s(t.toastText)}})]},proxy:!0},{key:"default",fn:function(){return[s("i",{class:t.toastIcon})]},proxy:!0}])})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-box"},[s("div",{staticClass:"m-box-items m-box-items-full"},[s("a",{staticClass:"m-kefu-banner",attrs:{href:"//cserver.iqiyi.com/mobile/chat.html"}},[s("div",{staticClass:"info"},[t._v("线上客服（工作时间：9:00～24:00）")]),s("i",{staticClass:"c-glyphicon c-glyphicon-arrowRight"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-box-items m-box-items-full"},[s("section",{staticClass:"m-reportFaq-title-fk"},[s("h3",{staticClass:"c-title-des"},[t._v("我遇到的问题")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"c-checkbox",attrs:{href:"javascript:void(0);"}},[s("i",{staticClass:"c-glyphicon c-glyphicon-arrowDown"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"c-checkbox",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"c-icon-checkbox"})])}],a=(s("4917"),s("96cf"),s("3b8d")),i=(s("d25f"),s("fe3a")),o=s("f499"),c=s.n(o),u=s("936f"),h=s("b2e7"),d=s("8296"),l="//api-feedback.iqiyi.com/feedbacks",p="QiyiPlayerLogger";function m(t){return/^1\d{10}$/.test(t)}function f(t){var e={entranceId:"mbw_baseline_".concat(t.entry),problems:t.problems,authCookie:Object(h["x"])(),content:t.content,email:t.email,phone:t.phone,imageURLs:t.imageURLs,referer:t.referer,feedbackLog:Object(d["s"])()+"\n=========".concat(p,"=========\n")+Object(d["s"])(p),attachedInfo:t.attachedInfo};for(var s in t.attachedInfo.browerContent&&(e.attachedInfo=t.attachedInfo),Object(d["l"])(),e){var n=e[s];void 0!==n&&""!==n||delete e[s]}return u["a"].post(l,c()(e),{headers:{"Content-Type":"application/json;charset=UTF-8"}})}var b=[{desc:"播放问题",subs:[{desc:"屏幕提示无法播放，稍后再试"},{desc:'屏幕显示"点击播放"，无反应'},{desc:"屏幕提示“播放地址失效”"},{desc:"屏幕黑屏或提示其他内容"},{desc:"没有声音，画面正常"},{desc:"画面黑屏，声音正常"},{desc:"广告后无法播放正片"},{desc:"一直处于缓冲状态"},{desc:"选集或跳集故障"},{desc:"进度条异常及快进后退问题"},{desc:"其他"}]},{desc:"卡顿问题",subs:[{desc:"播放时卡顿"},{desc:"界面操作卡顿"},{desc:"其他"}]},{desc:"VIP会员问题",subs:[{desc:"会员购买"},{desc:"会员权益"},{desc:"会员播放"},{desc:"会员活动"},{desc:"其他"}]},{desc:"账号问题",subs:[{desc:"无法登录"},{desc:"账号被盗"},{desc:"账号绑定不上手机号"},{desc:"无法修改密码"},{desc:"其他"}]},{desc:"页面加载问题",subs:[{desc:"页面加载失败"},{desc:"图片未正常显示"},{desc:"功能展示不全"},{desc:"其他"}]},{desc:"内容问题",subs:[{desc:"缺少视频"},{desc:"字幕错误"},{desc:"视频更新不及时"},{desc:"其他"}]},{desc:"产品建议",subs:[]},{desc:"其他问题",subs:[{desc:"观看历史出错"},{desc:"广告报障"},{desc:"其他"}]}],g=s("73d5"),v=s("e8eb"),x=s("090f"),w={name:"UserFeedback",components:{AuraHeadTitle:g["a"],FileUpload:v["a"]},mixins:[i["a"]],title:"用户反馈-爱奇艺",style:["base","feedback"],data:function(){return{mainIndex:-1,subIndex:-1,content:"",browerContent:"",phone:"",toast:!1,phoneErrorTip:"",contentErrorTip:"",phoneError:!0,contentError:!0,isSending:!1,toastText:"",toastIcon:"",problems:b,image:{}}},asyncData:function(t){t.res},computed:{canSubmit:function(){return this.isInputFit(!1)&&!this.isSending},showBack:function(){return!!this.$route.query.entry}},methods:{mainItemClick:function(t){var e=this;this.prevIndex!==t&&(this.subIndex=-1,this.content="",this.image=""),this.prevIndex=-1===this.mainIndex?t:this.mainIndex,this.mainIndex=this.mainIndex===t?-1:t,this.$nextTick(function(){Object(d["N"])(e.$refs.problem[t],44)})},subItemClick:function(t){this.subIndex=this.subIndex===t?-1:t},removeItem:function(t,e){return t.filter(function(t){return t!==e})},submit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isInputFit(!0)&&!this.isSending){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,this.isSending=!0,this.showLoadingToast(),t.next=7,f(this.getParam());case 7:if(e=t.sent,s=e.data,"20001"!==s.code){t.next=14;break}return t.next=12,this.succHandle();case 12:t.next=16;break;case 14:return t.next=16,this.errorHandle();case 16:this.isSending=!1,t.next=24;break;case 19:return t.prev=19,t.t0=t["catch"](2),t.next=23,this.errorHandle();case 23:this.isSending=!1;case 24:case"end":return t.stop()}},t,this,[[2,19]])}));function e(){return t.apply(this,arguments)}return e}(),showLoadingToast:function(){this.toast=!0,this.toastText="正在提交...",this.toastIcon="loading-icon"},hideLoadingToast:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["V"])(1e3);case 2:this.toast=!1;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showToast:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var s,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=n.length>1&&void 0!==n[1]?n[1]:3e3,this.toast=!0,this.toastText=e.toastText||"",this.toastIcon=e.toastIcon||"",t.next=6,Object(d["V"])(s);case 6:this.toast=!1,this.toastText="",this.toastIcon="";case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),errorHandle:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.hideLoadingToast();case 2:return t.next=4,this.showToast({toastText:"提交失败，请检查网络状态"});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),succHandle:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.hideLoadingToast();case 2:return t.next=4,this.showToast({toastText:"提交成功"});case 4:this.goBack();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goBack:function(){this.$route.query.toUser?window.location.href="/u/":this.$route.query.entry&&window.history.back()},getParam:function(){var t=this.problems[this.mainIndex];return{entry:this.$route.query.entry||"other",content:this.content,phone:this.phone,imageURLs:this.imageURLs,referer:document.referrer,problems:[{type:t.desc,subType:-1===this.subIndex?"":t.subs[this.subIndex].desc}],attachedInfo:{browerContent:this.browerContent}}},checkPhone:function(t){return m(this.phone)?(this.phoneError=!1,!0):(this.phoneError=!0,this.phoneErrorTip="",t&&(this.phoneErrorTip=0===this.phone.length?"请输入手机号":"请输入正确的手机号",this.showToast({toastText:this.phoneErrorTip})),!1)},checkContent:function(t){var e=this.problems[this.mainIndex];return this.contentErrorTip="",!(!e.subs.length&&!this.content)||(t&&(this.showToast({toastText:"请填写您的建议或遇到的问题"}),this.contentErrorTip="请输入描述"),this.contentError=!0,!1)},isInputFit:function(t){var e=this.problems[this.mainIndex];return!e||e.subs.length&&-1===this.subIndex?(t&&this.showToast({toastText:"请先选择您遇到的问题"}),!1):!!this.checkContent(t)&&!!this.checkPhone(t)},upload:function(t,e){if(t.target.value){var s=this.checkValidHeadshot(t.target.files[0]);if(s)return this.showToast({toastText:s}),!1;if(t.target.value){this.loading();var n="//api-feedback.iqiyi.com/feedbacks/images";this.fdUploadFile(t.target.files[0],n)}}},fdUploadFile:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,s){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("images",e),t.next=4,u["a"].post(s,n,{headers:{"Content-Type":"multipart/form-data"}});case 4:r=t.sent,"20002"===r.data.code?(this.image=r.data.data.imageURLs?r.data.data.imageURLs[0]:"",this.imageURLs=r.data.data.imageURLs,this.toast=!1):this.showToast({toastText:"网络状况不佳，请稍后重试"});case 6:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),checkValidHeadshot:function(t){var e=5242880;return!t.type.match(/(jpeg|gif|png|bmp)/)&&t.size>=e?"仅支持jpg,jpeg,gif,png,bmp格式且图片大小不能大于5M":t.type.match(/(jpeg|gif|png|bmp)/)?t.size>=e?"图片大小不能大于5M":void 0:"仅支持jpg,jpeg,gif,png,bmp格式图片"},loading:function(){this.showToast({toastText:"正在上传中..."})},removeProtocol:x["a"]}},k=w,C=s("2877"),y=Object(C["a"])(k,n,r,!1,null,null,null);e["default"]=y.exports}}]);