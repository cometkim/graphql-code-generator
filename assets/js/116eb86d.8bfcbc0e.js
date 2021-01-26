(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(5),a=r(10),p=(r(1),r(341)),o={id:"import-types",title:"import-types"},i={unversionedId:"presets/import-types",id:"presets/import-types",isDocsHomePage:!1,title:"import-types",description:"This preset generates a file per each operation file, and allow to import types from another file.",source:"@site/docs/presets/import-types.md",slug:"/presets/import-types",permalink:"/docs/presets/import-types",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/import-types.md",version:"current",sidebar:"sidebar",previous:{title:"near-operation-file",permalink:"/docs/presets/near-operation-file"},next:{title:"graphql-modules",permalink:"/docs/presets/graphql-modules"}},s=[],c={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This preset generates a file per each operation file, and allow to import types from another file."),Object(p.b)("p",null,Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("img",{alt:"import-types-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/import-types-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(p.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/import-types-preset\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPath")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",{parentName:"p"},"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n preset: import-types\n presetConfig:\n   typesPath: types.ts\n plugins:\n   - typescript-operations\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"importTypesNamespace")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Types")),Object(p.b)("p",{parentName:"p"},"Optional, override the name of the import namespace used to import from the ",Object(p.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: import-types\n presetConfig:\n   typesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n"))))}m.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(1),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),m=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,u=l["".concat(o,".").concat(d)]||l[d]||b[d]||p;return r?a.a.createElement(u,i(i({ref:t},c),{},{components:r})):a.a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);