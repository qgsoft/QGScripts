(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appsecdac"],{e754:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SecurityCommon",{attrs:{title:"账号注销"}},[!t.isChecked&&t.verifySuccess?s("section",{staticClass:"m-loading-passport"},[s("div",{staticClass:"info"},[t._v("正在检测您的账号下的权益，"),s("br"),t._v("请耐心等候...")]),s("div",{staticClass:"progressBar"},[s("span",{staticClass:"progress",style:"width:"+t.progress+"%;"})])]):!t.isDelete&&t.verifySuccess?s("div",{staticClass:"m-box"},[s("div",{staticClass:"m-box-items m-box-items-full"},[s("SecurityHeadTitle",{attrs:{"keep-show":!0,title:"初步检验结果：您的账号无法注销"}}),s("section",{staticClass:"m-passport-cancelInfo"},[t.detail.length?[s("ul",{staticClass:"list-item"},t._l(t.detail,function(e,i){return s("li",{key:i},[t._v("\n              "+t._s(e.rights)+"\n            ")])}),0)]:s("div",{staticClass:"info"},[t._v(t._s(t.err))])],2),s("section",{staticClass:"m-passport-btn"},[s("a",{staticClass:"c-form-link",attrs:{href:"javascript:void(0)"},on:{click:t.close}},[t._v("关闭")])]),s("section",{staticClass:"m-passport-fixedTip"},[t._v("\n        如有问题，您可自行或联系爱奇艺"),s("span",{staticClass:"c-link"},[t._v("人工客服(400-923-7171)")]),t._v("处理\n      ")])],1)]):t.verifySuccess?s("div",{staticClass:"m-box"},[s("div",{staticClass:"m-box-items m-box-items-full"},[s("SecurityHeadTitle",{attrs:{"keep-show":!0,title:"初步检验结果：您的账号有以下权益，注销后将无法恢复，是否要继续注销？"}}),s("section",{staticClass:"m-passport-cancelInfo"},t._l(t.detail,function(e,i){return s("div",{key:i},[s("div",{staticClass:"title"},[t._v(t._s(e.rights))]),s("div",{staticClass:"info"},[t._v(t._s(e.desc))])])}),0),s("section",{staticClass:"m-passport-btn"},[s("a",{staticClass:"c-form-link",attrs:{href:"javascript:void(0)"},on:{click:t.close}},[t._v("取消注销")]),s("a",{staticClass:"c-form-link hollow-link",attrs:{href:"javascript:void(0)"},on:{click:t.confirmDelete}},[t._v("继续注销")])])],1)]):t._e(),s("SecurityTip",{directives:[{name:"show",rawName:"v-show",value:t.isPopup,expression:"isPopup"}],attrs:{"left-btn-text":"关闭"},on:{leftButtonClick:t.close},scopedSlots:t._u([{key:"tipInfo",fn:function(){return[s("i",{staticClass:"c-passport-icon c-passport-warnBig"}),s("div",{staticClass:"c-title"},[t._v(t._s(t.err))])]},proxy:!0}])}),t.verify&&2===t.verify.level?s("SecurityVerifyPhone",{attrs:{"auth-type":t.verify.auth_type,phone:t.verify.p,mail:t.verify.e,acode:t.verify.ac,from:"da_vp",next:"/m/security/deleteCheck",title:"账号注销"}}):t._e(),t.verify&&3===t.verify.level?s("SecurityStopEntry",{attrs:{title:"账号注销"}}):t._e()],1)},r=[],c=(s("d92a"),s("96cf"),s("3b8d")),n=s("7f4d"),a=s("ead66"),o=s("8c82"),l=s("b05c"),u=s("c832"),p=s("7313"),f=s("8296"),h=s("b2e7"),v=s("53a7"),m={name:"ScurityDeleteAccountCheck",components:{SecurityCommon:n["a"],SecurityTip:a["a"],SecurityVerifyPhone:l["a"],SecurityStopEntry:u["a"],SecurityHeadTitle:o["a"]},data:function(){return{isDelete:!1,detail:[],isChecked:!1,progress:10,timer:null,err:"",isPopup:!1,verify:null}},computed:{verifySuccess:function(){return!this.verify||1===this.verify.level}},beforeMount:function(){this.requestDelete()},methods:{requestDelete:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={requestType:p["d"]},t.next=3,Object(p["L"])(e);case 3:s=t.sent,s&&s.success?this.setProgress():"needVerify"===s.status?this.verify=s:(this.isChecked=!0,this.isDelete=s.success,this.notifyApp(),this.err=s.msg,this.progress=100);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deleteCheck:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["x"])();case 2:e=t.sent,this.isDelete=e.success,this.notifyApp(),this.isChecked=!0,e.detail?this.detail=e.detail:this.err=e.msg;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),notifyApp:function(){Object(p["F"])()&&!this.isDelete&&this.verifySuccess&&Object(p["w"])("0")},setProgress:function(){var t=2e4;this.timer=new f["c"](function(){40===this.progress?(this.timer.stop(),this.deleteCheck()):this.progress>=90&&this.timer.stop(),this.progress+=10}.bind(this),t),this.timer.start()},confirmDelete:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["v"])();case 2:e=t.sent,e&&e.success?this.$router.push({path:"/m/security/deletedSuccess",query:{id:e.applyID,start:e.frozen_time.from,end:e.frozen_time.to}}):"needLogin"===e.status?(this.isPopup=!0,setTimeout(function(){Object(h["O"])({redirectUrl:"https://m.iqiyi.com/m/security/cancellation"})},5e3)):"stop"===e.status?(this.isPopup=!0,setTimeout(function(){s.close()},5e3)):(this.isPopup=!0,this.err=e.msg);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),close:function(){f["i"].iqiyi?Object(v["e"])().then(function(){window.iqiyi.closePage()}):this.$router.push("/m/security/home")}}},d=m,y=s("2877"),C=Object(y["a"])(d,i,r,!1,null,null,null);e["default"]=C.exports}}]);