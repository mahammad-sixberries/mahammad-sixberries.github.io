(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{517:function(t,e,n){var content=n(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("f5fa9cfe",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n(517)},520:function(t,e,n){(e=n(8)(!1)).push([t.i,'.font-family-digital[data-v-7fbe87e0]{font-family:"Digital-7",sans-serif!important}',""]),t.exports=e},521:function(t,e,n){"use strict";n.r(e);n(48);var r={name:"Clock",data:function(){return{date:this.$moment().format("ddd - MMM DD, YYYY"),time:this.$moment().format("hh:mm:ss A"),fullscreen:!0}},created:function(){var t=this;setInterval((function(){t.setTime()}),1e3)},methods:{setTime:function(){this.time=this.$moment().format("hh:mm:ss A"),document.title=this.time+" | Clock"},toggle:function(){this.$refs.fullscreen.toggle()},fullscreenChange:function(t){this.fullscreen=t}}},o=(n(519),n(73)),c=n(108),l=n.n(c),m=n(186),d=n(518),v=n(515),f=n(509),h=n(545),_=n(157),y=n(546),x=n(513),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("fullscreen",{ref:"fullscreen",on:{change:t.fullscreenChange}},[n("v-container",{attrs:{bg:"","pl-0":"","pr-0":"","fill-height":"","grid-list-md":"","text-xs-center":"",tag:"div"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",[n("v-card",[n("v-card-title",{attrs:{"primary-title":"",padding:"0",right:""}},[n("v-card-actions",[n("v-btn",{attrs:{icon:"",left:"",color:"blue",small:""},on:{click:t.toggle}},[n("v-icon",[t._v("mdi-fullscreen")])],1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("v-card-text",{class:"text-sm-h1 text-h4 text-center font-family-"+t.$defaultFont},[t._v("\n              "+t._s(t.time)+"\n            ")]),t._v(" "),n("v-card-text",{class:"text-sm-h1 text-h4 text-center font-family-"+t.$defaultFont},[t._v("\n              "+t._s(t.date)+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"7fbe87e0",null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VContainer:f.a,VFlex:h.a,VIcon:_.a,VLayout:y.a,VSpacer:x.a})},555:function(t,e,n){var content=n(601);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("14fc701f",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n(555)},601:function(t,e,n){(e=n(8)(!1)).push([t.i,'.font-family-digital[data-v-78b72cd1]{font-family:"Digital-7",sans-serif!important}',""]),t.exports=e},644:function(t,e,n){"use strict";n.r(e);n(19),n(378),n(88),n(55),n(49),n(168),n(74),n(48);var r=n(3),o=n(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Timer",data:function(){return{metaTitle:"Online Timer - Countdown - V Clock Timer",metaDescription:"Set the hour, minute, and second for the online countdown timer, and start it. Alternatively, you can set the date and time to count till (or from) the event.",metaKeywords:"online timer, online countdown, timer, countdown timer, timer online, date timer, virtual timer, holidays countdown, timer for free, holidays, weekends, timer app, hours, minutes,vClockTimer",date:this.$moment().format("ddd - MMM DD, YYYY"),time:null,menu:{date:!1,time:!1},dialog:!1,timer:{},days:new Array(30).fill(null).map((function(t,i){return i})),hours:new Array(24).fill(null).map((function(t,i){return i})),minutes:new Array(60).fill(null).map((function(t,i){return i})),seconds:new Array(60).fill(null).map((function(t,i){return i}))}},computed:l({},Object(o.d)(["timers"])),created:function(){var t=this;this.setTimer(),this.setTime(),setInterval((function(){t.setTime()}),1e3)},methods:{setTime:function(){var t=this;this.time=this.$moment().format("hh:mm:ss A"),document.title=this.time+" | Clock",this.timers.forEach((function(e){e.enabled&&t.setValue(e)})),this.$store.set("timers",this.timers),this.$forceUpdate()},setValue:function(t){var e;if(0===t.tab)t.end=this.$moment(t.end),t.end.subtract(1,"second"),e=t.end.diff(t.start);else if(1===t.tab){e=this.$moment("".concat(t.date," ").concat(t.time),"YYYY-MM-DD HH:mm:ss").diff()}var n=this.$moment.duration(e),r="";n.years()&&(r+="".concat(Math.abs(n.years())," years ")),n.months()&&(r+="".concat(Math.abs(n.months())," months ")),n.days()&&(r+="".concat(Math.abs(n.days())," days ")),r+="".concat(Math.abs(n.hours()),":").concat(Math.abs(n.minutes()),":").concat(Math.abs(n.seconds())),t.value=r,t.passed=!1,0===e?(t.enabled=!1,this.resetTimer(t)):e<0&&(t.passed=!0)},setTimer:function(){this.timer={enabled:!0,tab:0,title:"Timer",date:this.$moment().format("YYYY-MM-DD"),time:this.$moment().format("HH:mm:ss"),day:0,hour:0,minute:0,second:0}},addTimer:function(){this.resetTimer(this.timer),this.timers.push(l(l({},this.timer),{},{id:Date.now()})),this.setTimer(),this.dialog=!1},updateTimer:function(){var t=this,e=this.timers.find((function(e){return e.id===t.timer.id}));this.resetTimer(this.timer),Object.assign(e,this.timer),this.setTimer(),this.dialog=!1},editTimer:function(t){this.timer=l({},t),this.dialog=!0},removeTimer:function(t){this.timers.splice(t,1)},resetTimer:function(t){t.start=this.$moment(),t.end=this.$moment().add({day:t.day,hour:t.hour,minute:t.minute,second:t.second+1}),this.setValue(t)}},head:function(){return{title:this.metaTitle,meta:[{hid:"description",name:"description",content:this.metaDescription},{hid:"keywords",name:"keywords",content:this.metaKeywords}]}}},d=(n(600),n(73)),v=n(108),f=n.n(v),h=n(186),_=n(518),y=n(515),x=n(632),k=n(637),T=n(633),w=n(551),V=n(157),C=n(158),$=n(101),D=n(65),O=n(560),M=n(635),j=n(638),Y=n(513),A=n(636),S=n(647),P=n(645),E=n(629),I=n(628),F=n(646),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clock"),t._v(" "),n("v-row",[t._l(t.timers,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"4",md:"3"}},[n("v-card",{staticClass:"card"},[n("v-card-title",[n("span",[t._v(t._s(e.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-title",{on:{click:function(n){return t.editTimer(e)}}},[t._v("Edit")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.removeTimer(r)}}},[t._v("Delete")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{class:"text-h6 text-center font-family-"+t.$defaultFont},[t._v("\n          "+t._s(e.passed?"+":"")+" "+t._s(e.value)+"\n        ")]),t._v(" "),1==e.tab?n("v-card-actions",{staticClass:"justify-center"},[t._v("\n          "+t._s(t._f("date")(e.date))+" - "+t._s(e.time)+"\n        ")]):t._e(),t._v(" "),0==e.tab?n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(n){return t.resetTimer(e)}}},[t._v(" Reset ")]),t._v(" "),e.enabled?n("v-btn",{attrs:{color:"error"},on:{click:function(t){e.enabled=!1}}},[t._v("\n            Stop\n          ")]):n("v-btn",{attrs:{color:"success"},on:{click:function(t){e.enabled=!0}}},[t._v("\n            Start\n          ")]),t._v(" "),n("v-spacer")],1):t._e()],1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[n("v-card",{staticClass:"card"},[n("v-card-actions",[n("v-btn",{staticClass:"center",attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v("\n            Add\n          ")])],1)],1)],1)],2),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v(" "+t._s(t.timer.id?"Edit":"Add")+" ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",label:"Title"},model:{value:t.timer.title,callback:function(e){t.$set(t.timer,"title",e)},expression:"timer.title"}}),t._v(" "),n("v-tabs",{model:{value:t.timer.tab,callback:function(e){t.$set(t.timer,"tab",e)},expression:"timer.tab"}},[n("v-tab",[t._v("Countdown")]),t._v(" "),n("v-tab",[t._v("Date and time")])],1),t._v(" "),n("v-tabs-items",{model:{value:t.timer.tab,callback:function(e){t.$set(t.timer,"tab",e)},expression:"timer.tab"}},[n("v-tab-item",{staticClass:"pt-4"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.hours,label:"Hours"},model:{value:t.timer.hour,callback:function(e){t.$set(t.timer,"hour",e)},expression:"timer.hour"}})],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.minutes,label:"Minutes"},model:{value:t.timer.minute,callback:function(e){t.$set(t.timer,"minute",e)},expression:"timer.minute"}})],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.seconds,label:"Seconds"},model:{value:t.timer.second,callback:function(e){t.$set(t.timer,"second",e)},expression:"timer.second"}})],1)],1)],1),t._v(" "),n("v-tab-item",{staticClass:"pt-4"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{outlined:"",label:"Date","append-icon":"mdi-calendar",readonly:""},model:{value:t.timer.date,callback:function(e){t.$set(t.timer,"date",e)},expression:"timer.date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu.date,callback:function(e){t.$set(t.menu,"date",e)},expression:"menu.date"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menu.date=!1}},model:{value:t.timer.date,callback:function(e){t.$set(t.timer,"date",e)},expression:"timer.date"}})],1)],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{outlined:"",label:"Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:t.timer.time,callback:function(e){t.$set(t.timer,"time",e)},expression:"timer.time"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu.time,callback:function(e){t.$set(t.menu,"time",e)},expression:"menu.time"}},[t._v(" "),n("v-time-picker",{attrs:{"use-seconds":"","full-width":""},on:{"click:second":function(e){t.menu.time=!1}},model:{value:t.timer.time,callback:function(e){t.$set(t.timer,"time",e)},expression:"timer.time"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),t._v(" "),t.timer.id?n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.updateTimer()}}},[t._v("\n          Edit\n        ")]):n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.addTimer()}}},[t._v(" Add ")])],1)],1)],1)],1)}),[],!1,null,"78b72cd1",null);e.default=component.exports;f()(component,{Clock:n(521).default}),f()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:x.a,VDatePicker:k.a,VDialog:T.a,VDivider:w.a,VIcon:V.a,VList:C.a,VListItem:$.a,VListItemTitle:D.b,VMenu:O.a,VRow:M.a,VSelect:j.a,VSpacer:Y.a,VTab:A.a,VTabItem:S.a,VTabs:P.a,VTabsItems:E.a,VTextField:I.a,VTimePicker:F.a})}}]);