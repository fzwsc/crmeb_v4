(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-index"],{"114b":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=a,e.getLogo=r,e.setFormId=u,e.setCouponReceive=c,e.getCoupons=s,e.getUserCoupons=d,e.getNewCoupon=l,e.getArticleCategoryList=f,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=g,e.getArticleDetails=b,e.loginMobile=v,e.verifyCode=m,e.registerVerify=w,e.phoneRegister=y,e.phoneRegisterReset=k,e.phoneLogin=C,e.switchH5Login=x,e.bindingPhone=A,e.bindingUserPhone=_,e.logout=P,e.getTemlIds=$,e.pink=I,e.getCity=T,e.getLiveList=L,e.getDiy=U,e.follow=E;var o=i(n("f2c5"));function a(){return o.default.get("v2/index",{},{noAuth:!0})}function r(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function u(t){return o.default.post("wechat/set_form_id",{formId:t})}function c(t){return o.default.post("coupon/receive",{couponId:t})}function s(t){return o.default.get("coupons",t,{noAuth:!0})}function d(t){return o.default.get("coupons/user/"+t)}function l(){return o.default.get("v2/new_coupon")}function f(){return o.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function g(){return o.default.get("article/banner/list",{},{noAuth:!0})}function b(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function v(t){return o.default.post("login/mobile",t,{noAuth:!0})}function m(){return o.default.get("verify_code",{},{noAuth:!0})}function w(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function y(t){return o.default.post("register",t,{noAuth:!0})}function k(t){return o.default.post("register/reset",t,{noAuth:!0})}function C(t){return o.default.post("login",t,{noAuth:!0})}function x(){return o.default.post("switch_h5",{from:"wechat"})}function A(t){return o.default.post("binding",t,{noAuth:!0})}function _(t){return o.default.post("user/binding",t)}function P(){return o.default.get("logout")}function $(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function I(){return o.default.get("pink",{},{noAuth:!0})}function T(){return o.default.get("city_list",{},{noAuth:!0})}function L(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function U(){return o.default.get("v2/diy/get_diy",{},{noAuth:!0})}function E(){return o.default.get("wechat/follow",{},{noAuth:!0})}},"237f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},"3c3b":function(t,e,n){"use strict";var i=n("ee27");n("c975"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("32b4")),a=i(n("237f")),r=n("b916"),u=n("aae4"),c=n("dfea"),s=n("114b"),d={name:"Auth",mixins:[a.default],data:function(){return{phone:"",captcha:"",key:"",authKey:"",scope:"",bindPhone:!1}},mounted:function(){},onLoad:function(t){var e=this,n=this,i=t.code,a=t.state,s=t.scope;if("snsapi_base"===s){this.url=t.url||t.back_url||"";var d=this.$Cache.get("spread"),l=this.$Cache.get(u.LOGINTYPE);(0,c.silenceAuth)({code:t.code||"",spread:d}).then((function(n){void 0!==n.data.key?(e.bindPhone=!0,e.authKey=n.data.key):(e.$store.commit("LOGIN",{token:n.data.token,time:parseInt(n.data.expires_time)-e.$Cache.time()}),e.$Cache.set(u.WX_AUTH,t.code),e.$Cache.clear(u.STATE_KEY),l&&e.$Cache.clear(u.LOGINTYPE),location.href=decodeURIComponent(decodeURIComponent(t.back_url)))}))}else o.default.auth(i,a).then((function(){location.href=decodeURIComponent(decodeURIComponent(t.back_url)),(0,r.getUserInfo)().then((function(t){n.$store.commit("SETUID",t.data.uid)}))})).catch((function(){location.replace("/")}))},methods:{editPwd:function(){var t=this,e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0,s.bindingPhone)({phone:e.phone,captcha:e.captcha,key:this.authKey}).then((function(n){var i=n.data.expires_time-t.$Cache.time();if(t.$store.commit("LOGIN",{token:n.data.token,time:i}),!t.url||-1===t.url.indexOf("http"))return e.$util.Tips({title:"绑定成功！",icon:"success"},{tab:4,url:"/pages/index/index"});location.href=t.url})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?void(0,s.verifyCode)().then((function(e){(0,s.registerVerify)(t.phone,"reset",e.data.key,t.captcha).then((function(e){t.$util.Tips({title:e.msg}),t.sendCode()})).catch((function(e){return t.$util.Tips({title:e})}))})):t.$util.Tips({title:"请输入正确的手机号码！"}):t.$util.Tips({title:"请填写手机号码！"})}}};e.default=d},5486:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0e00be4d]{background-color:#fff!important}.ChangePassword .phone[data-v-0e00be4d]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-0e00be4d]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-0e00be4d]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-0e00be4d]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-0e00be4d]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-0e00be4d]{width:%?340?%}.ChangePassword .list .item .code[data-v-0e00be4d]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-0e00be4d]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-0e00be4d]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}.lottie-bg[data-v-0e00be4d]{position:fixed;left:0;top:0;background-color:#fff;width:100%;height:100%;z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}#lottie[data-v-0e00be4d]{display:block;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);margin:auto}#lottie uni-image[data-v-0e00be4d]{width:%?200?%;height:%?200?%}body.?%PAGE?%[data-v-0e00be4d]{background-color:#fff!important}',""]),t.exports=e},"9a9c":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bindPhone?n("v-uni-view",[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:"填写手机号码","placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v("确认绑定")])],1)],1)],1):n("v-uni-view",{staticClass:"lottie-bg"},[n("v-uni-view",{attrs:{id:"lottie"}},[n("v-uni-image",{attrs:{src:"/static/img/live-logo.gif",rel:"preload"}})],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"9e0f":function(t,e,n){var i=n("5486");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("a368aab8",i,!0,{sourceMap:!1,shadowMode:!1})},c390:function(t,e,n){"use strict";n.r(e);var i=n("3c3b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},edc0:function(t,e,n){"use strict";var i=n("9e0f"),o=n.n(i);o.a},f5d0:function(t,e,n){"use strict";n.r(e);var i=n("9a9c"),o=n("c390");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("edc0");var r,u=n("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"0e00be4d",null,!1,i["a"],r);e["default"]=c.exports}}]);