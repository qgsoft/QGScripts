(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appsecubp"],{"4ff9":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SecurityCommon",{attrs:{title:e.title}},[n("SecurityEntryCheck",{attrs:{callback:e.entryCheck}},[2===e.level?n("SecurityVerifyPhone",{attrs:{acode:e.acode,phone:e.phone,mail:e.email,"auth-type":e.authType,next:e.next,title:e.title,from:"bp_vp"}}):e._e(),3===e.level?n("SecurityStopEntry",{attrs:{title:e.title}}):e._e()],1)],1)},r=[],o=(n("a481"),n("7f4d")),a=n("b05c"),c=n("8c82"),u=n("db30"),l=n("c832"),s=n("b03e"),h=n("7313"),p={name:"SecurityBindPhone",components:{SecurityEntryCheck:u["a"],SecurityCommon:o["a"],SecurityStopEntry:l["a"],SecurityVerifyPhone:a["a"],SecurityHeadTitle:c["a"]},data:function(){return{level:0,phone:"",email:"",acode:"",authType:0,bindPhone:{},next:"/m/security/changePhoneInput?type=bp"}},asyncData:function(e){var t=e.store;e.route,e.isClient,e.req;t.registerModule("security",s["a"],{preserveState:t.state.security})},computed:{title:function(){return this.$i18n.t("bindPhone").title}},mounted:function(){this.bindPhone=this.$i18n.t("bindPhone")},beforeMount:function(){this.$store.commit("security/setRequestType",h["a"])},methods:{entryCheck:function(e){e&&e.level&&(1===e.level&&this.$router.replace({path:this.next,query:{isHome:1}}),this.level=e.level,this.authType=e.auth_type,this.phone=e.p,this.email=e.e,this.acode=+e.ac)}}},y=p,d=n("2877"),m=Object(d["a"])(y,i,r,!1,null,null,null);t["default"]=m.exports}}]);