(function(e){function n(n){for(var c,a,r=n[0],d=n[1],h=n[2],i=0,l=[];i<r.length;i++)a=r[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var r=t[a];0!==o[r]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},o={app:0},u=[];function r(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-29033601":"98ec3846","chunk-2d0b68f8":"474390c1","chunk-2d0b727c":"62fe51c9","chunk-2d0d6583":"0df5a74e","chunk-2d228876":"f71e3f52","chunk-3a52d8b6":"4c35b9ac","chunk-4284adcc":"9d5e6e02","chunk-081e48b6":"eea97f91","chunk-18266661":"be7a1d08","chunk-350ec3d4":"a5d78d5d","chunk-3cb53bf1":"bbcef5f9","chunk-51304d4a":"5b469ff5","chunk-53d931dc":"1dd8ec79","chunk-548004a9":"aa74f962","chunk-584330c8":"3da6efb8","chunk-58be911d":"a586b42e","chunk-cb3a6d12":"ec4a6d44","chunk-4eaf51f9":"5ed5f0ca","chunk-86ad7674":"5e1e7273","chunk-a8c80942":"9d77396b","chunk-f397183a":"a805a5e1","chunk-fc8ef3da":"029a4f2d"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-29033601":1,"chunk-3a52d8b6":1,"chunk-4284adcc":1,"chunk-081e48b6":1,"chunk-18266661":1,"chunk-350ec3d4":1,"chunk-3cb53bf1":1,"chunk-51304d4a":1,"chunk-53d931dc":1,"chunk-548004a9":1,"chunk-584330c8":1,"chunk-58be911d":1,"chunk-cb3a6d12":1,"chunk-4eaf51f9":1,"chunk-86ad7674":1,"chunk-a8c80942":1,"chunk-f397183a":1,"chunk-fc8ef3da":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-29033601":"70efe1a0","chunk-2d0b68f8":"31d6cfe0","chunk-2d0b727c":"31d6cfe0","chunk-2d0d6583":"31d6cfe0","chunk-2d228876":"31d6cfe0","chunk-3a52d8b6":"c2e231dd","chunk-4284adcc":"ef22b69d","chunk-081e48b6":"c8117bae","chunk-18266661":"529d2299","chunk-350ec3d4":"f0f5d87a","chunk-3cb53bf1":"7d3b74bf","chunk-51304d4a":"26ca6fec","chunk-53d931dc":"0d1868b3","chunk-548004a9":"c9ddcd62","chunk-584330c8":"deb145c2","chunk-58be911d":"1a3ff44e","chunk-cb3a6d12":"1d800e83","chunk-4eaf51f9":"aa80368d","chunk-86ad7674":"0a1de7ae","chunk-a8c80942":"7324ed4b","chunk-f397183a":"2b1003fa","chunk-fc8ef3da":"35fcb736"}[e]+".css",o=d.p+c,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var h=u[r],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===o))return n()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){h=l[r],i=h.getAttribute("data-href");if(i===c||i===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r(e);var l=new Error;h=function(n){i.onerror=i.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}o[e]=void 0}};var f=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=n,h=h.slice();for(var l=0;l<h.length;l++)n(h[l]);var f=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("0fae");var c=t("9e2f"),a=t.n(c),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),u=t("2f62"),r={state:{isCollapse:!1,token:""},mutations:{collapseMenu:function(e){e.isCollapse=!e.isCollapse}}},d={state:{dialogOpen:!1,AddOrChange:!1,method:"upt"},mutations:{dialogShowClose:function(e){e.dialogOpen=!e.dialogOpen},dialogClose:function(e){e.dialogOpen=!1},dialogShow:function(e){e.dialogOpen=!0},changeMethodUpt:function(e){e.method="upt"},changeMethodAdd:function(e){e.method="add"}}};o["default"].use(u["a"]);var h=new u["a"].Store({modules:{tab:r,dialog:d}}),i=t("8c4f"),l=(t("d3b7"),t("3ca3"),t("ddb0"),t("fb6a"),function(){return t.e("chunk-2d0b68f8").then(t.bind(null,"1e4b"))}),f=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-3cb53bf1")]).then(t.bind(null,"a55b"))},p=function(){return t.e("chunk-f397183a").then(t.bind(null,"8f88"))},s=function(){return t.e("chunk-2d228876").then(t.bind(null,"da25"))},m=function(){return t.e("chunk-29033601").then(t.bind(null,"a1de"))},k=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-cb3a6d12")]).then(t.bind(null,"3c19"))},b=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-081e48b6")]).then(t.bind(null,"ae0e"))},g=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-53d931dc")]).then(t.bind(null,"7834"))},v=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-548004a9")]).then(t.bind(null,"7445"))},y=function(){return t.e("chunk-2d0b727c").then(t.bind(null,"1fe6"))},O=function(){return t.e("chunk-a8c80942").then(t.bind(null,"de51"))},w=function(){return t.e("chunk-fc8ef3da").then(t.bind(null,"341d"))},P=function(){return t.e("chunk-86ad7674").then(t.bind(null,"4fca"))},S=function(){return t.e("chunk-2d0d6583").then(t.bind(null,"71c6"))},j=function(){return t.e("chunk-3a52d8b6").then(t.bind(null,"4fb2"))},C=function(){return t.e("chunk-4eaf51f9").then(t.bind(null,"81a8"))},x=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-350ec3d4")]).then(t.bind(null,"635a"))},E=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-584330c8")]).then(t.bind(null,"7da6"))},_=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-18266661")]).then(t.bind(null,"9fd2"))},A=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-51304d4a")]).then(t.bind(null,"4622"))},M=function(){return Promise.all([t.e("chunk-4284adcc"),t.e("chunk-58be911d")]).then(t.bind(null,"37a0"))},T=new i["a"]({routes:[{path:"/",component:l,children:[{path:"/",component:C,children:[{path:"",component:x},{path:"index",name:"Vindex",component:x},{path:"mv",name:"mv",component:E,children:[{path:"*",redirect:"/mv"}]},{path:"tv",name:"tv",component:E},{path:"ac",name:"ac",component:E},{path:"doc",name:"doc",component:E},{path:"va",name:"va",component:E},{path:"detail",name:"DetailVideo",component:_},{path:"other",name:"Other",component:A},{path:"vplayer",name:"vplayer",component:M}]},{path:"admin",component:p,children:[{path:"",name:"Home",component:k},{path:"category",name:"category",component:b},{path:"videodata",name:"videoData",component:g},{path:"addvideo",name:"addVideo",component:y},{path:"jxlist",name:"jxList",component:v},{path:"user",name:"User",component:O},{path:"about",name:"About",component:m},{path:"order",name:"Order",component:s},{path:"message",name:"Message",component:w},{path:"player",name:"Player",component:j},{path:"other1",name:"Other1",component:P},{path:"other2",name:"Other2",component:S},{path:"*",redirect:"/admin"}]},{path:"/login",name:"Login",component:f}]}]});T.beforeEach((function(e,n,t){for(var c="",a=0,o=T.options.routes[0].children[0].children.length;a<o;a++)if(e.path==="/"+T.options.routes[0].children[0].children[a].path){c="/"+T.options.routes[0].children[0].children[a].path;break}e.path===c&&t(),"/admin"===e.path.slice(0,6)&&localStorage.getItem("token")&&t(),"/admin"!==e.path.slice(0,6)||localStorage.getItem("token")||t("/login"),"/login"==e.path&&(localStorage.removeItem("token"),t())}));var L=T,N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},D=[],I={name:"App",components:{}},B=I,U=(t("034f"),t("2877")),V=Object(U["a"])(B,N,D,!1,null,null,null),$=V.exports,q=t("313e");o["default"].prototype.$echarts=q,o["default"].config.productionTip=!1,o["default"].use(i["a"]),o["default"].use(a.a),new o["default"]({render:function(e){return e($)},store:h,router:L}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.9ed077eb.js.map