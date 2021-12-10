"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9117:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"Tag"},p="liquid.tag.Tag",d={unversionedId:"api/Tag",id:"api/Tag",title:"liquid.tag.Tag",description:"Base class for all built-in and custom template tags.",source:"@site/docs/api/tag.md",sourceDirName:"api",slug:"/api/Tag",permalink:"/liquid/api/Tag",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/tag.md",tags:[],version:"current",frontMatter:{id:"Tag"},sidebar:"apiSidebar",previous:{title:"liquid.Context",permalink:"/liquid/api/context"},next:{title:"liquid.ast.Node",permalink:"/liquid/api/node"}},c=[{value:"<code>Tag</code>",id:"tag",children:[],level:2},{value:"Class Attributes",id:"class-attributes",children:[{value:"<code>block</code>",id:"block",children:[],level:3},{value:"<code>name</code>",id:"name",children:[],level:3},{value:"<code>end</code>",id:"end",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"<code>env</code>",id:"env",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>get_node</code>",id:"get_node",children:[],level:3},{value:"<code>parse</code>",id:"parse",children:[],level:3}],level:2}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liquidtagtag"},"liquid.tag.Tag"),(0,i.kt)("p",null,"Base class for all built-in and ",(0,i.kt)("a",{parentName:"p",href:"/guides/custom-tags"},"custom template tags"),"."),(0,i.kt)("h2",{id:"tag"},(0,i.kt)("inlineCode",{parentName:"h2"},"Tag")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"class Tag(env)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env: liquid.Environment")," - The ",(0,i.kt)("a",{parentName:"li",href:"Environment"},"Environment")," that manages this tag.")),(0,i.kt)("h2",{id:"class-attributes"},"Class Attributes"),(0,i.kt)("h3",{id:"block"},(0,i.kt)("inlineCode",{parentName:"h3"},"block")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"block: bool = True")),(0,i.kt)("p",null,"Indicates if the tag is a block tag."),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'name: str = ""')),(0,i.kt)("p",null,"The name of the tag. Like ",(0,i.kt)("inlineCode",{parentName:"p"},'"if"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"for"'),"."),(0,i.kt)("h3",{id:"end"},(0,i.kt)("inlineCode",{parentName:"h3"},"end")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'end: str = ""')),(0,i.kt)("p",null,"The end or closing tag name. If ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," must be set. By convention it is\n",(0,i.kt)("inlineCode",{parentName:"p"},'"end<tag.name>"'),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"env"},(0,i.kt)("inlineCode",{parentName:"h3"},"env")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"env: liquid.Environment")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"Environment"},"Environment")," that manages this tag."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"get_node"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_node")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_node(self, stream: TokenStream) -> Node")),(0,i.kt)("p",null,"Used internally to delegate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag.parse"),"."),(0,i.kt)("h3",{id:"parse"},(0,i.kt)("inlineCode",{parentName:"h3"},"parse")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parse(self, stream: TokenStream) -> Node:")),(0,i.kt)("p",null,"Abstract method. Return a parse tree node by parsing tokens from the given stream. Every tag must\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"."))}s.isMDXComponent=!0}}]);