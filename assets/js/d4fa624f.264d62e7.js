(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(5),a=n(10),i=(n(1),n(341)),o={id:"time",title:"Time"},p={unversionedId:"plugins/time",id:"plugins/time",isDocsHomePage:!1,title:"Time",description:"{@import ../generated-config/time.md}",source:"@site/docs/plugins/time.md",slug:"/plugins/time",permalink:"/docs/plugins/time",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/time.md",version:"current",sidebar:"sidebar",previous:{title:"Add",permalink:"/docs/plugins/add"},next:{title:"Relay Operation Optimizer",permalink:"/docs/plugins/relay-operation-optimizer"}},c=[],m={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("h2",{parentName:"p"},"Installation"),Object(i.b)("img",{alt:"time plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/time?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",Object(r.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/time\n")))),Object(i.b)("h2",{parentName:"p"},"API Reference"),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"format")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ")),Object(i.b)("p",{parentName:"p"},"Customize the Moment format of the output time."),Object(i.b)("h4",{parentName:"p"},"Usage Examples"),Object(i.b)("pre",{parentName:"p"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - time:\n       format: DD.MM.YY\n")),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"message")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"'Generated on'")),Object(i.b)("p",{parentName:"p"},"Customize the comment message"),Object(i.b)("h4",{parentName:"p"},"Usage Examples"),Object(i.b)("pre",{parentName:"p"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'generates:\npath/to/file.ts:\n plugins:\n   - time:\n       message: "The file generated on: "\n'))))}b.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(1),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),b=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,d=s["".concat(o,".").concat(u)]||s[u]||l[u]||i;return n?a.a.createElement(d,p(p({ref:t},m),{},{components:n})):a.a.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);