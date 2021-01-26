(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(5),r=n(10),o=(n(1),n(341)),l={id:"documents-field",title:"`documents` field"},c={unversionedId:"getting-started/documents-field",id:"getting-started/documents-field",isDocsHomePage:!1,title:"`documents` field",description:"The documents field should point to your GraphQL documents: query, mutation, subscription and fragment.",source:"@site/docs/getting-started/documents-field.md",slug:"/getting-started/documents-field",permalink:"/docs/getting-started/documents-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/documents-field.md",version:"current",sidebar:"sidebar",previous:{title:"`schema` field",permalink:"/docs/getting-started/schema-field"},next:{title:"`config` field",permalink:"/docs/getting-started/config-field"}},i=[{value:"How to use it?",id:"how-to-use-it",children:[{value:"Root level",id:"root-level",children:[]},{value:"Output-file level",id:"output-file-level",children:[]},{value:"Document Scanner",id:"document-scanner",children:[]}]},{value:"Available Formats",id:"available-formats",children:[]},{value:"GraphQL Tag Pluck",id:"graphql-tag-pluck",children:[]},{value:"Custom Document Loader",id:"custom-document-loader",children:[]}],p={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"documents")," field should point to your GraphQL documents: ",Object(o.b)("inlineCode",{parentName:"p"},"query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutation"),", ",Object(o.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fragment"),"."),Object(o.b)("p",null,"It's optional, and required only if you are using plugins that generates code for the client-side."),Object(o.b)("p",null,"You can specify either a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," pointing to your documents, or ",Object(o.b)("inlineCode",{parentName:"p"},"string[]")," point to multiple documents."),Object(o.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(o.b)("h3",{id:"root-level"},"Root level"),Object(o.b)("p",null,"You can specify the ",Object(o.b)("inlineCode",{parentName:"p"},"documents")," field in your root level config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ndocuments: 'src/**/*.graphql'\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(o.b)("h3",{id:"output-file-level"},"Output-file level"),Object(o.b)("p",null,"You can also specify the ",Object(o.b)("inlineCode",{parentName:"p"},"documents")," field in your generated file config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://server1.com/graphql\ngenerates:\n  ./src/types1.ts:\n    documents: 'src/**/*.graphql'\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(o.b)("h3",{id:"document-scanner"},"Document Scanner"),Object(o.b)("p",null,"The code-generator has a built-in document scanner, which means that you can specify a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file or code files that contains GraphQL documents."),Object(o.b)("p",null,"You can tell it to find documents in TypeScript files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'schema: http://server1.com/graphql\ndocuments: "src/**/!(*.d).{ts,tsx}"\n')),Object(o.b)("h2",{id:"available-formats"},"Available Formats"),Object(o.b)("p",null,"The following can be specified as a single value or as an array with mixed values."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h3",Object(a.a)({parentName:"li"},{id:"local-file"}),"Local File"))),Object(o.b)("p",null,"You can specify a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," to point to a single file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents: my-query.graphql\n")),Object(o.b)("p",null,"Or ",Object(o.b)("inlineCode",{parentName:"p"},"string[]")," to point to multiple files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - my-query.graphql\n  - my-other-query.graphql\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h3",Object(a.a)({parentName:"li"},{id:"glob-expression"}),"Glob Expression"))),Object(o.b)("p",null,"You can specify a Glob expression in order to load multiple files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents: './src/**/*.graphql'\n")),Object(o.b)("p",null,"You can also specify multiple Glob expressions as an array:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/dir1/*.graphql'\n  - './src/dir2/*.graphql'\n")),Object(o.b)("p",null,"You can specify files to exclude by prefixing the Glob expression with ",Object(o.b)("inlineCode",{parentName:"p"},"!"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/**/*.graphql'\n  - '!*.generated.graphql'\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"All provided glob expressions are evaluated together. The usage is similar to ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(o.b)("p",null,"Additionally, you can use code files and the codegen will try to extract the GraphQL documents from it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/*.jsx'\n")),Object(o.b)("p",null,"The codegen will try to load the file as an AST and look for explicit GraphQL operations strings, but if it can't find those, it will try to ",Object(o.b)("inlineCode",{parentName:"p"},"require")," the file and look for operations in the default export."),Object(o.b)("p",null,"You can disable the ",Object(o.b)("inlineCode",{parentName:"p"},"require")," if it causes errors for you (for example, because of different module system):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/*.jsx':\n    noRequire: true\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Your operations should be declared as template strings with the ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," tag or with a GraphQL comment (",Object(o.b)("inlineCode",{parentName:"p"},"const myQuery = /* GraphQL*/`query { ... }`"),"). This can be configured with ",Object(o.b)("inlineCode",{parentName:"p"},"pluckConfig")," (see below).")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h3",Object(a.a)({parentName:"li"},{id:"string"}),"String"))),Object(o.b)("p",null,"You can specify your GraphQL documents directly as an AST string in your config file. It's very useful for testing."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - 'query { f1 }'\n  - 'query { f2 }'\n")),Object(o.b)("h2",{id:"graphql-tag-pluck"},"GraphQL Tag Pluck"),Object(o.b)("p",null,"GraphQL Code Generator uses ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tag-pluck")," internally to extract GraphQL documents from your code file."),Object(o.b)("p",null,"If you are pointing to a code file (such as ",Object(o.b)("inlineCode",{parentName:"p"},".js")," or ",Object(o.b)("inlineCode",{parentName:"p"},".jsx"),"), GraphQL will try to look for usages of ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," tag, or string literals that are using magic GraphQL comment (",Object(o.b)("inlineCode",{parentName:"p"},"/* GraphQL */"),"), for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { gql } from 'graphql-tag';\n\n// This will work\nconst MY_QUERY = gql`\n  query myQuery {\n    getSomething {\n      id\n    }\n  }\n`;\n\n// This will also work\nconst MY_QUERY = /* GraphQL */`\n  query myQuery {\n    getSomething {\n      id\n    }\n  }\n`;\n\n// ... some components code ...\n")),Object(o.b)("p",null,"By default, it has a predefined list of popular ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," tags to look for, in order to make sure it's not trying to extract an invalid or unrelated string. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/graphql-tag-pluck/src/visitor.ts#L12"}),"The default list could be found here")),Object(o.b)("p",null,"You can add custom tags if you need, by using ",Object(o.b)("inlineCode",{parentName:"p"},"pluckConfig")," on the root level on your config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  modules:\n    - name: my-custom-module\n      identifier: gql\n")),Object(o.b)("p",null,"You can also customize globally used identifiers, like that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  globalGqlIdentifierName:\n    - gql\n    - graphql\n    - myCustomGlobalGqlTag\n")),Object(o.b)("p",null,"And you can customize the magic GraphQL commend by doing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  gqlMagicComment: customcomment\n")),Object(o.b)("h2",{id:"custom-document-loader"},"Custom Document Loader"),Object(o.b)("p",null,"If your schema has a different or complicated way of loading, you can specify a custom loader with the ",Object(o.b)("inlineCode",{parentName:"p"},"loader")," field."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'documents:\n    - "**/*.graphql":\n        loader: my-documents-loader.js\n')),Object(o.b)("p",null,"Your custom loader should export a default function that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"DocumentNode"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { parse } = require('graphql');\nconst { readFileSync } = require('fs');\n\nmodule.exports = function(docString, config) {\n  return parse(readFileSync(docString, { encoding: 'utf-8' }));\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The second parameter passed to the loader function is a config object that includes a ",Object(o.b)("inlineCode",{parentName:"p"},"pluginContext")," property. This value is passed to any executed plugins, so it can be modified by the loader to pass any additional information to those plugins.")))}s.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(1),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);