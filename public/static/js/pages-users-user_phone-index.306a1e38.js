(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_phone-index"],{"114b":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=r,e.getLogo=u,e.setFormId=a,e.setCouponReceive=s,e.getCoupons=c,e.getUserCoupons=l,e.getNewCoupon=d,e.getArticleCategoryList=f,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=g,e.getArticleDetails=v,e.loginMobile=b,e.verifyCode=w,e.registerVerify=m,e.phoneRegister=y,e.phoneRegisterReset=A,e.phoneLogin=C,e.switchH5Login=x,e.bindingPhone=_,e.bindingUserPhone=P,e.logout=k,e.getTemlIds=$,e.pink=T,e.getCity=L,e.getLiveList=I,e.getDiy=M,e.follow=R;var o=i(n("f2c5"));function r(){return o.default.get("v2/index",{},{noAuth:!0})}function u(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function a(t){return o.default.post("wechat/set_form_id",{formId:t})}function s(t){return o.default.post("coupon/receive",{couponId:t})}function c(t){return o.default.get("coupons",t,{noAuth:!0})}function l(t){return o.default.get("coupons/user/"+t)}function d(){return o.default.get("v2/new_coupon")}function f(){return o.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function g(){return o.default.get("article/banner/list",{},{noAuth:!0})}function v(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function b(t){return o.default.post("login/mobile",t,{noAuth:!0})}function w(){return o.default.get("verify_code",{},{noAuth:!0})}function m(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function y(t){return o.default.post("register",t,{noAuth:!0})}function A(t){return o.default.post("register/reset",t,{noAuth:!0})}function C(t){return o.default.post("login",t,{noAuth:!0})}function x(){return o.default.post("switch_h5",{from:"wechat"})}function _(t){return o.default.post("binding",t,{noAuth:!0})}function P(t){return o.default.post("user/binding",t)}function k(){return o.default.get("logout")}function $(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function T(){return o.default.get("pink",{},{noAuth:!0})}function L(){return o.default.get("city_list",{},{noAuth:!0})}function I(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function M(){return o.default.get("v2/diy/get_diy",{},{noAuth:!0})}function R(){return o.default.get("wechat/follow",{},{noAuth:!0})}},"237f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},3603:function(t,e,n){"use strict";n.r(e);var i=n("fb2b"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},3654:function(t,e,n){var i=n("445f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("33e08bf4",i,!0,{sourceMap:!1,shadowMode:!1})},"445f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-323276e9]{background-color:#fff!important}.ChangePassword .phone[data-v-323276e9]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-323276e9]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-323276e9]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-323276e9]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-323276e9]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-323276e9]{width:%?340?%}.ChangePassword .list .item .code[data-v-323276e9]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-323276e9]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-323276e9]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}body.?%PAGE?%[data-v-323276e9]{background-color:#fff!important}',""]),t.exports=e},"5c7d":function(t,e,n){"use strict";n.r(e);var i=n("a2c6"),o=n("3603");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("d11c");var u,a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"323276e9",null,!1,i["a"],u);e["default"]=s.exports},a2c6:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:"填写手机号码","placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v("确认绑定")])],1)],1)],1)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},d11c:function(t,e,n){"use strict";var i=n("3654"),o=n.n(i);o.a},fb2b:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("c964")),r=i(n("237f")),u=n("114b"),a=n("8212"),s=n("2f62"),c={mixins:[r.default],components:{},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",authKey:""}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(t){var e=this;this.isLogin?((0,u.verifyCode)().then((function(t){e.$set(e,"key",t.data.key)})),this.authKey=t.key||"",this.url=t.url||""):(0,a.toLogin)()},methods:{onLoadFun:function(){},authColse:function(t){this.isShowAuth=t},editPwd:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?t.captcha?void(0,u.bindingUserPhone)({phone:t.phone,captcha:t.captcha}).then((function(e){if(void 0===e.data||!e.data.is_bind)return t.$util.Tips({title:"绑定成功！",icon:"success"},{tab:5,url:"/pages/users/user_info/index"});uni.showModal({title:"是否绑定账号",content:e.msg,confirmText:"绑定",success:function(e){if(e.confirm)(0,u.bindingUserPhone)({phone:t.phone,captcha:t.captcha,step:1}).then((function(e){return t.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(e){return t.$util.Tips({title:e})}));else if(e.cancel)return t.$util.Tips({title:"您已取消绑定！"},{tab:5,url:"/pages/users/user_info/index"})}})})).catch((function(e){return t.$util.Tips({title:e})})):t.$util.Tips({title:"请填写验证码"}):t.$util.Tips({title:"请输入正确的手机号码！"}):t.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码！"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码！"}));case 5:return e.next=7,(0,u.verifyCode)().then((function(t){(0,u.registerVerify)(n.phone,"reset",t.data.key,n.captcha).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}))}));case 7:case"end":return e.stop()}}),e)})))()}}};e.default=c}}]);