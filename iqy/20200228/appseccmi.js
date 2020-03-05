(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appseccmi"],{b5cc:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SecurityCommon",{attrs:{title:t.title}},[s("SecurityHeadTitle",{attrs:{title:t.title}}),s("section",{staticClass:"m-passport-tip"},[s("i",{staticClass:"c-passport-icon c-passport-safe"}),t._v(t._s(t.password.tip+t.title))]),s("section",{staticClass:"m-passport-form"},[s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"s-setpassword",expression:"'s-setpassword'"},{name:"model",rawName:"v-model",value:t.firstInput,expression:"firstInput"}],ref:"firstInput",staticClass:"input-text",attrs:{placeholder:t.password.firstInputPlaceholder,type:"password"},domProps:{value:t.firstInput},on:{input:[function(e){e.target.composing||(t.firstInput=e.target.value)},t.handleInput],blur:t.pwdLoseBlur}}),s("a",{staticClass:"input-eye",class:{selected:t.firstSelected},attrs:{href:"javascript:void(0)"},on:{click:t.toggleFirstPwdShow}},[s("i",{staticClass:"c-passport-icon c-passport-eye"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.invalidPwdTipShow,expression:"invalidPwdTipShow"}],staticClass:"input-error"},[t._v(t._s(t.password.firstErrorTip))])]),s("div",{staticClass:"pw-grade"},[s("span",{staticClass:"pw-txt"},[t._v(t._s(t.password.passwordGrade))]),s("div",{staticClass:"grade",class:{"grade-one":t.weakPwd,"grade-two":t.middlePwd,"grade-three":t.strongPwd}},[s("i",{staticClass:"c-passport-icon c-passport-grade"})]),s("span",{staticClass:"pw-txt"},[t._v(t._s(t.pwdStrength))])]),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.secondInput,expression:"secondInput"}],ref:"secondInput",staticClass:"input-text",attrs:{placeholder:t.password.secondInputPlaceholder,type:"password"},domProps:{value:t.secondInput},on:{input:[function(e){e.target.composing||(t.secondInput=e.target.value)},t.confirmPasswordInput],blur:t.secondPwdLoseBlur}}),s("a",{staticClass:"input-eye",class:{selected:t.secondSelected},attrs:{href:"javascript:void(0)"},on:{click:t.toggleSecondPwdShow}},[s("i",{staticClass:"c-passport-icon c-passport-eye"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.diffPwdTipShow,expression:"diffPwdTipShow"}],staticClass:"input-error"},[t._v(t._s(t.password.secondErrorTip))])])]),s("SecuritySubmitButton",{attrs:{disable:t.buttonDisable,text:t.password.confirm},on:{submit:t.submit}}),s("SecurityTip",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:t.block,expression:"block"},{name:"show",rawName:"v-show",value:t.requestDone,expression:"requestDone"}],attrs:{"left-btn-text":t.password.close},on:{leftButtonClick:t.closePopFuc},scopedSlots:t._u([{key:"tipInfo",fn:function(){return[t.changeSuccess?s("i",{staticClass:"c-passport-icon c-passport-succeedBig"}):s("i",{staticClass:"c-passport-icon c-passport-warnBig"}),s("div",{staticClass:"c-title"},[t._v(t._s(t.msg))])]},proxy:!0}])})],1)},n=[],a=(s("96cf"),s("3b8d")),o=s("7f4d"),c=s("8c82"),r=s("fd7d"),u=s("ead66"),l=s("7313"),d=s("b2e7"),p={name:"SecurityChangePassword",components:{SecurityCommon:o["a"],SecuritySubmitButton:r["a"],SecurityTip:u["a"],SecurityHeadTitle:c["a"]},data:function(){return{buttonDisable:!0,firstInput:"",secondInput:"",weakPwd:!0,middlePwd:!1,strongPwd:!1,passwordStrongReg:l["m"],passwordMiddleReg:l["l"],passwodValidReg:l["n"],invalidPwdTipShow:!1,diffPwdTipShow:!1,pwdStrength:"",firstSelected:!1,secondSelected:!1,changeSuccess:!1,requestDone:!1,msg:"",password:null,title:"",closePopFuc:null}},computed:{query:function(){return this.$route.query},block:function(){return"changePassword"===this.query.type?"s-modifypassword-success":"s-setpassword-success"}},created:function(){this.password=this.$i18n.t("password"),this.title=this.$i18n.t("common").title[this.$route.query.type],this.pwdStrength=this.password.weak},beforeMount:function(){1===this.$store.state.userInfo.userinfo.activated||this.$store.state.userInfo.userinfo.phone||"changePassword"!==this.query.type&&"setPassword"!==this.query.type?"findPassword"===this.query.type?this.closePopFuc=this.login:this.closePopFuc=this.closePop:(this.msg=this.password.bindPhoneInfo,this.requestDone=!0,this.closePopFuc=Object(l["D"])())},methods:{submit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=null,"findPassword"!==this.query.type){t.next=7;break}return t.next=4,Object(l["z"])({account:this.query.account,newpass:this.firstInput,requestType:l["g"]});case 4:e=t.sent,t.next=10;break;case 7:return t.next=9,Object(l["N"])({newpass:this.firstInput,requestType:l["c"]});case 9:e=t.sent;case 10:this.requestDone=!0,e&&e.data&&"A00000"===e.data.code?(this.changeSuccess=!0,this.msg="setPassword"===this.$route.query.type?this.password.setPasswordSuccess:this.password.modifyPasswordSuccess):this.msg=e.data.msg;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleInput:function(){this.invalidPwdTipShow=!1,this.passwordStrongReg.test(this.firstInput)?(this.strongPwd=!0,this.middlePwd=!1,this.weakPwd=!1,this.pwdStrength=this.password.strong):this.passwordMiddleReg.test(this.firstInput)?(this.strongPwd=!1,this.middlePwd=!0,this.weakPwd=!1,this.pwdStrength=this.password.middle):(this.strongPwd=!1,this.middlePwd=!1,this.weakPwd=!0,this.pwdStrength=this.password.weak),this.confirmPasswordInput()},pwdLoseBlur:function(){this.passwodValidReg.test(this.firstInput)||(this.invalidPwdTipShow=!0),this.secondInput&&this.checkPwdValidation()},secondPwdLoseBlur:function(){this.checkPwdValidation()},checkPwdValidation:function(){this.firstInput!==this.secondInput?this.diffPwdTipShow=!0:this.invalidPwdTipShow||(this.diffPwdTipShow=!1,this.buttonDisable=!1)},toggleFirstPwdShow:function(){var t=this.$refs.firstInput.type;this.firstSelected=!this.firstSelected,this.$refs.firstInput.type="password"===t?"text":"password"},toggleSecondPwdShow:function(){var t=this.$refs.secondInput.type;this.secondSelected=!this.secondSelected,this.$refs.secondInput.type="password"===t?"text":"password"},closePop:function(){this.changeSuccess?Object(l["D"])():this.requestDone=!1},confirmPasswordInput:function(){var t=this.secondInput===this.firstInput;this.secondInput.length===this.firstInput.length?(this.diffPwdTipShow=!t,this.buttonDisable=!t&&!this.invalidPwdTipShow):this.buttonDisable=!0},login:function(){this.changeSuccess?Object(d["M"])()?Object(l["D"])():Object(d["O"])({redirectUrl:Object(l["I"])()}):this.requestDone=!1}}},h=p,m=s("2877"),w=Object(m["a"])(h,i,n,!1,null,null,null);e["default"]=w.exports},bb75:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SecurityCommon",{attrs:{title:t.title}},[s("SecurityHeadTitle",{attrs:{title:t.title}}),s("div",{staticClass:"m-box-items m-box-items-full"},[s("section",{staticClass:"m-passport-tip"},[s("i",{staticClass:"c-passport-icon c-passport-safe"}),t._v(t._s(t.mail.tip+t.title))]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.mailSendSuccess&&t.os.android,expression:"mailSendSuccess && os.android"}],staticClass:"m-passport-tip"},[s("i",{staticClass:"c-passport-icon c-passport-succeed"}),t._v(t._s(t.mail.mailSuccessTip)+"\n      "),s("a",{staticClass:"c-link",attrs:{href:"javascript:void(0)"},on:{click:t.openMailLogin}},[t._v(t._s(t.mail.openMail))]),t._v(t._s(t.mail.look)+"\n    ")]),s("section",{staticClass:"m-passport-form"},[s("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"s-inputemail",expression:"'s-inputemail'"},{name:"show",rawName:"v-show",value:!t.mailSendSuccess&&!t.isSlideCode,expression:"!mailSendSuccess && !isSlideCode"}],staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mailAccount,expression:"mailAccount"}],staticClass:"input-text",attrs:{placeholder:t.mail.mailPlaceholder,type:"email"},domProps:{value:t.mailAccount},on:{blur:t.accountLoseBlur,input:function(e){e.target.composing||(t.mailAccount=e.target.value)}}}),s("a",{directives:[{name:"show",rawName:"v-show",value:t.mailAccount,expression:"mailAccount"}],staticClass:"input-close",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mailAccount=""}}},[s("i",{staticClass:"c-passport-icon c-passport-close"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.errorTipAccountShow,expression:"errorTipAccountShow"}],staticClass:"input-error"},[t._v(t._s(t.errorTipAccount))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mailListShow,expression:"mailListShow"}],staticClass:"email-pop"},[s("ul",{staticClass:"list-item"},t._l(t.mailList,function(e,i){return s("li",{key:i,on:{touchend:function(s){return t.completeAccount(t.mailName+"@"+e)}}},[t._v("\n              "+t._s(t.mailName+"@"+e))])}),0)])]),s("div",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:"s-emailnum",expression:"'s-emailnum'"},{name:"show",rawName:"v-show",value:t.mailSendSuccess,expression:"mailSendSuccess"}],staticClass:"input-info"},[s("div",{staticClass:"c-info"},[t._v(t._s(t.mailAccount))]),s("a",{directives:[{name:"pingback",rawName:"v-pingback",value:"c-modifyemail",expression:"'c-modifyemail'"}],staticClass:"c-input-link",attrs:{href:"javascript:void(0)"},on:{click:t.modifyAccount}},[t._v(t._s(t.mail.modify))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mailSendSuccess,expression:"mailSendSuccess"}],staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.smsCode,expression:"smsCode"}],staticClass:"input-text",attrs:{placeholder:t.mail.authcodePlaceholder,type:"text"},domProps:{value:t.smsCode},on:{input:[function(e){e.target.composing||(t.smsCode=e.target.value)},function(e){t.smsCodeError=!1}]}}),s("a",{directives:[{name:"show",rawName:"v-show",value:t.smsCodeRetryShow,expression:"smsCodeRetryShow"}],staticClass:"c-input-link",attrs:{href:"javascript:void(0)"},on:{click:t.sendSmsCodeEmail}},[t._v(t._s(t.mail.resendAuthcode))]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.countDownShow,expression:"countDownShow"}],staticClass:"c-input-link disabled",attrs:{href:"javascript:void(0)"}},[t._v("\n          "+t._s(t.countDown+t.mail.countDown)+"\n        ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.smsCodeError,expression:"smsCodeError"}],staticClass:"input-error"},[t._v(t._s(t.mail.authcodeError))])])]),s("SecuritySubmitButton",{directives:[{name:"show",rawName:"v-show",value:!t.isSlideCode,expression:"!isSlideCode"}],attrs:{disable:t.buttonDisable,text:t.buttonText},on:{submit:t.btnFuc}})],1),t.isSlideCode?s("SecuritySlideCode",{attrs:{token:t.secondToken,"is-tw":t.isTw},on:{slideVerifySuccess:t.onSildeVerifySuccess}}):t._e(),t.securityTipShow?s("SecurityTip",{directives:[{name:"show-pingback",rawName:"v-show-pingback",value:t.securityTipBlock,expression:"securityTipBlock"}],attrs:{"left-btn-text":t.mail.close},on:{leftButtonClick:t.backToHome},scopedSlots:t._u([{key:"tipInfo",fn:function(){return[t.mailSuccess?s("i",{staticClass:"c-passport-icon c-passport-succeedBig"}):s("i",{staticClass:"c-passport-icon c-passport-warnBig"}),s("div",{staticClass:"c-title"},[t._v(t._s(t.securityTipText))])]},proxy:!0}],null,!1,2607722779)}):t._e()],1)},n=[],a=s("0a0d"),o=s.n(a),c=s("f499"),r=s.n(c),u=(s("96cf"),s("3b8d")),l=(s("57e7"),s("d25f"),s("4917"),s("7f4d")),d=s("8c82"),p=s("ead66"),h=s("37024"),m=s("fd7d"),w=s("7313"),f=s("0460"),v=s("5191"),S=s("8296"),b={name:"SecurityChangeMailInput",components:{SecurityCommon:l["a"],SecuritySubmitButton:m["a"],SecuritySlideCode:h["a"],SecurityTip:p["a"],SecurityHeadTitle:d["a"]},data:function(){return{os:S["G"],title:"",locale:"",mail:null,mailSendSuccess:!1,mailAccount:"",mailName:"",mailList:w["i"],mailListShow:!1,errorTipAccount:"",errorTipAccountShow:!1,countDown:60,timer:null,smsCode:"",smsCodeError:!1,countDownShow:!0,smsCodeRetryShow:!1,buttonText:"",buttonDisable:!0,btnFuc:this.sendSmsCodeEmail,phoneVerifyPass:!1,isSlideCode:!1,secondToken:"",cryptVersion:"",securityTipShow:!1,securityTipBlock:"",securityTipText:"",mailSuccess:!1}},computed:{isTw:function(){return Object(w["G"])()}},watch:{mailAccount:function(t){this.errorTipAccountShow=!1,this.mailName=t.match(/(.*)@/)&&t.match(/(.*)@/)[1],this.mailList=w["i"].filter(function(e){return e.indexOf(t.match(/@(.*)/)&&t.match(/@(.*)/)[1])>-1}),this.mailListShow=t.indexOf("@")>0&&this.mailList.length>0,this.buttonDisable=!w["k"].test(this.mailAccount)}},created:function(){this.mail=this.$i18n.t("mail"),this.title=this.$i18n.t("common").title[this.$route.query.type],this.buttonText=this.mail.getAuthcode},methods:{completeAccount:function(t){var e=this;this.mailAccount=t,this.$nextTick(function(){e.mailListShow=!1})},accountLoseBlur:function(){var t=this;this.$nextTick(function(){t.errorTipAccountShow=!w["k"].test(t.mailAccount),t.errorTipAccountShow&&t.mailAccount&&(t.errorTipAccount=t.mail.mailFormatErrorTip)}),this.mailListShow=!1},sendSmsCodeEmail:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,s,i,n,a,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["P"])({email:this.mailAccount});case 2:if(e=t.sent,"P00105"!==e.code){t.next=8;break}this.errorTipAccountShow=!0,this.errorTipAccount=this.mail.mailHasBind,t.next=49;break;case 8:if(!e.session_id){t.next=48;break}return s=S["O"].getItem(w["f"]),t.next=12,Object(f["d"])();case 12:if(this.cryptVersion=t.sent,!this.cryptVersion){t.next=46;break}return t.t0=r.a,t.t1=o()(),t.t2=s,t.t3=this.secondToken,t.next=20,Object(v["b"])();case 20:return t.t4=t.sent,t.t5={t:t.t1,token:t.t2,secondToken:t.t3,dfp:t.t4,clientVersion:1},i=(0,t.t0)(t.t5),t.next=25,Object(f["c"])(i);case 25:return t.t6=t.sent,t.t7=this.cryptVersion,n={cryptSrcData:t.t6,cryptVersion:t.t7,platform:"web",nifc:!1},t.t8=JSON,t.next=31,Object(f["e"])(n);case 31:if(t.t9=t.sent,a=t.t8.parse.call(t.t8,t.t9),"A00000"!==a.code){t.next=46;break}if("slide_mail"!==e.status){t.next=39;break}this.isSlideCode=!0,this.secondToken=a.data.initData.secondToken,t.next=46;break;case 39:if("mail"!==e.status){t.next=46;break}return t.t10=JSON,t.next=43,Object(f["g"])(n);case 43:t.t11=t.sent,c=t.t10.parse.call(t.t10,t.t11),"A00000"===c.code&&this.mailSended();case 46:t.next=49;break;case 48:"session_id_err"===e.status&&(this.securityTipShow=!0,this.securityTipText=this.mail.sessionIdErr);case 49:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),verifySmsCode:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,s,i,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(6===this.smsCode.length){t.next=4;break}this.smsCodeError=!0,t.next=36;break;case 4:return e=S["O"].getItem(w["f"]),t.t0=r.a,t.t1=o()(),t.t2=e,t.t3=this.smsCode,t.next=11,Object(v["b"])();case 11:return t.t4=t.sent,t.t5={t:t.t1,token:t.t2,staticVerifyValue:t.t3,dfp:t.t4,clientVersion:1},s=(0,t.t0)(t.t5),t.next=16,Object(f["c"])(s);case 16:return t.t6=t.sent,t.t7=this.cryptVersion,i={cryptSrcData:t.t6,cryptVersion:t.t7,platform:"web",nifc:!1},t.t8=JSON,t.next=22,Object(f["f"])(i);case 22:if(t.t9=t.sent,n=t.t8.parse.call(t.t8,t.t9),"A00000"!==n.code){t.next=33;break}return t.next=27,Object(w["P"])({email:this.mailAccount});case 27:a=t.sent,a.success?(this.mailSuccess=!0,this.securityTipBlock=this.getBlock(this.$route.query.type,"success"),this.securityTipText=this.mail.congratulate+this.title+this.mail.success):(this.securityTipBlock=this.getBlock(this.$route.query.type,"failed"),this.securityTipText=this.mail.verifyFail),this.securityTipShow=!0,S["O"].setItem(w["p"],""),t.next=36;break;case 33:this.securityTipBlock=this.getBlock(this.$route.query.type,"failed"),this.securityTipText=this.mail.authcodeError,this.securityTipShow=!0;case 36:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getBlock:function(t,e){return"bindMail"===t?"s-bindingemail-".concat(e):"changeMail"===t?"s-modifyemail-".concat(e):"activeMail"===t?"s-actemail-".concat(e):void 0},modifyAccount:function(){this.mailSendSuccess=!1,this.buttonText=this.mail.getAuthcode,this.btnFuc=this.sendSmsCodeEmail,this.countDown=60,clearInterval(this.timer)},onSildeVerifySuccess:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,s,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isSlideCode=!1,e=S["O"].getItem(w["f"]),t.t0=r.a,t.t1=o()(),t.t2=e,t.t3=this.secondToken,t.next=8,Object(v["b"])();case 8:return t.t4=t.sent,t.t5={t:t.t1,token:t.t2,secondToken:t.t3,dfp:t.t4,clientVersion:1},s=(0,t.t0)(t.t5),t.next=13,Object(f["c"])(s);case 13:return t.t6=t.sent,t.t7=this.cryptVersion,i={cryptSrcData:t.t6,cryptVersion:t.t7,platform:"web",nifc:!1},t.t8=JSON,t.next=19,Object(f["g"])(i);case 19:t.t9=t.sent,n=t.t8.parse.call(t.t8,t.t9),"A00000"===n.code&&this.mailSended();case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mailSended:function(){var t=this;this.mailSendSuccess=!0,this.countDownShow=!0,this.smsCodeRetryShow=!1,this.countDown=60,this.timer=setInterval(function(){t.countDown>1?t.countDown--:(clearInterval(t.timer),t.countDownShow=!1,t.smsCodeRetryShow=!0)},1e3),this.buttonText=this.mail.confirm,this.btnFuc=this.verifySmsCode},backToHome:function(){this.mailSuccess?Object(w["D"])():this.securityTipShow=!1},openMailLogin:function(){var t=this.mailAccount.indexOf("@")+1,e=this.mailAccount.slice(t);window.open(w["j"][e])}}},y=b,g=s("2877"),x=Object(g["a"])(y,i,n,!1,null,null,null);e["default"]=x.exports}}]);