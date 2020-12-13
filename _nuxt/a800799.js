(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{635:function(t,e,n){"use strict";n.r(e);n(19),n(387),n(76),n(45),n(50),n(167),n(68),n(51);var r=n(3);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Timer",data:function(){return{date:this.$moment().format("ddd - MMM DD, YYYY"),time:null,menu:{date:!1,time:!1},dialog:!1,timer:{},timers:[{id:4,enabled:!0,tab:0,title:"Timer 4",day:0,hour:0,minute:3,second:0,start:this.$moment(),end:this.$moment().add({day:0,hour:0,minute:3,second:0})}],days:new Array(30).fill(null).map((function(t,i){return i})),hours:new Array(24).fill(null).map((function(t,i){return i})),minutes:new Array(60).fill(null).map((function(t,i){return i})),seconds:new Array(60).fill(null).map((function(t,i){return i}))}},created:function(){var t=this;this.setTimer(),this.setTime(),setInterval((function(){t.setTime()}),1e3)},methods:{setTime:function(){var t=this;this.time=this.$moment().format("hh:mm:ss A"),document.title=this.time+" | Clock",this.timers.forEach((function(e){e.enabled&&t.setValue(e)}))},setValue:function(t){var e;if(0===t.tab)t.end.subtract(1,"second"),e=t.end.diff(t.start);else if(1===t.tab){e=this.$moment("".concat(t.date," ").concat(t.time),"YYYY-MM-DD HH:mm:ss").diff()}var n=this.$moment.duration(e),r="";n.years()&&(r+="".concat(Math.abs(n.years())," years ")),n.months()&&(r+="".concat(Math.abs(n.months())," months ")),n.days()&&(r+="".concat(Math.abs(n.days())," days ")),r+="".concat(Math.abs(n.hours()),":").concat(Math.abs(n.minutes()),":").concat(Math.abs(n.seconds())),t.value=r,t.passed=!1,0===e?(t.enabled=!1,this.resetTimer(t)):e<0&&(t.passed=!0)},setTimer:function(){this.timer={enabled:!0,tab:0,title:"Timer",date:this.$moment().format("YYYY-MM-DD"),time:this.$moment().format("HH:mm:ss"),day:0,hour:0,minute:0,second:0}},addTimer:function(){this.resetTimer(this.timer),this.timers.push(c(c({},this.timer),{},{id:Date.now()})),this.setTimer(),this.dialog=!1},updateTimer:function(){var t=this,e=this.timers.find((function(e){return e.id===t.timer.id}));this.resetTimer(this.timer),Object.assign(e,this.timer),this.setTimer(),this.dialog=!1},editTimer:function(t){this.timer=c({},t),this.dialog=!0},removeTimer:function(t){this.timers.splice(t,1)},resetTimer:function(t){t.start=this.$moment(),t.end=this.$moment().add({day:t.day,hour:t.hour,minute:t.minute,second:t.second+1}),this.setValue(t)}}},m=n(77),d=n(110),v=n.n(d),f=n(185),h=n(529),_=n(526),y=n(625),k=n(631),x=n(626),T=n(552),w=n(157),V=n(158),$=n(102),C=n(67),O=n(559),D=n(628),j=n(632),M=n(523),S=n(629),Y=n(640),P=n(638),A=n(622),E=n(621),I=n(639),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-text",{staticClass:"text-h1 text-center"},[t._v("\n      "+t._s(t.time)+"\n    ")]),t._v(" "),n("v-card-text",{staticClass:"text-h2 text-center"},[t._v("\n      "+t._s(t.date)+"\n    ")])],1),t._v(" "),n("v-row",[t._l(t.timers,(function(e,r){return n("v-col",{key:r,attrs:{cols:"3"}},[n("v-card",{staticStyle:{height:"100%"}},[n("v-card-title",[n("span",[t._v(t._s(e.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-title",{on:{click:function(n){return t.editTimer(e)}}},[t._v("Edit")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.removeTimer(r)}}},[t._v("Delete")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"text-h6 text-center"},[t._v("\n          "+t._s(e.passed?"+":"")+" "+t._s(e.value)+"\n        ")]),t._v(" "),1==e.tab?n("v-card-actions",{staticClass:"justify-center"},[t._v("\n          "+t._s(t._f("date")(e.date))+" - "+t._s(e.time)+"\n        ")]):t._e(),t._v(" "),0==e.tab?n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(n){return t.resetTimer(e)}}},[t._v(" Reset ")]),t._v(" "),e.enabled?n("v-btn",{attrs:{color:"error"},on:{click:function(t){e.enabled=!1}}},[t._v("\n            Stop\n          ")]):n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.enabled=!0}}},[t._v("\n            Start\n          ")]),t._v(" "),n("v-spacer")],1):t._e()],1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticStyle:{height:"100%"}},[n("v-card-actions",{staticClass:"justify-center pa-12"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v(" Add ")])],1)],1)],1)],2),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v(" "+t._s(t.timer.id?"Edit":"Add")+" ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",label:"Title"},model:{value:t.timer.title,callback:function(e){t.$set(t.timer,"title",e)},expression:"timer.title"}}),t._v(" "),n("v-tabs",{model:{value:t.timer.tab,callback:function(e){t.$set(t.timer,"tab",e)},expression:"timer.tab"}},[n("v-tab",[t._v("Countdown")]),t._v(" "),n("v-tab",[t._v("Date and time")])],1),t._v(" "),n("v-tabs-items",{model:{value:t.timer.tab,callback:function(e){t.$set(t.timer,"tab",e)},expression:"timer.tab"}},[n("v-tab-item",{staticClass:"pt-4"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.hours,label:"Hours"},model:{value:t.timer.hour,callback:function(e){t.$set(t.timer,"hour",e)},expression:"timer.hour"}})],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.minutes,label:"Minutes"},model:{value:t.timer.minute,callback:function(e){t.$set(t.timer,"minute",e)},expression:"timer.minute"}})],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-select",{attrs:{outlined:"",items:t.seconds,label:"Seconds"},model:{value:t.timer.second,callback:function(e){t.$set(t.timer,"second",e)},expression:"timer.second"}})],1)],1)],1),t._v(" "),n("v-tab-item",{staticClass:"pt-4"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{outlined:"",label:"Date","append-icon":"mdi-calendar",readonly:""},model:{value:t.timer.date,callback:function(e){t.$set(t.timer,"date",e)},expression:"timer.date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu.date,callback:function(e){t.$set(t.menu,"date",e)},expression:"menu.date"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menu.date=!1}},model:{value:t.timer.date,callback:function(e){t.$set(t.timer,"date",e)},expression:"timer.date"}})],1)],1),t._v(" "),n("v-col",{staticClass:"py-0"},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{outlined:"",label:"Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:t.timer.time,callback:function(e){t.$set(t.timer,"time",e)},expression:"timer.time"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu.time,callback:function(e){t.$set(t.menu,"time",e)},expression:"menu.time"}},[t._v(" "),n("v-time-picker",{attrs:{"use-seconds":"","full-width":""},on:{"click:second":function(e){t.menu.time=!1}},model:{value:t.timer.time,callback:function(e){t.$set(t.timer,"time",e)},expression:"timer.time"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),t._v(" "),t.timer.id?n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.updateTimer()}}},[t._v("\n          Edit\n        ")]):n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.addTimer()}}},[t._v(" Add ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:y.a,VDatePicker:k.a,VDialog:x.a,VDivider:T.a,VIcon:w.a,VList:V.a,VListItem:$.a,VListItemTitle:C.b,VMenu:O.a,VRow:D.a,VSelect:j.a,VSpacer:M.a,VTab:S.a,VTabItem:Y.a,VTabs:P.a,VTabsItems:A.a,VTextField:E.a,VTimePicker:I.a})}}]);