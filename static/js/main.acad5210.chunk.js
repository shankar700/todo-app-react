(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=a(7),s=a(1),i=a(19),m=a(20);function u(e){var t=e.taskList,a=e.deleteTask;console.log(t);var n=new Date,o={weekday:"long",year:"numeric",month:"long",day:"numeric"};function l(e){e.preventDefault(),console.log(e.target.parentNode.querySelector("#task").textContent);var t=e.target.parentNode.querySelector("#task").textContent;a(t)}return r.a.createElement("div",null,r.a.createElement("ul",{className:"task-list"},t.map((function(e){return r.a.createElement("li",{onClick:l,key:Math.random()},r.a.createElement("div",{className:"task-card"},r.a.createElement("span",{id:"task"},e," "),r.a.createElement("span",{className:"date"},"date created : ",n.toLocaleString("en-US",o))))}))))}a(8);function d(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"input-form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.querySelector("input").value,n=[].concat(Object(i.a)(a),[t]);o(n),document.forms["task-form"].querySelector("input").value=""},className:"add-task-form",id:"task-form"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add Task","aria-label":"Add Task","aria-describedby":"button-addon2"}),r.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit",id:"button-addon2"},"Add")),r.a.createElement(u,{taskList:a,deleteTask:function(e){console.log("task list => ",a),console.log("clear task =>",e);var t=a.filter((function(t){return t.trim()!==e.trim()}));o(t)}}))}function E(){return r.a.createElement("div",{className:"Title"},r.a.createElement("h1",null,"Taskit!!"))}function f(){return r.a.createElement("div",{className:"home"},r.a.createElement(E,null),r.a.createElement(d,null))}function p(){return r.a.createElement("div",null,r.a.createElement("h1",null,"History"))}function v(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"))}function h(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(c.b,{to:"/"},"Taskit!!"),r.a.createElement(c.b,{to:"/dashboard"},"Dashboard"),r.a.createElement(c.b,{to:"/History"},"History"))}var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(h,null),r.a.createElement(s.a,{path:"/",exact:!0,component:f}),r.a.createElement(s.a,{path:"/dashboard",exact:!0,component:v}),r.a.createElement(s.a,{path:"/history",exact:!0,component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.acad5210.chunk.js.map