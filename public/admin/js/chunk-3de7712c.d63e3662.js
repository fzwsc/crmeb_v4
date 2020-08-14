(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de7712c"],{"08ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v("用户管理")]),a("div",[a("Tabs",{on:{"on-click":e.onClickTab}},e._l(e.headeNum,(function(e,t){return a("TabPane",{key:t,attrs:{label:e.name,name:e.type}})})),1)],1)])]),a("Card",{staticClass:"ivu-mt listbox",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"userFrom",attrs:{model:e.userFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"18"}},[a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户搜索：","label-for":"nickname"}},[a("Input",{attrs:{placeholder:"请输入","element-id":"nickname",clearable:""},model:{value:e.userFrom.nickname,callback:function(t){e.$set(e.userFrom,"nickname",t)},expression:"userFrom.nickname"}})],1)],1)],1)],1),e.collapse?[a("Col",{attrs:{span:"18"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户等级：","label-for":"level"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"level",clearable:""},model:{value:e.userFrom.level,callback:function(t){e.$set(e.userFrom,"level",t)},expression:"userFrom.level"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),e._l(e.levelList,(function(t,s){return a("Option",{key:s,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],2)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户分组：","label-for":"group_id"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"group_id",clearable:""},model:{value:e.userFrom.group_id,callback:function(t){e.$set(e.userFrom,"group_id",t)},expression:"userFrom.group_id"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),e._l(e.groupList,(function(t,s){return a("Option",{key:s,attrs:{value:t.id}},[e._v(e._s(t.group_name))])}))],2)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户标签：","label-for":"label_id"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"label_id",clearable:""},model:{value:e.userFrom.label_id,callback:function(t){e.$set(e.userFrom,"label_id",t)},expression:"userFrom.label_id"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),e._l(e.labelLists,(function(t,s){return a("Option",{key:s,attrs:{value:t.id}},[e._v(e._s(t.label_name))])}))],2)],1)],1)],1),a("Col",{attrs:{span:"18"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"国家：","label-for":"country"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"country",clearable:""},on:{"on-change":e.changeCountry},model:{value:e.userFrom.country,callback:function(t){e.$set(e.userFrom,"country",t)},expression:"userFrom.country"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),a("Option",{attrs:{value:"domestic"}},[e._v("中国")]),a("Option",{attrs:{value:"abroad"}},[e._v("外国")])],1)],1)],1),"domestic"===e.userFrom.country?a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"省份："}},[a("Cascader",{attrs:{data:e.addresData,value:e.address},on:{"on-change":e.handleChange},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1):e._e()],1),a("Col",{attrs:{span:"18"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"性别：","label-for":"sex"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.userFrom.sex,callback:function(t){e.$set(e.userFrom,"sex",t)},expression:"userFrom.sex"}},[a("Radio",{attrs:{label:""}},[a("span",[e._v("全部")])]),a("Radio",{attrs:{label:"1"}},[a("span",[e._v("男")])]),a("Radio",{attrs:{label:"2"}},[a("span",[e._v("女")])]),a("Radio",{attrs:{label:"0"}},[a("span",[e._v("保密")])])],1)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"身份：","label-for":"is_promoter"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.userFrom.is_promoter,callback:function(t){e.$set(e.userFrom,"is_promoter",t)},expression:"userFrom.is_promoter"}},[a("Radio",{attrs:{label:""}},[a("span",[e._v("全部")])]),a("Radio",{attrs:{label:"1"}},[a("span",[e._v("推广员")])]),a("Radio",{attrs:{label:"0"}},[a("span",[e._v("普通用户")])])],1)],1)],1)],1),a("Col",{attrs:{span:"18"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"访问情况：","label-for":"user_time_type"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"user_time_type",clearable:""},model:{value:e.userFrom.user_time_type,callback:function(t){e.$set(e.userFrom,"user_time_type",t)},expression:"userFrom.user_time_type"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),a("Option",{attrs:{value:"visitno"}},[e._v("时间段未访问")]),a("Option",{attrs:{value:"visit"}},[e._v("时间段访问过")]),a("Option",{attrs:{value:"add_time"}},[e._v("首次访问")])],1)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"消费情况(下单次数)：","label-for":"pay_count"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"pay_count",clearable:""},model:{value:e.userFrom.pay_count,callback:function(t){e.$set(e.userFrom,"pay_count",t)},expression:"userFrom.pay_count"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),a("Option",{attrs:{value:"-1"}},[e._v("0次")]),a("Option",{attrs:{value:"0"}},[e._v("1次以上")]),a("Option",{attrs:{value:"1"}},[e._v("2次以上")]),a("Option",{attrs:{value:"2"}},[e._v("3次以上")]),a("Option",{attrs:{value:"3"}},[e._v("4次以上")]),a("Option",{attrs:{value:"4"}},[e._v("5次以上")])],1)],1)],1)],1),a("Col",{attrs:{span:"18"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"选择时间：","label-for":"user_time"}},[a("DatePicker",{staticClass:"mr20",staticStyle:{width:"300px"},attrs:{editable:!1,value:e.timeVal,format:"yyyy/MM/dd",type:"datetimerange",placement:"bottom-start",placeholder:"自定义时间",options:e.options},on:{"on-change":e.onchangeTime}})],1)],1)],1)]:e._e(),a("Col",{staticClass:"ivu-text-right userFrom",attrs:{span:"6"}},[a("FormItem",[a("Button",{staticClass:"mr15",attrs:{type:"primary",icon:"ios-search",label:"default"},on:{click:e.userSearchs}},[e._v("搜索")]),a("Button",{staticClass:"ResetSearch",on:{click:function(t){return e.reset("userFrom")}}},[e._v("重置")]),a("a",{staticClass:"ivu-ml-8 font14 ml10",on:{click:function(t){e.collapse=!e.collapse}}},[e.collapse?[e._v("\n                                    收起 "),a("Icon",{attrs:{type:"ios-arrow-up"}})]:[e._v("\n                                    展开 "),a("Icon",{attrs:{type:"ios-arrow-down"}})]],2)],1)],1)],2)],1),a("Divider",{attrs:{dashed:""}}),a("Row",{staticClass:"mt20",attrs:{type:"flex",justify:"space-between"}},[a("Col",{attrs:{span:"24"}},[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-coupon"],expression:"['admin-user-coupon']"}],staticClass:"mr20",attrs:{type:"primary"},on:{click:e.onSend}},[e._v("发送优惠券")]),"wechat"===e.userFrom.user_type?a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-wechat-news"],expression:"['admin-wechat-news']"}],staticClass:"greens mr20",attrs:{size:"default"},on:{click:e.onSendPic}},[a("Icon",{attrs:{type:"md-list"}}),e._v("\n                        发送图文消息\n                    ")],1):e._e(),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-group_set"],expression:"['admin-user-group_set']"}],staticClass:"mr20",on:{click:e.setGroup}},[e._v("批量设置分组")]),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-set_label"],expression:"['admin-user-set_label']"}],staticClass:"mr20",on:{click:e.setLabel}},[e._v("批量设置标签")])],1),e.selectionList.length?a("Col",{staticClass:"userAlert",attrs:{span:"24"}},[a("Alert",{attrs:{"show-icon":""}},[e._v(" 已选择"),a("i",{staticClass:"userI"},[e._v(" "+e._s(e.selectionList.length)+" ")]),e._v("项")])],1):e._e()],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns,data:e.userLists,"highlight-row":"",loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},on:{"on-selection-change":e.onSelectTab},scopedSlots:e._u([{key:"avatars",fn:function(e){var t=e.row;e.index;return[a("viewer",[a("div",{staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatar,expression:"row.avatar"}]})])])]}},{key:"nickname",fn:function(t){var s=t.row;t.index;return[a("div",{staticClass:"acea-row"},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:"男"===s.sex,expression:"row.sex==='男'"}],staticClass:"mr5",attrs:{type:"md-male",color:"#2db7f5",size:"15"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:"女"===s.sex,expression:"row.sex==='女'"}],staticClass:"mr5",attrs:{type:"md-female",color:"#ed4014",size:"15"}}),a("div",{domProps:{textContent:e._s(s.nickname)}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:s.vip_name,expression:"row.vip_name"}],staticClass:"vipName"},[e._v(e._s(s.vip_name))])]}},{key:"action",fn:function(t){var s=t.row,r=t.index;return[a("a",{on:{click:function(t){return e.edit(s)}}},[e._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),[a("Dropdown",{on:{"on-click":function(t){return e.changeMenu(s,t,r)}}},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n                                更多\n                                "),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"1"}},[e._v("账户详情")]),a("DropdownItem",{attrs:{name:"2"}},[e._v("积分余额")]),a("DropdownItem",{attrs:{name:"3"}},[e._v("赠送会员")]),s.vip_name?a("DropdownItem",{attrs:{name:"4"}},[e._v("清除等级")]):e._e(),a("DropdownItem",{attrs:{name:"5"}},[e._v("设置分组")]),a("DropdownItem",{attrs:{name:"6"}},[e._v("设置标签")])],1)],1)]]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,current:e.userFrom.page,"show-elevator":"","show-total":"","page-size":e.userFrom.limit},on:{"on-change":e.pageChange}})],1)],1),a("edit-from",{ref:"edits",attrs:{FromData:e.FromData},on:{submitFail:e.submitFail}}),a("send-from",{ref:"sends",attrs:{userIds:e.user_ids}}),a("user-details",{ref:"userDetails"}),a("Modal",{staticClass:"modelBox",attrs:{scrollable:"",title:"发送消息",width:"1200",height:"800","footer-hide":""},model:{value:e.modal13,callback:function(t){e.modal13=t},expression:"modal13"}},[e.modal13?a("news-category",{attrs:{isShowSend:e.isShowSend,userIds:e.user_ids,scrollerHeight:e.scrollerHeight,contentTop:e.contentTop,contentWidth:e.contentWidth,maxCols:e.maxCols}}):e._e()],1)],1)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("1da1")),i=a("ade3"),o=a("2f62"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("首次访问：")]),a("span",{staticClass:"expand-value"},[e._v(" "+e._s(e._f("formatDate")(e.row.add_time)))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("近次访问：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e._f("formatDate")(e.row.last_time)))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("身份证号：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.card_id))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("手机号：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.phone))])])],1),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("真实姓名：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.real_name))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("标签：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.labels))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("生日：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.birthday))])]),a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("地址：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.addres))])])],1),a("Row",{staticClass:"expand-row"},[a("Col",{attrs:{span:"6"}},[a("span",{staticClass:"expand-key"},[e._v("备注：")]),a("span",{staticClass:"expand-value"},[e._v(e._s(e.row.mark))])])],1)],1)},c=[],u=a("61f7"),d={name:"table-expand",filters:{formatDate:function(e){if(0!==e){var t=new Date(1e3*e);return Object(u["a"])(t,"yyyy-MM-dd hh:mm")}}},props:{row:Object}},m=d,p=(a("b70e"),a("2877")),h=Object(p["a"])(m,l,c,!1,null,"771e33dc",null),v=h.exports,f=a("c24f"),g=a("31b4"),b=a("a8e0"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"用户详情","mask-closable":!1,width:"900"},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[e.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("div",{staticClass:"acea-row"},[a("div",{staticClass:"avatar mr15"},[a("img",{attrs:{src:e.psInfo.avatar}})]),a("div",{staticClass:"dashboard-workplace-header-tip"},[a("p",{staticClass:"dashboard-workplace-header-tip-title",domProps:{textContent:e._s(e.psInfo.nickname||"-")}}),a("div",{staticClass:"dashboard-workplace-header-tip-desc"},e._l(e.detailsData,(function(t,s){return a("span",{key:s,staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v(e._s(t.title+"："+t.value))])})),0)])]),a("Row",{staticClass:"mt25",attrs:{type:"flex",justify:"space-between"}},[a("Col",{staticClass:"user_menu",attrs:{span:"4"}},[a("Menu",{attrs:{theme:e.theme2,"active-name":"order"},on:{"on-select":e.changeType}},e._l(e.list,(function(t,s){return a("MenuItem",{key:s,attrs:{name:t.val}},[e._v("\n                        "+e._s(t.label)+"\n                    ")])})),1)],1),a("Col",{attrs:{span:"20"}},[a("Table",{ref:"table",attrs:{columns:e.columns,data:e.userLists,"max-height":"400",loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,"show-elevator":"","show-total":"","page-size":e.userFrom.limit},on:{"on-change":e.changeType}})],1)],1)],1)],1)],1)},w=[],y={name:"userDetails",data:function(){return{theme2:"light",list:[{val:"order",label:"消费记录"},{val:"integral",label:"积分明细"},{val:"sign",label:"签到记录"},{val:"coupon",label:"持有优惠券"},{val:"balance_change",label:"余额变动"},{val:"spread",label:"好友关系"}],modals:!1,spinShow:!1,detailsData:[],userId:0,loading:!1,userFrom:{type:"order",page:1,limit:20},total:0,columns:[],userLists:[],psInfo:{}}},created:function(){},methods:{getDetails:function(e){var t=this;this.userId=e,this.spinShow=!0,Object(f["d"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:200===a.status?(s=a.data,t.detailsData=s.headerList,t.psInfo=s.ps_info,t.changeType(name),t.spinShow=!1):(t.spinShow=!1,t.$Message.error(a.msg));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},changeType:function(e){var t=this;this.loading=!0,this.userFrom.type=e,""===this.userFrom.type&&(this.userFrom.type="order");var a={id:this.userId,datas:this.userFrom};Object(f["i"])(a).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(200!==a.status){e.next=21;break}s=a.data,t.userLists=s.list,t.total=s.count,e.t0=t.userFrom.type,e.next="order"===e.t0?7:"integral"===e.t0?9:"sign"===e.t0?11:"coupon"===e.t0?13:"balance_change"===e.t0?15:17;break;case 7:return t.columns=[{title:"订单ID",key:"order_id",minWidth:160},{title:"收货人",key:"real_name",minWidth:100},{title:"商品数量",key:"total_num",minWidth:90},{title:"商品总价",key:"total_price",minWidth:110},{title:"实付金额",key:"pay_price",minWidth:120},{title:"交易完成时间",key:"pay_time",minWidth:120}],e.abrupt("break",18);case 9:return t.columns=[{title:"来源/用途",key:"title",minWidth:120},{title:"积分变化",key:"number",minWidth:120},{title:"变化后积分",key:"balance",minWidth:120},{title:"日期",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 11:return t.columns=[{title:"动作",key:"title",minWidth:120},{title:"获得积分",key:"number",minWidth:120},{title:"签到时间",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 13:return t.columns=[{title:"优惠券名称",key:"coupon_title",minWidth:120},{title:"面值",key:"coupon_price",minWidth:120},{title:"有效期",key:"_add_time",minWidth:120},{title:"所需积分",key:"integral",minWidth:120},{title:"兑换时间",key:"_add_time",minWidth:120}],e.abrupt("break",18);case 15:return t.columns=[{title:"变动金额",key:"number",minWidth:120},{title:"变动后",key:"balance",minWidth:120},{title:"类型",key:"type",minWidth:120},{title:"创建时间",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 17:t.columns=[{title:"ID",key:"uid",minWidth:120},{title:"昵称",key:"nickname",minWidth:120},{title:"等级",key:"type",minWidth:120},{title:"加入时间",key:"add_time",minWidth:120}];case 18:t.loading=!1,e.next=23;break;case 21:t.loading=!1,t.$Message.error(a.msg);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}},k=y,F=(a("8d54"),a("a2df"),Object(p["a"])(k,_,w,!1,null,"587a71fe",null)),x=F.exports,C=a("c42b"),D=a("2e8e");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={name:"user_list",components:{expandRow:v,editFrom:g["a"],sendFrom:b["a"],userDetails:x,newsCategory:C["a"]},data:function(){return{options:{shortcuts:[{text:"今天",value:function(){var e=new Date,t=new Date;return t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[t,e]}},{text:"昨天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()))),[t,e]}},{text:"最近7天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-6))),[t,e]}},{text:"最近30天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),[t,e]}},{text:"本月",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),[t,e]}},{text:"本年",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),0,1))),[t,e]}}]},collapse:!1,headeNum:[{type:"",name:"全部"},{type:"wechat",name:"微信公众号"},{type:"routine",name:"微信小程序"},{type:"h5",name:"H5"}],address:[],addresData:D["a"],isShowSend:!0,modal13:!1,maxCols:4,scrollerHeight:"600",contentTop:"130",contentWidth:"98%",grid:{xl:8,lg:8,md:12,sm:24,xs:24},grid2:{xl:18,lg:16,md:12,sm:24,xs:24},loading:!1,total:0,userFrom:{label_id:"",user_type:"",status:"",sex:"",is_promoter:"",country:"",pay_count:"",user_time_type:"",user_time:"",nickname:"",province:"",city:"",page:1,limit:15,level:"",group_id:""},columns:[{type:"expand",width:40,render:function(e,t){return e(v,{props:{row:t.row}})}},{type:"selection",width:60,align:"center"},{title:"ID",key:"uid",width:80},{title:"头像",slot:"avatars",minWidth:60},{title:"姓名",slot:"nickname",minWidth:150},{title:"会员等级",key:"level",minWidth:100},{title:"分组",key:"group_id",minWidth:100},{title:"推荐人",key:"spread_uid_nickname",minWidth:100},{title:"用户类型",key:"user_type",minWidth:100},{title:"余额",key:"now_money",sortable:!0,minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],userLists:[],FromData:null,selectionList:[],user_ids:"",selectedData:[],timeVal:[],array_ids:[],groupList:[],levelList:[],labelFrom:{page:1,limit:""},labelLists:[]}},computed:$($({},Object(o["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},mounted:function(){this.userGroup(),this.levelLists(),this.groupLists()},methods:{groupLists:function(){var e=this;this.loading=!0,Object(f["s"])(this.labelFrom).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=a.data,e.labelLists=s.list;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},onClickTab:function(e){this.userFrom.page=1,this.userFrom.user_type=e,this.getList()},userGroup:function(){var e=this,t={page:1,limit:""};Object(f["q"])(t).then((function(t){e.groupList=t.data.list}))},levelLists:function(){var e=this,t={page:1,limit:"",title:"",is_show:1};Object(f["k"])(t).then((function(t){e.levelList=t.data.list}))},setGroup:function(){var e=this;if(0===this.selectionList.length)this.$Message.warning("请选择要设置分组的用户");else{var t={uids:this.array_ids};this.$modalForm(Object(f["u"])(t)).then((function(){return e.$refs.sends.getList()}))}},setLabel:function(){var e=this;if(0===this.selectionList.length)this.$Message.warning("请选择要设置标签的用户");else{var t={uids:this.array_ids};this.$modalForm(Object(f["v"])(t)).then((function(){return e.$refs.sends.getList()}))}},changeCountry:function(){"abroad"!==this.userFrom.country&&this.userFrom.country||(this.selectedData=[],this.userFrom.province="",this.userFrom.city="",this.address=[])},handleChange:function(e,t){this.selectedData=t.map((function(e){return e.label})),this.userFrom.province=this.selectedData[0],this.userFrom.city=this.selectedData[1]},onchangeTime:function(e){this.timeVal=e,this.userFrom.user_time=this.timeVal.join("-")},changeMenu:function(e,t,a){var s=this,r=[];r.push(e.uid);var n={uids:r};switch(t){case"1":this.$refs.userDetails.modals=!0,this.$refs.userDetails.getDetails(e.uid);break;case"2":this.getOtherFrom(e.uid);break;case"3":this.giveLevel(e.uid);break;case"5":this.$modalForm(Object(f["u"])(n)).then((function(){return s.$refs.sends.getList()}));break;case"6":this.$modalForm(Object(f["v"])(n)).then((function(){return s.$refs.sends.getList()}));break;default:this.del(e,"清除 【 "+e.nickname+" 】的会员等级",a)}},giveLevel:function(e){var t=this;Object(f["g"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==a.data.status){e.next=2;break}return e.abrupt("return",t.$authLapse(a.data));case 2:t.FromData=a.data,t.$refs.edits.modals=!0;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},del:function(e,t,a){var s=this,r={title:t,num:a,url:"user/del_level/".concat(e.uid),method:"DELETE",ids:""};this.$modalSure(r).then((function(e){s.$Message.success(e.msg),s.getList()})).catch((function(e){s.$Message.error(e.msg)}))},submitModel:function(){this.getList()},getList:function(){var e=this;this.loading=!0,this.userFrom.user_type=this.userFrom.user_type||"",this.userFrom.status=this.userFrom.status||"",this.userFrom.sex=this.userFrom.sex||"",this.userFrom.is_promoter=this.userFrom.is_promoter||"",this.userFrom.country=this.userFrom.country||"",this.userFrom.user_time_type=this.userFrom.user_time_type||"",this.userFrom.pay_count=this.userFrom.pay_count||"",this.userFrom.label_id=this.userFrom.label_id||"",Object(f["t"])(this.userFrom).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=a.data,e.userLists=s.list,e.total=s.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.userFrom.page=e,this.getList()},userSearchs:function(){this.userFrom.page=1,this.getList()},reset:function(e){this.userFrom={user_type:"",status:"",sex:"",is_promoter:"",country:"",pay_count:"",user_time_type:"",user_time:"",nickname:"",page:1,limit:20},this.timeVal=[],this.getList()},getUserFrom:function(e){var t=this;Object(f["f"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==a.data.status){e.next=2;break}return e.abrupt("return",t.$authLapse(a.data));case 2:t.FromData=a.data,t.$refs.edits.modals=!0;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getOtherFrom:function(e){var t=this;Object(f["e"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==a.data.status){e.next=2;break}return e.abrupt("return",t.$authLapse(a.data));case 2:t.FromData=a.data,t.$refs.edits.modals=!0;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onchangeIsShow:function(e){var t=this,a={id:e.uid,status:e.status};Object(f["j"])(a).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onSelectTab:function(e){this.selectionList=e;var t=[];this.selectionList.map((function(e){t.push(e.uid)})),this.array_ids=t,this.user_ids=t.join(",")},onSend:function(){0===this.selectionList.length?this.$Message.warning("请选择要发送优惠券的用户"):(this.$refs.sends.modals=!0,this.$refs.sends.getList())},onSendPic:function(){0===this.selectionList.length?this.$Message.warning("请选择要发送图文消息的用户"):this.modal13=!0},edit:function(e){this.getUserFrom(e.uid)},submitFail:function(){this.getList()}}},L=j,M=(a("d00f"),Object(p["a"])(L,s,r,!1,null,"7f22739a",null));t["default"]=M.exports},"12b5":function(e,t,a){},"31b4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.FromData?a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":e.cancel},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[["/marketing/coupon/save.html"===e.FromData.action?a("div",{staticClass:"radio acea-row row-middle"},[a("div",{staticClass:"name ivu-form-item-content"},[e._v("优惠券类型")]),a("Radio-group",{on:{"on-change":e.couponsType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("Radio",{attrs:{label:0}},[e._v("通用券")]),a("Radio",{attrs:{label:1}},[e._v("品类券")]),a("Radio",{attrs:{label:2}},[e._v("商品券")])],1)],1):e._e()],a("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:e.config,rule:Array.from(e.FromData.rules),handleIcon:"false"},on:{"on-submit":e.onSubmit}})],2)],1):e._e()},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=a("9860"),o=a.n(i),l=a("6b6c"),c=a("2f62");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"edit",components:{formCreate:o.a.$form()},computed:d({},Object(c["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(e,t){200===e.status?t.url=e.data.src:this.Message.error(e.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(e){var t=this,a={};a=e,Object(l["a"])({url:this.FromData.action,method:this.FromData.method,data:a}).then((function(e){t.$parent.getList(),t.$Message.success(e.msg),t.modals=!1,setTimeout((function(){t.$emit("submitFail")}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},cancel:function(){this.type=0}}},p=m,h=(a("7577"),a("2877")),v=Object(h["a"])(p,s,r,!1,null,"345ab15a",null);t["a"]=v.exports},"3b2b":function(e,t,a){var s=a("7726"),r=a("5dbc"),n=a("86cc").f,i=a("9093").f,o=a("aae3"),l=a("0bfb"),c=s.RegExp,u=c,d=c.prototype,m=/a/g,p=/a/g,h=new c(m)!==m;if(a("9e1e")&&(!h||a("79e5")((function(){return p[a("2b4c")("match")]=!1,c(m)!=m||c(p)==p||"/a/i"!=c(m,"i")})))){c=function(e,t){var a=this instanceof c,s=o(e),n=void 0===t;return!a&&s&&e.constructor===c&&n?e:r(h?new u(s&&!n?e.source:e,t):u((s=e instanceof c)?e.source:e,s&&n?l.call(e):t),a?this:d,c)};for(var v=function(e){e in c||n(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},f=i(u),g=0;f.length>g;)v(f[g++]);d.constructor=c,c.prototype=d,a("2aba")(s,"RegExp",c)}a("7a56")("RegExp")},"4c74":function(e,t,a){},"5d34":function(e,t,a){},"61f7":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("3b2b"),a("a481");function s(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var s in a)if(new RegExp("(".concat(s,")")).test(t)){var n=a[s]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?n:r(n))}return t}function r(e){return("00"+e).substr(e.length)}},6689:function(e,t,a){},7577:function(e,t,a){"use strict";var s=a("4c74"),r=a.n(s);r.a},"8d54":function(e,t,a){"use strict";var s=a("d219"),r=a.n(s);r.a},a2df:function(e,t,a){"use strict";var s=a("aabe"),r=a.n(s);r.a},a8e0:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{"z-index":100,scrollable:"","footer-hide":"",closable:"",title:"发送优惠券","mask-closable":!1,width:"900"},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[a("div",{staticClass:"acea-row"},[a("span",{staticClass:"sp"},[e._v("优惠券名称：")]),a("Input",{staticStyle:{width:"60%"},attrs:{search:"","enter-button":"",placeholder:"请输入优惠券名称"},on:{"on-search":e.userSearchs},model:{value:e.page.title,callback:function(t){e.$set(e.page,"title",t)},expression:"page.title"}})],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns,data:e.couponList,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.row,r=t.index;return[a("a",{on:{click:function(t){return e.sendGrant(s,"发送优惠券",r)}}},[e._v("发送")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,"show-elevator":"","show-total":"","page-size":e.page.limit},on:{"on-change":e.pageChange}})],1)],1)],1)},r=[],n=(a("96cf"),a("1da1")),i=a("c24f"),o={name:"send",props:{userIds:{type:String,default:""}},data:function(){return{modals:!1,loading:!1,couponList:[],columns:[{title:"优惠券名称",key:"title",align:"center",minWidth:100},{title:"优惠卷面值",key:"coupon_price",align:"center",minWidth:80},{title:"优惠券最低消费",key:"use_min_price",align:"center",minWidth:150},{title:"优惠券有效期限",key:"coupon_time",align:"center",minWidth:120},{title:"操作",slot:"action",align:"center",width:120}],page:{page:1,limit:15,title:""},total:0}},methods:{getList:function(e){var t=this;this.loading=!0,Object(i["a"])(this.page).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:200===a.status?(s=a.data,t.couponList=s.list,t.total=s.count,t.loading=!1):(t.loading=!1,t.$Message.error(a.msg));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},userSearchs:function(){this.getList()},pageChange:function(e){this.page.page=e,this.getList()},sendGrant:function(e,t,a){var s=this,r={title:t,num:a,url:"marketing/coupon/user/grant",method:"post",ids:{id:e.id,uid:this.userIds}};this.$modalSure(r).then((function(e){s.$Message.success(e.msg)})).catch((function(e){s.$Message.error(e.msg)}))}}},l=o,c=(a("de02"),a("2877")),u=Object(c["a"])(l,s,r,!1,null,"e7b04104",null);t["a"]=u.exports},aabe:function(e,t,a){},b70e:function(e,t,a){"use strict";var s=a("5d34"),r=a.n(s);r.a},d00f:function(e,t,a){"use strict";var s=a("6689"),r=a.n(s);r.a},d219:function(e,t,a){},de02:function(e,t,a){"use strict";var s=a("12b5"),r=a.n(s);r.a}}]);