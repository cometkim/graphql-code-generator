(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(5),i=n(10),p=(n(1),n(341)),r={},c={unversionedId:"generated-config/typescript-compatibility",id:"generated-config/typescript-compatibility",isDocsHomePage:!1,title:"typescript-compatibility",description:"If you are migrating from <1.0, we created a new plugin called typescript-compatibility that generates backward compatibility for the typescript-operations and typescript-react-apollo plugins.",source:"@site/docs/generated-config/typescript-compatibility.md",slug:"/generated-config/typescript-compatibility",permalink:"/docs/generated-config/typescript-compatibility",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-compatibility.md",version:"current"},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>noNamespaces</code>",id:"nonamespaces",children:[]},{value:"<code>strict</code>",id:"strict",children:[]},{value:"<code>preResolveTypes</code>",id:"preresolvetypes",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],l={toc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"If you are migrating from <1.0, we created a new plugin called ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-compatibility")," that generates backward compatibility for the ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-operations")," and ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-react-apollo")," plugins."),Object(p.b)("p",null,"It generates types that are pointing to the new form of types. It supports ",Object(p.b)("em",{parentName:"p"},"most")," of the use-cases."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("img",{alt:"typescript-compatibility plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-compatibility?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(p.b)("div",{className:"admonition admonition-shell"},Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-compatibility\n")))),Object(p.b)("h2",{id:"api-reference"},"API Reference"),Object(p.b)("h3",{id:"nonamespaces"},Object(p.b)("inlineCode",{parentName:"h3"},"noNamespaces")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Does not generate TypeScript ",Object(p.b)("inlineCode",{parentName:"p"},"namespace"),"s and uses the operation name as prefix."),Object(p.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   noNamespaces: true\n")),Object(p.b)("h3",{id:"strict"},Object(p.b)("inlineCode",{parentName:"h3"},"strict")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Make sure to generate code that compatible with TypeScript strict mode."),Object(p.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   strict: true\n")),Object(p.b)("h3",{id:"preresolvetypes"},Object(p.b)("inlineCode",{parentName:"h3"},"preResolveTypes")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Avoid using ",Object(p.b)("inlineCode",{parentName:"p"},"Pick")," in ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-operations")," and make sure to optimize this package as well."),Object(p.b)("h3",{id:"scalars"},Object(p.b)("inlineCode",{parentName:"h3"},"scalars")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(p.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h3",{id:"namingconvention"},Object(p.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(p.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(p.b)("h3",{id:"typesprefix"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",null,"Prefixes all the generated types."),Object(p.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{id:"typessuffix"},Object(p.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",null,"Suffixes all the generated types."),Object(p.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(p.b)("h3",{id:"skiptypename"},Object(p.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{id:"nonoptionaltypename"},Object(p.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(p.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(p.b)("h3",{id:"usetypeimports"},Object(p.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Will use ",Object(p.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(p.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}s.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(1),i=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||p;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,r=new Array(p);r[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<p;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);