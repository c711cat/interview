(function(e){function t(t){for(var r,a,i=t[0],u=t[1],d=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1d29f956":"035b8830","chunk-434ec766":"5023a013","chunk-5b4a9cce":"5157f662","chunk-41fea0bf":"533bac05"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-434ec766":1,"chunk-5b4a9cce":1,"chunk-41fea0bf":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1d29f956":"31d6cfe0","chunk-434ec766":"a8bd30c8","chunk-5b4a9cce":"975c2831","chunk-41fea0bf":"371e8955"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){d=f[i],s=d.getAttribute("data-href");if(s===r||s===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/interview/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a5a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["d"])(i)}var o=n("1344"),c=Object(o["a"])(),i=c,u={data:function(){return{}},provide:function(){return{emitter:i}}},d=(n("c665"),n("6b0d")),s=n.n(d);const f=s()(u,[["render",a]]);var l=f,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=[{path:"/",component:function(){return Promise.all([n.e("chunk-1d29f956"),n.e("chunk-434ec766")]).then(n.bind(null,"b8f7"))},children:[{path:"",component:function(){return n.e("chunk-41fea0bf").then(n.bind(null,"57da"))}},{path:"conversation/:friendId",component:function(){return Promise.all([n.e("chunk-1d29f956"),n.e("chunk-5b4a9cce")]).then(n.bind(null,"107c2"))}}]}],h=Object(m["a"])({history:Object(m["b"])(),routes:p}),b=h,v=n("9319"),g=(n("098b"),n("e1ae"),n("4121"),n("bddf"),n("4de4"),n("7db0"),n("0c6e"));function y(){var e=Object(g["b"])({models:{friend:g["a"],message:g["a"],memotest:g["a"]},seeds:function(e){e.create("friend",{id:"1",name:"保羅",introduction:"大家好，我是保羅~"}),e.create("friend",{id:"2",name:"傑克",introduction:"大家好，我是傑克~"}),e.create("friend",{id:"3",name:"傑森",introduction:"大家好，我是傑森~"}),e.create("message",{friendId:"1",content:["保羅","你好，我是潔西卡","我喜歡吃的食物有","各種巧克力口味的甜點"]}),e.create("message",{friendId:"2",content:["傑克","你好，我是潔西卡","我喜歡做的運動為","游泳,跑步"]}),e.create("message",{friendId:"3",content:["傑森","你好，我是潔西卡","我喜歡的動物為","貓,狗"]}),e.create("memotest",{friend_id:"1",date:"2019/07/01 13:45",text:"Paul-01"}),e.create("memotest",{friend_id:"1",date:"2019/07/02 13:45",text:"Paul-02"}),e.create("memotest",{friend_id:"2",date:"2019/07/01 13:45",text:"Jack-01"}),e.create("memotest",{friend_id:"2",date:"2019/07/02 13:45",text:"Jack-02"}),e.create("memotest",{friend_id:"3",date:"2019/07/01 13:45",text:"Jason-01"}),e.create("memotest",{friend_id:"3",date:"2019/07/02 13:45",text:"Jason-02"})},routes:function(){this.get("/memotests/:friendId",(function(e,t){var n=[];return e.memotests.all().filter((function(e){e.friend_id===t.params.friendId&&n.push(e)})),n})),this.post("/addMemo",(function(e,t){var n=JSON.parse(t.requestBody);return e.memotests.create(n)})),this.delete("/delete/:memoId",(function(e,t){var n=t.params.memoId;return e.memotests.find(n).destroy()})),this.get("/messages/:friendId",(function(e,t){var n=t.params.friendId,r=e.messages.all(),a=[];return r.filter((function(e){e.friendId===n&&(a=e)})),a})),this.get("/friends",(function(e){return e.friends.all()}))}});return e}y();var k=Object(r["c"])(l);k.use(b),k.use(v["a"]),k.mount("#app")},c665:function(e,t,n){"use strict";n("3a5a")}});
//# sourceMappingURL=app.e99d24ab.js.map