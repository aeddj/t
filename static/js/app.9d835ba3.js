(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0a2e01":"adcb9493","chunk-2d0f0860":"0bdc591c","chunk-2d217eac":"17d70c72","chunk-633e7342":"b474d4a6","chunk-048ec9da":"4d0941ab","chunk-270346ea":"906ff54f","chunk-3f1fef66":"be26fe88","chunk-4b632316":"f3d85444","chunk-70954440":"78a02c85","chunk-f2534dd8":"d3efb32e","chunk-adf0d4d0":"30a7e8c9","chunk-63a912f2":"50c83f51"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-048ec9da":1,"chunk-270346ea":1,"chunk-3f1fef66":1,"chunk-4b632316":1,"chunk-70954440":1,"chunk-f2534dd8":1,"chunk-adf0d4d0":1,"chunk-63a912f2":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0a2e01":"31d6cfe0","chunk-2d0f0860":"31d6cfe0","chunk-2d217eac":"31d6cfe0","chunk-633e7342":"31d6cfe0","chunk-048ec9da":"6cbd086e","chunk-270346ea":"88127549","chunk-3f1fef66":"22bf3f34","chunk-4b632316":"cf537743","chunk-70954440":"5386a43d","chunk-f2534dd8":"bd4782e9","chunk-adf0d4d0":"60c73dc1","chunk-63a912f2":"4b301a28"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],s.parentNode.removeChild(s),t(c)},s.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("caad"),t("2532"),t("c975"),t("a434");var r=t("2b0e"),o=t("2f62"),a=t("4ffc");r["a"].use(o["a"]);var c="token";n["a"]=new o["a"].Store({state:{token:Object(a["b"])(c),iscould:["TabbarIndex"]},mutations:{setToken:function(e,n){e.token=n,Object(a["c"])(n,c)},delToken:function(e){Object(a["a"])(c),e.token=null},addCould:function(e,n){e.iscould.includes(n)||e.iscould.push(n)},removeCould:function(e,n){var t=e.iscould.indexOf(n);-1!==t&&e.iscould.splice(t,1)}},actions:{},modules:{}})},"4ffc":function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a}));var r=function(e,n){try{window.localStorage.setItem(n,JSON.stringify(e))}catch(t){window.localStorage.setItem(n,e)}},o=function(e){try{return JSON.parse(window.localStorage.getItem(e))}catch(n){return window.localStorage.getItem(e)}},a=function(e){window.localStorage.removeItem(e)}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.iscould}},[t("router-view")],1)],1)},a=[],c={name:"App",data:function(){return{iscould:this.$store.state.iscould}}},u=c,i=t("2877"),l=Object(i["a"])(u,o,a,!1,null,null,null),d=l.exports,f=t("a18c"),s=t("4360"),h=(t("5cfb"),t("b970")),m=(t("157a"),t("5717"),t("4de4"),t("5a0c")),p=(t("a471"),t("4208")),b=t.n(p);m().format(),m["locale"]("zh-cn"),m["extend"](b.a),console.log(m("2018-11-29T17:09:52").from(m())),r["a"].filter("days",(function(e){return m(e).from(m())})),r["a"].filter("daysFormat",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return m(e).format(n)}));t("f5df1");r["a"].use(h["a"]),r["a"].config.productionTip=!1,new r["a"]({router:f["a"],store:s["a"],render:function(e){return e(d)}}).$mount("#app")},5717:function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f"),t("5319");var r=t("2b0e"),o=t("8c4f"),a=t("4360"),c=t("2241"),u=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-3f1fef66")]).then(t.bind(null,"9ed6"))},i=function(){return t.e("chunk-2d0f0860").then(t.bind(null,"9d76"))},l=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-4b632316"),t.e("chunk-f2534dd8")]).then(t.bind(null,"7abe"))},d=function(){return t.e("chunk-2d217eac").then(t.bind(null,"c988"))},f=function(){return t.e("chunk-2d0a2e01").then(t.bind(null,"007b"))},s=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-270346ea")]).then(t.bind(null,"9639"))},h=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-4b632316"),t.e("chunk-70954440")]).then(t.bind(null,"d2be"))},m=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-adf0d4d0")]).then(t.bind(null,"230c"))},p=function(){return Promise.all([t.e("chunk-633e7342"),t.e("chunk-048ec9da")]).then(t.bind(null,"b9e1"))},b=function(){return t.e("chunk-63a912f2").then(t.bind(null,"6a3a"))};r["a"].use(o["a"]);var k=[{path:"/login",name:"login",component:u,meta:{onlog:!1}},{path:"/",name:"TabbarIndex",component:i,meta:{onlog:!1},children:[{path:"/",name:"HomeIndex",component:l,meta:{onlog:!1}},{path:"qa",name:"qa",component:d,meta:{onlog:!0}},{path:"video",name:"video",component:f,meta:{onlog:!0}},{path:"my",name:"my",component:s,meta:{onlog:!1}}]},{path:"/search",name:"search",component:h,meta:{onlog:!1}},{path:"/article/:articleId",name:"article",component:m,props:!0,meta:{onlog:!1}},{path:"/setMy",name:"setMy",component:p,meta:{onlog:!1}},{path:"/my/userCart",name:"userCart",component:b,meta:{onlog:!0}}],g=new o["a"]({routes:k});g.beforeEach((function(e,n,t){e.meta.onlog?a["a"].state.token?t():c["a"].confirm({message:"该内容需要登录，是否登录？"}).then((function(){g.replace({name:"login",query:{r:g.currentRoute.fullPath}})})).catch((function(){t(!1)})):t()})),n["a"]=g}});
//# sourceMappingURL=app.9d835ba3.js.map