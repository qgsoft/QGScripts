(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appsecdsuc"],{"53ce":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SecurityCommon",{attrs:{title:"账号注销"}},[s("div",{staticClass:"m-box"},[s("div",{staticClass:"m-box-items m-box-items-full"},[s("SecurityHeadTitle",{attrs:{"keep-show":!0,title:"注销将于15日以内完成，您需要了解以下信息: "}}),s("section",{staticClass:"m-passport-cancelInfo"},[s("div",{staticClass:"cancelID"},[t._v("注销申请ID："+t._s(t.data.id))]),s("ul",{staticClass:"list-item"},[s("li",[t._v("请妥善保存您的注销申请ID，申请ID用于查询注销申请进度和申请账号恢复")]),s("li",[t._v("在"+t._s(t._f("formatDate")(t.data.start))+" - "+t._s(t._f("formatDate")(t.data.end))+"的时间段内，您可以通过我们提供的“申请恢复账号”功能或联系客服来恢复账号的正常使用")]),s("li",[t._v("在前述时间段内，您无法登录与使用该账号，亦无法使用该账号绑定的手机号码注册新账号")])])]),s("section",{staticClass:"m-passport-btn"},[s("a",{staticClass:"c-form-link",attrs:{href:"javascript:void(0)"},on:{click:t.close}},[t._v("关闭")])])],1)])])},c=[],i=s("7f4d"),n=s("8c82"),o=s("5a0c"),r=s.n(o),l=s("7313"),u=s("b2e7"),d={name:"SecurityDeletedAccountSuccess",components:{SecurityCommon:i["a"],SecurityHeadTitle:n["a"]},filters:{formatDate:function(t){return r()(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},data:function(){return{data:{}}},created:function(){this.data=this.$route.query||{}},mounted:function(){Object(l["F"])()&&Object(l["w"])("1")},methods:{close:function(){Object(u["P"])({redirectUrl:Object(l["I"])()})}}},m=d,f=s("2877"),p=Object(f["a"])(m,a,c,!1,null,null,null);e["default"]=p.exports}}]);