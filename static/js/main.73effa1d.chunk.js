(this.webpackJsonpunsplash=this.webpackJsonpunsplash||[]).push([[0],{42:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(9),r=n.n(s),l=(n(53),n(54),n(23)),i=n.n(l),o=n(32),u=n(10),j=(n(42),n(5)),h=n(45),b=n.n(h),d=n(2),O=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(u.a)(r,2),h=l[0],O=l[1],p=Object(c.useState)(!1),f=Object(u.a)(p,2),x=f[0],m=f[1],v=Object(j.f)(),g=Object(j.g)();Object(c.useEffect)((function(){a.length>2&&function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.unsplash.com/search?query=".concat(a,"&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log("response",t),O(n.related_searches),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[a]);var N=function(e,t){""!==a&&0!==h.length?null===e?v.push("/galery/".concat(a)):v.push("/galery/".concat(t)):m(!0)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"inputContainer",children:[Object(d.jsx)("input",{type:"text",className:"BrowserInput",placeholder:"Search free high-resolution photos",value:a,onChange:function(e){s(e.target.value),m(!1)},onKeyPress:function(e){"Enter"===e.code&&N(null)}}),Object(d.jsx)("div",{className:"searchIcon",style:{color:"/"===g.pathname?"white":"black"},onClick:function(e){return N(e,a)},children:Object(d.jsx)(b.a,{fontSize:"large"})})]}),Object(d.jsxs)("section",{className:"RelatedSearchesContainer",children:[h&&a.length>2&&"/"===g.pathname?h.map((function(e){return Object(d.jsx)("div",{className:"RelatedSearch",onClick:function(t){return N(t,e.title)},children:e.title})})):null,Object(d.jsx)("div",{className:"noSearches",style:{display:x?"block":"none"},children:"There are no results for the given phrase"})]})]})},p=(n(69),function(){return Object(d.jsx)("div",{className:"BrowserContainer",children:Object(d.jsxs)("section",{className:"UnsplashContainer",children:[Object(d.jsx)("header",{className:"UnsplashHeader",children:"UNSPLASH"}),Object(d.jsx)("p",{children:"The Internet's source of freely-usable images"}),Object(d.jsx)("p",{children:"Powered by creators everywhere"}),Object(d.jsx)(O,{})]})})}),f=n(31),x=(n(70),n(97)),m=n(98),v=n(96),g=function(){var e=Object(j.h)().searchTag,t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(u.a)(r,2),h=l[0],b=l[1],p=Object(c.useState)(!1),f=Object(u.a)(p,2),g=f[0],N=f[1],S=Object(c.useState)(null),y=Object(u.a)(S,2),C=y[0],w=y[1],k=Object(c.useState)(null),I=Object(u.a)(k,2),T=I[0],F=I[1],P=Object(c.useState)(null),R=Object(u.a)(P,2),W=R[0],B=R[1],D=Object(j.f)();Object(c.useEffect)((function(){(function(){var t=Object(o.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.unsplash.com/search?query=".concat(e,"&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ"));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,s(c.photos.results),b(c.related_searches),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var L=function(e){D.push("/galery/".concat(e))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"NavBar",children:Object(d.jsx)(O,{})}),Object(d.jsxs)("section",{className:"GaleryContainer",children:[e?Object(d.jsx)("p",{className:"SearchTag",children:e}):Object(d.jsx)("p",{children:"no searchtag provided"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"RelatedSearchesContainer",children:h?h.map((function(e){return Object(d.jsx)("div",{className:"RelatedSearch",onClick:function(){return L(e.title)},children:e.title})})):null}),Object(d.jsxs)("div",{className:"GaleryGrid",children:[Object(d.jsxs)(x.a,{open:g,onClose:function(){N(!1)},children:[Object(d.jsxs)(m.a,{children:["Taken by: ",T]}),Object(d.jsx)(v.a,{children:Object(d.jsx)("img",{className:"ModalImagePreview",src:C})}),Object(d.jsx)(m.a,{children:W})]}),a.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"Image",src:e.urls.small,onClick:function(){var t,n,c;t=e.urls.regular,n=e.user.name,c=e.user.location,N(!0),w(t),F(n),B(c)}}),Object(d.jsx)("div",{className:"IndividualTagsContainer",children:e.tags.map((function(e){return Object(d.jsx)("p",{className:"IndividualTag",onClick:function(){return L(e.title)},children:e.title})}))})]},e.id)})}))]})]})]})]})};var N=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(f.a,{basename:"/unsplash",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(j.a,{exact:!0,path:"/galery/:searchTag",component:g})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[72,1,2]]]);
//# sourceMappingURL=main.73effa1d.chunk.js.map