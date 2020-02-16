(this["webpackJsonptodo-sevima-training"]=this["webpackJsonptodo-sevima-training"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(5),r=a.n(i),l=a(3),c=a(1),o=a(6),m=a(2),u=(a(12),a(13),function(){return n.a.createElement("div",null,"Task empty")}),d=function(e){var t=e.taskName?e.taskName:"-",a=e.taskPriorityIndicator?e.taskPriorityIndicator:"is-black",s=e.taskPriorityName?e.taskPriorityName:"-";return n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-12"},n.a.createElement("div",{className:"notification"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-12"},t," ",n.a.createElement("span",{className:"tag ".concat(a)},s))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-12"},n.a.createElement("div",{className:"field is-grouped is-grouped-centered"},n.a.createElement("p",{className:"control"},n.a.createElement("button",{className:"button is-small is-warning is-fullwidth",onClick:function(){return e.onClick(e.taskId,"edit")}},"Edit")),n.a.createElement("p",{className:"control"},n.a.createElement("button",{className:"button is-small is-danger is-fullwidth",onClick:function(){return e.onClick(e.taskId,"delete")}},"Delete"))))))))},k=function(e){var t=e.taskLists?e.taskLists:[];return 0===t.length?n.a.createElement("div",{className:"container"},n.a.createElement(u,null)):n.a.createElement("div",{className:"container"},t.map((function(t,a){return n.a.createElement(d,{key:a,taskId:t.taskId,taskName:t.taskName,taskPriorityIndicator:t.taskPriorityIndicator,taskPriorityName:t.taskPriorityName,onClick:function(t,a){return e.onClick(t,a)}})})))},N=function(e){var t=e.taskStatusTitle?e.taskStatusTitle:"-";return n.a.createElement("article",{className:"panel"},n.a.createElement("p",{className:"panel-heading has-text-centered"},t),n.a.createElement("div",{className:"panel-block"},n.a.createElement(k,{taskLists:e.taskStatusLists,onClick:function(t,a){return e.onClick(t,a)}})))},f=function(){var e=Object(s.useState)({taskId:"",taskName:"",taskPriority:"L",taskStatus:"N"}),t=Object(m.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)([]),u=Object(m.a)(r,2),d=u[0],k=u[1],f=Object(s.useState)("CREATE"),E=Object(m.a)(f,2),v=E[0],y=E[1],p=function(e){var t=[{priorityKey:"L",priorityName:"Low",priorityIndicator:"is-primary"},{priorityKey:"M",priorityName:"Medium",priorityIndicator:"is-warning"},{priorityKey:"H",priorityName:"Hard",priorityIndicator:"is-danger"}];return null==e?t:t.find((function(t){return t.priorityKey===e}))},b=function(e){var t=[{statusKey:"N",statusName:"New"},{statusKey:"I",statusName:"Inprogress"},{statusKey:"D",statusName:"Done"}];return null==e?t:t.find((function(t){return t.statusKey===e}))},h=function(e){i(Object(o.a)({},a,Object(c.a)({},e.target.name,e.target.value)))},S=function(e){i({taskId:"",taskName:"",taskPriority:"L",taskStatus:"N"})},g=function(e){if(e.preventDefault(),"CREATE"===v)k([].concat(Object(l.a)(d),[{taskId:"_"+Math.random().toString(36).substr(2,9),taskName:a.taskName,taskPriority:a.taskPriority,taskStatus:a.taskStatus}])),S();else{var t=Object(l.a)(d),s=t.findIndex((function(e){return e.taskId===v}));t[s].taskName=a.taskName,t[s].taskPriority=a.taskPriority,t[s].taskStatus=a.taskStatus,k(t),S(),y("CREATE")}},I=function(e,t){switch(t){case"edit":P(e);break;case"delete":C(e)}},C=function(e){var t=d.filter((function(t,a){return t.taskId!==e}));k(t),y("CREATE")},P=function(e){y(e);var t=d.find((function(t,a){return t.taskId===e}));i({taskId:t.taskId,taskName:t.taskName,taskPriority:t.taskPriority,taskStatus:t.taskStatus})},w=function(e,t){var a=null;return d.filter((function(s){return a=p(s.taskPriority),s.taskPriorityName=a.priorityName,s.taskPriorityIndicator=a.priorityIndicator,s[e]===t}))};return Object(s.useEffect)((function(){document.title="New (".concat(w("taskStatus","N").length,") | \n      Inprogress (").concat(w("taskStatus","I").length,") | \n      Done (").concat(w("taskStatus","D").length,")")})),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:g},n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column column is-three-fifths is-offset-one-fifth"},n.a.createElement("p",{className:"has-text-centered is-size-5 has-text-weight-medium"},"CREATE"===v?"Create Task":"Update Task ".concat(a.taskName)))),n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Task Name")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",className:"input",value:a.taskName,name:"taskName",onChange:h}))))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Priority")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("div",{className:"select"},n.a.createElement("select",{name:"taskPriority",value:a.taskPriority,onChange:h},p().map((function(e,t){return n.a.createElement("option",{key:e.priorityKey,value:e.priorityKey},e.priorityName)})))))))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Status")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("div",{className:"select"},n.a.createElement("select",{name:"taskStatus",value:a.taskStatus,onChange:h},b().map((function(e,t){return n.a.createElement("option",{key:e.statusKey,value:e.statusKey},e.statusName)})))))))))),n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},n.a.createElement("div",{className:"field is-grouped is-grouped-centered"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{className:"button is-primary",onClick:g},"Save")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{className:"button is-link is-light"},"Cancel")))))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column"},n.a.createElement(N,{taskStatusLists:w("taskStatus","N"),taskStatusTitle:b("N").statusName,onClick:function(e,t){return I(e,t)}})),n.a.createElement("div",{className:"column"},n.a.createElement(N,{taskStatusLists:w("taskStatus","I"),taskStatusTitle:b("I").statusName,onClick:function(e,t){return I(e,t)}})),n.a.createElement("div",{className:"column"},n.a.createElement(N,{taskStatusLists:w("taskStatus","D"),taskStatusTitle:b("D").statusName,onClick:function(e,t){return I(e,t)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c9f0fc13.chunk.js.map