(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(5),a=r(10),o=(r(1),r(341)),i={id:"presets-index",title:"All Presets"},c={unversionedId:"presets/presets-index",id:"presets/presets-index",isDocsHomePage:!1,title:"All Presets",description:"GraphQL Code Generator also support presets - which is a way to manipulate and affect the execution of plugins.",source:"@site/docs/presets/index.md",slug:"/presets/presets-index",permalink:"/docs/presets/presets-index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/index.md",version:"current",sidebar:"sidebar",previous:{title:"Relay Operation Optimizer",permalink:"/docs/plugins/relay-operation-optimizer"},next:{title:"near-operation-file",permalink:"/docs/presets/near-operation-file"}},l=[{value:"Available Presets",id:"available-presets",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Code Generator also support presets - which is a way to manipulate and affect the execution of plugins."),Object(o.b)("p",null,"Presets are CLI extensions, that allow manipulation of a ",Object(o.b)("inlineCode",{parentName:"p"},"generates")," section of codegen, based on custom logic."),Object(o.b)("p",null,"You can use and writes presets to tell codegen which output files to creates, and what each one should include."),Object(o.b)("h2",{id:"available-presets"},"Available Presets"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Package Name & Docs"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"near-operation-file")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates operation code near the source file"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/presets/near-operation-file"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-codegen/near-operation-file-preset")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"import-types-")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allow you to separate base types declarations and the operations that uses it"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/presets/import-types"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-codegen/import-types-preset")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"graphql-modules")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates types and resolvers signature for GraphQL-Modules"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/presets/graphql-modules"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-codegen/graphql-modules-preset")))))))}s.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(1),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);