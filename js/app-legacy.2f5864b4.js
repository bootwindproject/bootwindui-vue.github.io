(function(t){function e(e){for(var n,r,l=e[0],i=e[1],c=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a={app:0},s=[];function l(t){return i.p+"js/"+({about:"about","c-alert":"c-alert"}[t]||t)+"-legacy."+{about:"98099b61","c-alert":"b2be67b9"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o={"c-alert":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({about:"about","c-alert":"c-alert"}[t]||t)+"."+{about:"31d6cfe0","c-alert":"42e7a06f"}[t]+".css",a=i.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===a))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],p.parentNode.removeChild(p),o(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1cd7":function(t,e,o){t.exports=o.p+"img/logo-bootwind-template.73dd23cc.png"},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className,attrs:{id:"app"}},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"hidden bg-gray-100 sidebar-bg-close text-right p-3 px-5 ",on:{click:t.toggleMenu}},[n("span",[t._v("Close")])]),n("div",{staticClass:" w-full lg:w-1/6 "},[n("nav-menu",{staticClass:"lg:pt-16"})],1),n("div",{staticClass:"w-full lg:w-5/6"},[n("div",{staticClass:"flex fixed top-0 right-0 bg-indigo-800 text-white w-full shadow-sm p-2 px-6 z-40"},[n("div",{staticClass:"block lg:hidden py-1 px-2 shadow-sm rounded-lg  text-white text-sm",on:{click:t.toggleMenu}},[n("svg",{attrs:{id:"i-menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"}})])]),n("h1",{staticClass:" py-1 px-3 font-bold text-lg text-center flex"},[n("img",{staticClass:"border-solid border-2 border-indigo-100 rounded-full",attrs:{width:"30px",src:o("84a1"),alt:"logo-bootwind-template"}}),n("router-link",{staticClass:"font-semibold text-xl tracking-tight ml-3",attrs:{to:"/"}},[t._v(" BootWind ")])],1),n("div",{staticClass:"ml-auto p-1 hidden lg:block"},[n("router-link",{attrs:{to:"/"}},[t._v(" Github")])],1)]),n("router-view",{staticClass:"bg-gray-100 pt-16 p-3 min-h-screen"})],1)])])},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"hidden lg:block bg-white shadow-sm p-3 fixed top-0 w-full lg:w-1/6 sidebar"},[o("div",{staticClass:"flex flex-col"},[o("h2",{staticClass:"text-indigo-800 font-bold w-full py-2 px-4 flex"},[o("svg",{staticClass:"w-6 p-1 -mt-1",attrs:{id:"i-book",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[o("path",{attrs:{d:"M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"}})]),t._v(" Documentation")]),o("div",{staticClass:"flex flex-col pl-4"},[o("a",{class:t.nonActiveClass,attrs:{href:"#"}},[t._v(" Tailwind Css")]),o("a",{class:t.nonActiveClass,attrs:{href:"#"}},[t._v(" Vue Js")])])]),o("div",{staticClass:"flex flex-col"},[o("h2",{staticClass:"text-indigo-800 font-bold w-full py-2 px-4 flex"},[o("svg",{staticClass:"w-6 p-1 -mt-1",attrs:{id:"i-folder",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[o("path",{attrs:{d:"M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12"}})]),t._v(" Component")]),o("div",{staticClass:"flex flex-col pl-4"},[o("router-link",{class:"/component/alert"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/alert"}},[t._v("Alert")]),o("router-link",{class:"/component/badge"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/badge"}},[t._v("Badge")]),o("router-link",{class:"/component/button"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/button"}},[t._v("Button")]),o("router-link",{class:"/component/card"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/card"}},[t._v("Card")]),o("router-link",{class:"/component/carousel"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/carousel"}},[t._v("Carousel")]),o("router-link",{class:"/component/collapse"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/collapse"}},[t._v("Collapse")]),o("router-link",{class:"/component/dropdown"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/component/dropdown"}},[t._v("Dropdown")])],1)]),o("div",{staticClass:"flex flex-col"},[o("h2",{staticClass:"text-indigo-800 font-bold w-full py-2 px-4 flex"},[o("svg",{staticClass:"w-6 p-1 -mt-1",attrs:{id:"i-portfolio",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[o("path",{attrs:{d:"M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8"}})]),t._v(" Template")]),o("div",{staticClass:"flex flex-col pl-4"},[o("router-link",{class:"/template/login"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/template/login"}},[t._v("Login")]),o("router-link",{class:"/template/register"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/template/register"}},[t._v("Register")]),o("router-link",{class:"/template/profile"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/template/profile"}},[t._v("Profile")]),o("router-link",{class:"/template/admin-dashboard"==t.$route.path?t.activeClass:t.nonActiveClass,attrs:{to:"/template/admin-dashboard"}},[t._v("Admin Dashboard")])],1)])])},l=[],i={data(){return{activeClass:"bg-gray-200 text-indigo-800 rounded-tl-md rounded-br-md w-full py-1 px-4",nonActiveClass:"rounded w-full py-1 px-4"}}},c=i,u=o("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null),p=d.exports,f={components:{navMenu:p},data(){return{alert:!0,className:""}},methods:{toggleMenu(){"sidebar-active"==this.className?this.className="":this.className="sidebar-active"}},watch:{$route(t,e){this.className=""}}},m=f,v=(o("5c0b"),Object(u["a"])(m,r,a,!1,null,null,null)),h=v.exports,g=o("9483");Object(g["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var b=o("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-col mx-auto items-center mt-32"},[n("img",{staticClass:"mx-auto my-3",attrs:{width:"150px",src:o("1cd7"),alt:"logo-bootwind-template"}}),n("div",{staticClass:"p-2 px-5 text-indigo-800 rounded-full mt-3",attrs:{role:"alert"}},[n("h1",{staticClass:"font-bold text-xl"},[t._v("Welcome to BootWind Template")])])])])}],x={},k=Object(u["a"])(x,w,C,!1,null,null,null),y=k.exports;n["a"].use(b["a"]);const _=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/component/alert",name:"Alert",meta:{title:"Alert Component BootWind Template",metaTags:[{name:"description",content:"Vue Alert Component Tailwind CSS "}]},component:function(){return o.e("c-alert").then(o.bind(null,"8566"))}}],A=new b["a"]({routes:_});A.beforeEach((t,e,o)=>{const n=t.matched.slice().reverse().find(t=>t.meta&&t.meta.title),r=t.matched.slice().reverse().find(t=>t.meta&&t.meta.metaTags);e.matched.slice().reverse().find(t=>t.meta&&t.meta.metaTags);if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(t=>t.parentNode.removeChild(t)),!r)return o();r.meta.metaTags.map(t=>{const e=document.createElement("meta");return Object.keys(t).forEach(o=>{e.setAttribute(o,t[o])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(t=>document.head.appendChild(t)),o()});var j=A,M=o("2f62");n["a"].use(M["a"]);var E=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});o("ba8c");n["a"].config.productionTip=!1,new n["a"]({router:j,store:E,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),r=o.n(n);r.a},"84a1":function(t,e,o){t.exports=o.p+"img/logo-bootwind-template-sm.cf2c8917.png"},"9c0c":function(t,e,o){},ba8c:function(t,e,o){}});
//# sourceMappingURL=app-legacy.2f5864b4.js.map