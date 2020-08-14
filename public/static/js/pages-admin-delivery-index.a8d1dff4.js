(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-delivery-index"],{"056a":function(e,t,i){"use strict";function r(e){var t=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!t.test(e)}function n(e){var t=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!t.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isMoney=r,t.checkPhone=n},"5c7d6":function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"deliver-goods"},[r("header",[r("v-uni-view",{staticClass:"order-num acea-row row-between-wrapper"},[r("v-uni-view",{staticClass:"num line1"},[e._v("订单号："+e._s(e.order_id))]),r("v-uni-view",{staticClass:"name line1"},[r("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.delivery.nickname))])],1),r("v-uni-view",{staticClass:"address"},[r("v-uni-view",{staticClass:"name"},[e._v(e._s(e.delivery.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.delivery.user_phone))])]),r("v-uni-view",[e._v(e._s(e.delivery.user_address))])],1),r("v-uni-view",{staticClass:"line"},[r("v-uni-image",{attrs:{src:i("e201")}})],1)],1),r("v-uni-view",{staticClass:"wrapper"},[r("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[r("v-uni-view",[e._v("发货方式")]),r("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,i){return r("v-uni-view",{key:i,staticClass:"goods",class:e.active===i?"on":"",on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.changeType(t,i)}}},[e._v(e._s(t.title)),r("span",{staticClass:"iconfont icon-xuanzhong2"})])})),1)],1),e.logistics.length>0?[r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"list"},[r("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[r("v-uni-view",[e._v("发货方式")]),r("v-uni-view",{staticClass:"select-box"},[r("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].name))])],1)],1)],1),r("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[r("v-uni-view",[e._v("快递单号")]),r("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写快递单号"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}})],1)],1)]:e._e(),r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],staticClass:"list"},[r("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[r("v-uni-view",[e._v("送货人")]),r("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货人"},model:{value:e.delivery_name,callback:function(t){e.delivery_name=t},expression:"delivery_name"}})],1),r("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[r("v-uni-view",[e._v("送货电话")]),r("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货电话"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}})],1)],1)],2),r("v-uni-view",{staticStyle:{height:"1.2rem"}}),r("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveInfo.apply(void 0,arguments)}}},[e._v("确认提交")])],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},7228:function(e,t,i){var r=i("7f28");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("12df2ac6",r,!0,{sourceMap:!1,shadowMode:!1})},"7af3":function(e,t,i){"use strict";i.r(t);var r=i("b8a1"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"7f28":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*发货*/.deliver-goods header[data-v-61125546]{width:100%;background-color:#fff;margin-top:%?10?%}.deliver-goods header .order-num[data-v-61125546]{padding:0 %?30?%;border-bottom:1px solid #f5f5f5;height:%?67?%}.deliver-goods header .order-num .num[data-v-61125546]{width:%?430?%;font-size:%?26?%;color:#282828;position:relative}.deliver-goods header .order-num .num[data-v-61125546]:after{position:absolute;content:"";width:1px;height:%?30?%;background-color:#ddd;top:50%;margin-top:%?-15?%;right:0}.deliver-goods header .order-num .name[data-v-61125546]{width:%?260?%;font-size:%?26?%;color:#282828;text-align:center}.deliver-goods header .order-num .name .iconfont[data-v-61125546]{font-size:%?35?%;color:#477ef3;vertical-align:middle;margin-right:%?10?%}.deliver-goods header .address[data-v-61125546]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?30?%}.deliver-goods header .address .name[data-v-61125546]{font-size:%?34?%;color:#282828;margin-bottom:%?10?%}.deliver-goods header .address .name .phone[data-v-61125546]{margin-left:%?40?%}.deliver-goods header .line[data-v-61125546]{width:100%;height:%?3?%}.deliver-goods header .line uni-image[data-v-61125546]{width:100%;height:100%;display:block}.deliver-goods .wrapper[data-v-61125546]{width:100%;background-color:#fff}.deliver-goods .wrapper .item[data-v-61125546]{border-bottom:1px solid #f0f0f0;padding:0 %?30?%;height:%?96?%;font-size:%?32?%;color:#282828;position:relative}.deliver-goods .wrapper .item .mode[data-v-61125546]{width:%?460?%;height:100%;text-align:right}.deliver-goods .wrapper .item .mode .iconfont[data-v-61125546]{font-size:%?30?%;margin-left:%?13?%}.deliver-goods .wrapper .item .mode .goods ~ .goods[data-v-61125546]{margin-left:%?30?%}.deliver-goods .wrapper .item .mode .goods[data-v-61125546]{color:#bbb}.deliver-goods .wrapper .item .mode .goods.on[data-v-61125546]{color:#477ef3}.deliver-goods .wrapper .item .icon-up[data-v-61125546]{position:absolute;font-size:%?35?%;color:#2c2c2c;right:%?30?%}.deliver-goods .wrapper .item select[data-v-61125546]{direction:rtl;padding-right:%?60?%;position:relative;z-index:2}.deliver-goods .wrapper .item uni-input[data-v-61125546]::-webkit-input-placeholder{color:#bbb}.deliver-goods .wrapper .item uni-input[data-v-61125546]::placeholder{color:#bbb}.deliver-goods .confirm[data-v-61125546]{font-size:%?32?%;color:#fff;width:100%;height:%?100?%;background-color:#477ef3;text-align:center;line-height:%?100?%;position:fixed;bottom:0}.select-box[data-v-61125546]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}.select-box .pickerBox[data-v-61125546]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:100%;height:100%}',""]),e.exports=t},"83c2":function(e,t,i){"use strict";var r=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.getStatisticsInfo=a,t.getStatisticsMonth=o,t.getAdminOrderList=d,t.setAdminOrderPrice=s,t.setAdminOrderRemark=l,t.getAdminOrderDetail=c,t.getAdminOrderDelivery=u,t.setAdminOrderDelivery=v,t.getStatisticsTime=f,t.setOfflinePay=p,t.setOrderRefund=g,t.getLogistics=m,t.orderVerific=h;var n=r(i("f2c5"));function a(){return n.default.get("/admin/order/statistics",{},{login:!0})}function o(e){return n.default.get("/admin/order/data",e,{login:!0})}function d(e){return n.default.get("/admin/order/list",e,{login:!0})}function s(e){return n.default.post("/admin/order/price",e,{login:!0})}function l(e){return n.default.post("/admin/order/remark",e,{login:!0})}function c(e){return n.default.get("/admin/order/detail/"+e,{},{login:!0})}function u(e){return n.default.get("/admin/order/delivery/gain/"+e,{},{login:!0})}function v(e){return n.default.post("/admin/order/delivery/keep",e,{login:!0})}function f(e){return n.default.get("/admin/order/time",e,{login:!0})}function p(e){return n.default.post("/admin/order/offline",e,{login:!0})}function g(e){return n.default.post("/admin/order/refund",e,{login:!0})}function m(){return n.default.get("/logistics",{},{login:!1})}function h(e,t){return n.default.post("order/order_verific",{verify_code:e,is_confirm:t})}},"8f5f":function(e,t,i){"use strict";i.r(t);var r=i("5c7d6"),n=i("7af3");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("c2a6");var o,d=i("f0c5"),s=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"61125546",null,!1,r["a"],o);t["default"]=s.exports},b8a1:function(e,t,i){"use strict";var r=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=r(i("c964")),a=i("83c2"),o=i("056a"),d={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:"发货"},{type:"send",title:"送货"},{type:"fictitious",title:"无需发货"}],active:0,order_id:"",delivery:[],logistics:[],delivery_type:"express",delivery_name:"",delivery_id:"",seIndex:0}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.getIndex(),this.getLogistics()},methods:{changeType:function(e,t){this.active=t,this.delivery_type=e.type,this.delivery_name="",this.delivery_id=""},getIndex:function(){var e=this;(0,a.getAdminOrderDelivery)(e.order_id).then((function(t){e.delivery=t.data}),(function(t){e.$util.Tips({title:t})}))},getLogistics:function(){var e=this;(0,a.getLogistics)().then((function(t){e.logistics=t.data}),(function(t){e.$util.Tips({title:t})}))},saveInfo:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i,r,n,a,d,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e,r=i.delivery_type,n=i.logistics[i.seIndex].name,a=i.delivery_id,d=i.delivery_name,s={},s.order_id=i.order_id,s.delivery_type=i.delivery_type,t.t0=r,t.next="send"===t.t0?6:"express"===t.t0?14:"fictitious"===t.t0?20:22;break;case 6:if(d){t.next=8;break}return t.abrupt("return",i.$util.Tips({title:"请填写送货人姓名"}));case 8:if(a&&(0,o.checkPhone)(a)){t.next=10;break}return t.abrupt("return",i.$util.Tips({title:"请填写正确的手机号码"}));case 10:return s.delivery_name=d,s.delivery_id=a,i.setInfo(s),t.abrupt("break",22);case 14:if(a){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:"请填写快递单号"}));case 16:return s.delivery_name=n,s.delivery_id=a,i.setInfo(s),t.abrupt("break",22);case 20:return i.setInfo(s),t.abrupt("break",22);case 22:case"end":return t.stop()}}),t)})))()},setInfo:function(e){var t=this;(0,a.setAdminOrderDelivery)(e).then((function(e){t.$util.Tips({title:e.msg,icon:"success",mask:!0}),setTimeout((function(e){uni.navigateBack()}),2e3)}),(function(e){t.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value}}};t.default=d},c2a6:function(e,t,i){"use strict";var r=i("7228"),n=i.n(r);n.a},e201:function(e,t,i){e.exports=i.p+"static/img/line.05bf1c84.jpg"}}]);