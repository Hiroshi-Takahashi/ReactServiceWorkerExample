(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(10),c=n(1),l=n(3),a=n(13),u=n(12),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(u.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(a.a)({},e,{completed:!e.completed}):e});default:return e}},s=0,d="SHOW_ALL",m="SHOW_COMPLETED",v="SHOW_ACTIVE",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},E=Object(l.b)({todos:f,visibilityFilter:p}),w=function(e){var t=e.active,n=e.children,o=e.onClick;return r.a.createElement("button",{onClick:o,disabled:t,style:{marginLeft:"4px"}},n)},h=Object(c.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(w),g=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Show: "),r.a.createElement(h,{filter:d},"All"),r.a.createElement(h,{filter:v},"Active"),r.a.createElement(h,{filter:m},"Completed"))},b=Object(c.b)()(function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){var o;e.preventDefault(),t.value.trim()&&(n((o=t.value,{type:"ADD_TODO",id:s++,text:o})),t.value="")}},r.a.createElement("input",{ref:function(e){return t=e}}),r.a.createElement("button",{type:"submit"},"Add Todo")))}),O=function(e){var t=e.onClick,n=e.completed,o=e.text;return r.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},o)},T=function(e){var t=e.todos,n=e.toggleTodo;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))},k=function(e,t){switch(t){case d:return e;case m:return e.filter(function(e){return e.completed});case v:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}},y=Object(c.b)(function(e){return{todos:k(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(T),I=(n(23),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},"helloworld"),r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(g,null))}),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var D=Object(l.c)(E);Object(i.render)(r.a.createElement(c.a,{store:D},r.a.createElement(I,null)),document.getElementById("root")),function(){if(console.log("public url="),"serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/sw.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[14,2,1]]]);
//# sourceMappingURL=main.76452676.chunk.js.map