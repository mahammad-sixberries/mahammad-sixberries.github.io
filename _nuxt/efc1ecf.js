(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{534:function(t,e,n){"use strict";n.r(e);n(51);var o={name:"clock",data:function(){return{date:this.$moment().format("ddd - MMM DD, YYYY"),time:this.$moment().format("hh:mm:ss A")}},created:function(){var t=this;setInterval((function(){t.setTime()}),1e3)},methods:{setTime:function(){this.time=this.$moment().format("hh:mm:ss A"),document.title=this.time+" | Clock"}}},r=n(78),c=n(111),m=n.n(c),l=n(536),d=n(532),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-card-text",{staticClass:"text-sm-h1 text-h4 text-center"},[this._v("\n    "+this._s(this.time)+"\n  ")]),this._v(" "),e("v-card-text",{staticClass:"text-sm-h2 text-h5 text-center"},[this._v("\n    "+this._s(this.date)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:l.a,VCardText:d.b})},562:function(t,e,n){"use strict";n.r(e);n(77),n(46),n(169),n(70),n(51);var o=n(3),r=n(85);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Time",data:function(){return{dialog:!1,timezone:{},items:this.$moment.tz.names()}},computed:m({},Object(r.c)(["timezones"])),created:function(){var t=this;this.setTime(),setInterval((function(){t.setTime()}),1e3)},methods:{setTime:function(){var t=this;this.time=this.$moment().format("hh:mm:ss A"),document.title=this.time+" | Clock",this.timezones.forEach((function(e){e.time=t.$moment().tz(e.timezone).format("hh:mm:ss A"),e.date=t.$moment().tz(e.timezone).format("ddd - MMM DD, YYYY")}))},addTimezone:function(){this.timezones.push(m(m({},this.timezone),{},{id:Date.now()})),this.timezone={},this.dialog=!1},updateTimezone:function(){var t=this,e=this.timezones.find((function(e){return e.id===t.timezone.id}));Object.assign(e,this.timezone),this.timezone={},this.dialog=!1},editTimezone:function(t){this.timezone=m({},t),this.dialog=!0},removeTimezone:function(t){this.timezones.splice(t,1)}}},d=n(78),v=n(111),h=n.n(v),f=n(187),_=n(536),z=n(532),x=n(632),O=n(633),T=n(559),k=n(159),V=n(160),C=n(104),j=n(69),w=n(565),y=n(635),D=n(639),$=n(529),A=n(628),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clock"),t._v(" "),n("v-row",[t._l(t.timezones,(function(e,o){return n("v-col",{key:o,attrs:{cols:"12",sm:"4",md:"3"}},[n("v-card",[n("v-card-title",[n("span",[t._v(t._s(e.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-title",{on:{click:function(n){return t.editTimezone(e)}}},[t._v("Edit")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.removeTimezone(o)}}},[t._v("Delete")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"text-h6 text-center"},[t._v("\n          "+t._s(e.time)+"\n        ")]),t._v(" "),n("v-card-text",{staticClass:"text-h6 text-center"},[t._v("\n          "+t._s(e.date)+"\n        ")])],1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[n("v-card",{staticClass:"card"},[n("v-card-actions",[n("v-btn",{staticClass:"center",attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v("\n            Add\n          ")])],1)],1)],1)],2),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v(" "+t._s(t.timezone.id?"Edit":"Add")+" ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",label:"Title"},model:{value:t.timezone.title,callback:function(e){t.$set(t.timezone,"title",e)},expression:"timezone.title"}}),t._v(" "),n("v-select",{attrs:{outlined:"",items:t.items,label:"Timezone"},model:{value:t.timezone.timezone,callback:function(e){t.$set(t.timezone,"timezone",e)},expression:"timezone.timezone"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),t._v(" "),t.timezone.id?n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.updateTimezone()}}},[t._v("\n          Edit\n        ")]):n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.addTimezone()}}},[t._v("\n          Add\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{Clock:n(534).default}),h()(component,{VBtn:f.a,VCard:_.a,VCardActions:z.a,VCardText:z.b,VCardTitle:z.c,VCol:x.a,VDialog:O.a,VDivider:T.a,VIcon:k.a,VList:V.a,VListItem:C.a,VListItemTitle:j.b,VMenu:w.a,VRow:y.a,VSelect:D.a,VSpacer:$.a,VTextField:A.a})}}]);