(window.webpackJsonp=window.webpackJsonp||[]).push([[312,341],{463:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=(t(23),t(17),t(18),t(50),t(532),t(467)),o=t(471),c=t(58),l=t(474),s=t(1),u=t(468),d=t.n(u),m=t(478),f=t(500),p=t(472),h=t(497),v=t(436),b=t.n(v);function g(e){var a=e.item,t=e.onItemClick,i=e.collapsible,o=a.items,c=a.href,l=a.label,u=a.type,m=Object(n.useState)(a.collapsed),f=m[0],v=m[1],b=Object(n.useState)(null),E=b[0],k=b[1];a.collapsed!==E&&(k(a.collapsed),v(a.collapsed));var w=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return o.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":f}),key:l},r.a.createElement("a",{className:d()("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&!a.collapsed}),href:"#!",onClick:i?w:void 0},l),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:t,collapsible:i})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(p.a,Object(s.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),l))}}var E=function(e){var a=Object(n.useState)(!1),t=a[0],i=a[1],c=Object(o.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig.navbar,s=(l=void 0===l?{}:l).title,u=l.logo,p=void 0===u?{}:u,h=Object(m.a)(p.src),v=e.docsSidebars,E=e.path,k=e.sidebar,w=e.sidebarCollapsible;if(Object(f.a)(t),!k)return null;var _=v[k];if(!_)throw new Error('Cannot find the sidebar "'+k+'" in the sidebar config!');return w&&_.forEach((function(e){return function e(a,t){var n=a.items,r=a.href;switch(a.type){case"category":var i=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!i,i;case"link":default:return r===t}}(e,E)})),r.a.createElement("div",{className:b.a.sidebar},r.a.createElement("div",{className:b.a.sidebarLogo},null!=p&&r.a.createElement("img",{src:h,alt:p.alt}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:d()("menu","menu--responsive",b.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){i(!t)}},t?r.a.createElement("span",{className:d()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},_.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:function(){i(!1)},collapsible:w})})))))},k=t(488),w=t(492),_=t(499),x=t(437),y=t.n(x);var C=function(e){var a=e.route,t=e.docsMetadata,n=e.location,s=a.routes.find((function(e){return Object(_.a)(n.pathname,e)}))||{},u=t.permalinkToSidebar,d=t.docsSidebars,m=t.version,f=u[s.path],p=Object(o.a)(),h=p.siteConfig,v=(h=void 0===h?{}:h).themeConfig,b=void 0===v?{}:v,g=p.isClient,x=b.sidebarCollapsible,C=void 0===x||x;return 0===Object.keys(s).length?r.a.createElement(w.default,e):r.a.createElement(l.a,{version:m,key:g},r.a.createElement("div",{className:y.a.docPage},f&&r.a.createElement("div",{className:y.a.docSidebarContainer},r.a.createElement(E,{docsSidebars:d,path:s.path,sidebar:f,sidebarCollapsible:C})),r.a.createElement("main",{className:y.a.docMainContainer},r.a.createElement(i.a,{components:k.a},Object(c.a)(a.routes)))))},N=(t(68),t(501),t(502),t(503),{4:["react-navigation@^4.0.10","react-navigation-tabs@^2.5.6","react-navigation-stack@^1.10.3","react-navigation-drawer@^2.3.3"],5:["@react-native-community/masked-view@^0.1.1","@react-navigation/native@5.0.4","@react-navigation/bottom-tabs@5.0.4","@react-navigation/drawer@5.0.4","@react-navigation/material-bottom-tabs@5.0.4","@react-navigation/material-top-tabs@5.0.4","@react-navigation/native-stack@5.0.4","@react-navigation/stack@5.0.4","react-native-gesture-handler@1.5.2","react-native-reanimated@1.4.0","react-native-safe-area-context@0.6.0","react-native-screens@2.0.0-alpha.12"],next:[]});function S(e){var a=function(){if(window.__reactNavigationVersion)return window.__reactNavigationVersion}(),t=e.label||document.title,n=e.code,r=e.templateId,i="next"===a?"next":a.match(/(\d+)\./)[1],o="https://snack.expo.io?platform=android&name="+encodeURIComponent(t)+"&dependencies="+encodeURIComponent(N[i].join(","));if(r){var c=document.location.origin+"/examples/"+a+"/"+r+".js";return o+"&sourceUrl="+encodeURIComponent(c)}return o+"&code="+encodeURIComponent(n)}var O,j='<svg width="14px" height="14px" viewBox="0 0 16 16" style="vertical-align: -1px"><g stroke="none" stroke-width="1" fill="none"><polyline stroke="currentColor" points="8.5 0.5 15.5 0.5 15.5 7.5"></polyline><path d="M8,8 L15.0710678,0.928932188" stroke="currentColor"></path><polyline stroke="currentColor" points="9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"></polyline></g></svg>';function I(){var e=document.querySelectorAll("samp");e.length&&e.forEach((function(e){var a=function(e){var a=e.nextElementSibling;for(a||"P"!==e.parentElement.tagName||(a=e.parentElement.nextElementSibling);a;){if("DIV"===a.tagName&&a.className.includes("mdxCodeBlock"))return a;a=a.nextElementSibling}}(e);if(a){var t=a.innerText,n=e.innerText,r=e.getAttribute("id"),i=document.createElement("a");i.className="snack-sample-link",i.dataset.snack=!0,i.target="_blank",i.innerHTML=n?'Try the "'+n+'" example on Snack '+j:"Try this example on Snack "+j;var o=S({code:t,templateId:r,label:n});i.href!==o&&(i.href=o,a.insertAdjacentElement("afterend",i),e.remove())}else console.log("Code block not found for <samp> element "+e.innerText)}))}function M(){document.querySelectorAll('a[href*="#example/"]').forEach((function(e){var a=e.href.split("#example/"),t=a[a.length-1];e.href=S({templateId:t}),e.target="_blank"}))}a.default=function(e){return r.a.useEffect((function(){window.__reactNavigationVersion=e.docsMetadata.version})),r.a.useEffect((function(){return I(),M(),(O=new MutationObserver((function(e){e.forEach(I),e.forEach(M)}))).observe(document.documentElement,{childList:!0,subtree:!0}),function(){O&&O.disconnect(),O=null}}),[]),r.a.createElement(C,e)}},475:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(66);var n=t(0),r=t.n(n),i=t(468),o=t.n(i),c=t(471);t(120);a.a=function(e){var a=Object(n.useState)(!1),i=a[0],l=a[1],s=Object(n.useRef)(null),u=Object(c.a)().siteConfig,d=(void 0===u?{}:u).themeConfig.algolia;var m=function(e){void 0===e&&(e=!0),i||Promise.all([t.e(340).then(t.t.bind(null,476,7)),t.e(237).then(t.t.bind(null,477,7))]).then((function(a){var t=a[0].default;l(!0),window.docsearch=t,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;window.open(r,"_self")}}),e&&s.current.focus()}(e)}))},f=Object(n.useCallback)((function(){m(),i&&s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),h=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;m(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:h,onFocus:h,onBlur:p,ref:s}))}},492:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(474);a.default=function(){return r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},532:function(e,a,t){"use strict";var n=t(19),r=t(533)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(72)("find")},533:function(e,a,t){var n=t(27),r=t(74),i=t(49),o=t(34),c=t(534);e.exports=function(e,a){var t=1==e,l=2==e,s=3==e,u=4==e,d=6==e,m=5==e||d,f=a||c;return function(a,c,p){for(var h,v,b=i(a),g=r(b),E=n(c,p,3),k=o(g.length),w=0,_=t?f(a,k):l?f(a,0):void 0;k>w;w++)if((m||w in g)&&(v=E(h=g[w],w,b),e))if(t)_[w]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return w;case 2:_.push(h)}else if(u)return!1;return d?-1:s||u?u:_}}},534:function(e,a,t){var n=t(535);e.exports=function(e,a){return new(n(e))(a)}},535:function(e,a,t){var n=t(12),r=t(536),i=t(2)("species");e.exports=function(e){var a;return r(e)&&("function"!=typeof(a=e.constructor)||a!==Array&&!r(a.prototype)||(a=void 0),n(a)&&null===(a=a[i])&&(a=void 0)),void 0===a?Array:a}},536:function(e,a,t){var n=t(21);e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);