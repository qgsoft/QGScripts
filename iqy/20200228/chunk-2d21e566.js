(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e566"],{d4aa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppealPage",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"bindphone",expression:"'bindphone'"}],ref:"page",staticClass:"m-appeal-box",attrs:{title:"绑定新手机号"}},[e.showResult?e._e():[n("AppealNote",{attrs:{note:"*请确保新手机号可以接收短信并未绑定其他账号"}}),n("AppealPhoneVerify",{on:{error:e.onError,submit:e.onBindPhone}})],e.showResult?n("AppealResult",{attrs:{title:e.title,info:e.info,img:"//www.iqiyipic.com/common/fix/h5-passport3.0/edit-succeed.png"},scopedSlots:e._u([{key:"action",fn:function(){return[n("a",{staticClass:"m-appeal-btn",attrs:{href:"javascript:void(0)"},on:{click:e.closePage}},[e._v("\n        关闭页面\n      ")])]},proxy:!0}],null,!1,4179226297)}):e._e()],2)},o=[],s=(n("96cf"),n("3b8d")),i=n("d5cb"),r=n("a542"),c=n("0e44"),l=n("2c8b"),p=n("53a7"),u=n("261c"),h=n("5321"),f={name:"AppealPhoneBind",components:{AppealPage:i["a"],AppealNote:r["a"],AppealPhoneVerify:c["a"],AppealResult:l["a"]},data:function(){return{showResult:!1,title:"",info:"",isPassword:0}},beforeMount:function(){},methods:{onBindPhone:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,a,o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(Object(h["g"])({rseat:"bindphone-submit",block:"bindphone"}),t.vaildate){e.next=3;break}return e.abrupt("return",!1);case 3:return this.$refs.page.loading(),n={phone:t.account,acode:t.acode,authcode:t.smscode},e.next=7,Object(u["x"])(n);case 7:a=e.sent,this.clearToast(),a.success?(this.showResult=!0,this.title="提交成功",this.info=a.msg,Object(h["h"])({block:"appealscs"})):this.toast({title:"绑定新手机号失败",info:a.msg,closeIcon:!1,buttonInfo:[{text:"关闭",callback:function(){return o.clearToast()}}]});case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updatePassword:function(){Object(h["g"])({rseat:"appealscs-psw",block:"appealscs"}),location.href="/m5/security/verifySetPwd.html"},onError:function(e){var t=this;this.toast({title:e.title,info:e.msg,buttonInfo:[{text:"关闭",callback:function(){return t.clearToast()}}]})},clearToast:function(){this.$refs.page.clearToast()},toast:function(e){this.$refs.page.toast(e)},closePage:p["a"]}},d=f,b=n("2877"),m=Object(b["a"])(d,a,o,!1,null,null,null);t["default"]=m.exports}}]);