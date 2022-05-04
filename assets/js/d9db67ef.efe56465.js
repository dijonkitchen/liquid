"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[639],{3905:function(e,i,n){n.d(i,{Zo:function(){return s},kt:function(){return x}});var r=n(7294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function a(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=r.createContext({}),p=function(e){var i=r.useContext(u),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},s=function(e){var i=p(e.components);return r.createElement(u.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},c=r.forwardRef((function(e,i){var n=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),x=t,m=c["".concat(u,".").concat(x)]||c[x]||d[x]||l;return n?r.createElement(m,o(o({ref:i},s),{},{components:n})):r.createElement(m,o({ref:i},s))}));function x(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=c;var a={};for(var u in i)hasOwnProperty.call(i,u)&&(a[u]=i[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5909:function(e,i,n){n.r(i),n.d(i,{assets:function(){return s},contentTitle:function(){return u},default:function(){return x},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var r=n(7462),t=n(3366),l=(n(7294),n(3905)),o=["components"],a={},u="liquid.exceptions",p={unversionedId:"api/exceptions",id:"api/exceptions",title:"liquid.exceptions",description:"liquid.exceptions.Error",source:"@site/docs/api/exceptions.md",sourceDirName:"api",slug:"/api/exceptions",permalink:"/liquid/api/exceptions",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/exceptions.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"liquid.ast.Node",permalink:"/liquid/api/node"},next:{title:"liquid.template.TemplateAnalysis",permalink:"/liquid/api/template-analysis"}},s={},d=[{value:"liquid.exceptions.Error",id:"liquidexceptionserror",level:2},{value:"liquid.exceptions.LiquidSyntaxError",id:"liquidexceptionsliquidsyntaxerror",level:2},{value:"liquid.exceptions.LiquidTypeError",id:"liquidexceptionsliquidtypeerror",level:2},{value:"liquid.exceptions.DisabledTagError",id:"liquidexceptionsdisabledtagerror",level:2},{value:"liquid.exceptions.NoSuchFilterFunc",id:"liquidexceptionsnosuchfilterfunc",level:2},{value:"liquid.exceptions.FilterError",id:"liquidexceptionsfiltererror",level:2},{value:"liquid.exceptions.FilterArgumentError",id:"liquidexceptionsfilterargumenterror",level:2},{value:"liquid.exceptions.FilterValueError",id:"liquidexceptionsfiltervalueerror",level:2},{value:"liquid.exceptions.TemplateNotFound",id:"liquidexceptionstemplatenotfound",level:2},{value:"liquid.exceptions.ContextDepthError",id:"liquidexceptionscontextdeptherror",level:2},{value:"liquid.exceptions.TemplateTraversalError",id:"liquidexceptionstemplatetraversalerror",level:2},{value:"liquid.exceptions.UndefinedError",id:"liquidexceptionsundefinederror",level:2}],c={toc:d};function x(e){var i=e.components,n=(0,t.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"liquidexceptions"},"liquid.exceptions"),(0,l.kt)("h2",{id:"liquidexceptionserror"},"liquid.exceptions.Error"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.Error(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Base class for all Liquid exceptions."),(0,l.kt)("h2",{id:"liquidexceptionsliquidsyntaxerror"},"liquid.exceptions.LiquidSyntaxError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.LiquidSyntaxError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when there is a parser error."),(0,l.kt)("h2",{id:"liquidexceptionsliquidtypeerror"},"liquid.exceptions.LiquidTypeError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.LiquidTypeError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when an error occurs at render time."),(0,l.kt)("h2",{id:"liquidexceptionsdisabledtagerror"},"liquid.exceptions.DisabledTagError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.DisabledTagError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when an attempt is made to render a disabled tag."),(0,l.kt)("h2",{id:"liquidexceptionsnosuchfilterfunc"},"liquid.exceptions.NoSuchFilterFunc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.NoSuchFilterFunc(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filter lookup fails."),(0,l.kt)("h2",{id:"liquidexceptionsfiltererror"},"liquid.exceptions.FilterError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Base class of all filter related errors."),(0,l.kt)("h2",{id:"liquidexceptionsfilterargumenterror"},"liquid.exceptions.FilterArgumentError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterArgumentError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filter's arguments are invalid."),(0,l.kt)("h2",{id:"liquidexceptionsfiltervalueerror"},"liquid.exceptions.FilterValueError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterValueError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filter'ss value is invalid."),(0,l.kt)("h2",{id:"liquidexceptionstemplatenotfound"},"liquid.exceptions.TemplateNotFound"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.TemplateNotFound(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a template could not be found."),(0,l.kt)("h2",{id:"liquidexceptionscontextdeptherror"},"liquid.exceptions.ContextDepthError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.ContextDepthError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when the maximum context depth is reached."),(0,l.kt)("p",null,"Usually indicates recursive use of render or include tags."),(0,l.kt)("h2",{id:"liquidexceptionstemplatetraversalerror"},"liquid.exceptions.TemplateTraversalError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.TemplateTraversalError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when an AST node or expression can not be visited.."),(0,l.kt)("h2",{id:"liquidexceptionsundefinederror"},"liquid.exceptions.UndefinedError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.UndefinedError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised by the StrictUndefined type."))}x.isMDXComponent=!0}}]);