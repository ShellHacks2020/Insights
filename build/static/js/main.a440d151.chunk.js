(this.webpackJsonpinsights=this.webpackJsonpinsights||[]).push([[0],{50:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(55),a(42)),u=a.n(o).a.create({baseURL:"/api",withCredentials:!0}),s=function(e){if(console.error(e),e.response&&e.response.data)throw console.error("API response",e.response.data),e.response.data.message;throw e},m=function(){return null!=localStorage.getItem("user")},i=function(){return localStorage.removeItem("user"),u.get("/logout")},h=function(){return u.get("/secret").then((function(e){return e.data})).catch(s)},E=a(16),p=a(5),g=a(85),d=a(86),f=a(84),b=a(49),v=a(83);a(73);var S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"Home")))},j=a(10);var O=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(j.a)(l,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){h().then((function(e){return c({secret:e.secret})})).catch((function(e){return s({message:e.toString()})}))})),r.a.createElement("div",{className:"Secret"},r.a.createElement("h2",null,"Secret"),r.a.createElement("div",{className:"result"},a),u&&r.a.createElement("div",{className:"info info-danger"},u))};a(21);var w=function(){var e=this,t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],l=(a[1],Object(n.useState)("")),o=Object(j.a)(l,2),u=o[0],s=(o[1],Object(n.useState)(null)),m=Object(j.a)(s,2),i=m[0];return m[1],r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,"Username:"," ",r.a.createElement("input",{type:"text",value:c,name:"username",onChange:function(){return e.handleInputChange}})," ",r.a.createElement("br",null),"Password:"," ",r.a.createElement("input",{type:"password",value:u,name:"password",onChange:function(){return e.handleInputChange}})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Login")),i&&r.a.createElement("div",{className:"info info-danger"},i)))};var C=function(){var e=this,t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],l=(a[1],Object(n.useState)("")),o=Object(j.a)(l,2),u=o[0],s=(o[1],Object(n.useState)("")),m=Object(j.a)(s,2),i=m[0],h=(m[1],Object(n.useState)(null)),E=Object(j.a)(h,2),p=E[0];return E[1],r.a.createElement("div",{className:"Signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement("form",null,"Username:"," ",r.a.createElement("input",{type:"text",value:c,name:"username",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Name:"," ",r.a.createElement("input",{type:"text",value:i,name:"name",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password:"," ",r.a.createElement("input",{type:"password",value:u,name:"password",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Signup")),p&&r.a.createElement("div",{className:"info info-danger"},p))};var N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{bg:"light",variant:"light"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(E.c,{to:"/",exact:!0},"Home"),!m()&&r.a.createElement(E.c,{to:"/signup"},"Signup"),!m()&&r.a.createElement(E.c,{to:"/login"},"Login"),m()&&r.a.createElement(E.b,{to:"/",onClick:function(e){i()}},"Logout"),r.a.createElement(E.c,{to:"/secret"},"Secret")),r.a.createElement(f.a,{inline:!0},r.a.createElement(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(v.a,{variant:"outline-primary"},"Search"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:S}),r.a.createElement(p.a,{path:"/signup",component:C}),r.a.createElement(p.a,{path:"/login",component:w}),r.a.createElement(p.a,{path:"/secret",component:O}),r.a.createElement(p.a,{render:function(){return r.a.createElement("h2",null,"404")}}))))};var k=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,null),r.a.createElement("h1",{className:"App-title"},"MERN Boilerplate")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.a440d151.chunk.js.map