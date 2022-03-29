"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[639],{3905:function(e,i,n){n.d(i,{Zo:function(){return d},kt:function(){return x}});var r=n(7294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function u(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var a=r.createContext({}),p=function(e){var i=r.useContext(a),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},d=function(e){var i=p(e.components);return r.createElement(a.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},s=r.forwardRef((function(e,i){var n=e.components,t=e.mdxType,l=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(n),x=t,f=s["".concat(a,".").concat(x)]||s[x]||c[x]||l;return n?r.createElement(f,o(o({ref:i},d),{},{components:n})):r.createElement(f,o({ref:i},d))}));function x(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=s;var u={};for(var a in i)hasOwnProperty.call(i,a)&&(u[a]=i[a]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5909:function(e,i,n){n.r(i),n.d(i,{assets:function(){return d},contentTitle:function(){return a},default:function(){return x},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),t=n(3366),l=(n(7294),n(3905)),o=["components"],u={},a="liquid.exceptions",p={unversionedId:"api/exceptions",id:"api/exceptions",title:"liquid.exceptions",description:"liquid.exceptions.Error",source:"@site/docs/api/exceptions.md",sourceDirName:"api",slug:"/api/exceptions",permalink:"/liquid/api/exceptions",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/exceptions.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"liquid.ast.Node",permalink:"/liquid/api/node"}},d={},c=[{value:"liquid.exceptions.Error",id:"liquidexceptionserror",level:2},{value:"liquid.exceptions.LiquidSyntaxError",id:"liquidexceptionsliquidsyntaxerror",level:2},{value:"liquid.exceptions.LiquidTypeError",id:"liquidexceptionsliquidtypeerror",level:2},{value:"liquid.exceptions.DisabledTagError",id:"liquidexceptionsdisabledtagerror",level:2},{value:"liquid.exceptions.NoSuchFilterFunc",id:"liquidexceptionsnosuchfilterfunc",level:2},{value:"liquid.exceptions.FilterError",id:"liquidexceptionsfiltererror",level:2},{value:"liquid.exceptions.FilterArgumentError",id:"liquidexceptionsfilterargumenterror",level:2},{value:"liquid.exceptions.FilterValueError",id:"liquidexceptionsfiltervalueerror",level:2},{value:"liquid.exceptions.TemplateNotFound",id:"liquidexceptionstemplatenotfound",level:2},{value:"liquid.exceptions.ContextDepthError",id:"liquidexceptionscontextdeptherror",level:2},{value:"liquid.exceptions.UndefinedError",id:"liquidexceptionsundefinederror",level:2}],s={toc:c};function x(e){var i=e.components,n=(0,t.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"liquidexceptions"},"liquid.exceptions"),(0,l.kt)("h2",{id:"liquidexceptionserror"},"liquid.exceptions.Error"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.Error(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Base class for all Liquid exceptions."),(0,l.kt)("h2",{id:"liquidexceptionsliquidsyntaxerror"},"liquid.exceptions.LiquidSyntaxError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.LiquidSyntaxError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when there is a parser error."),(0,l.kt)("h2",{id:"liquidexceptionsliquidtypeerror"},"liquid.exceptions.LiquidTypeError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.LiquidTypeError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when an error occurs at render time."),(0,l.kt)("h2",{id:"liquidexceptionsdisabledtagerror"},"liquid.exceptions.DisabledTagError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.DisabledTagError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when an attempt is made to render a disabled tag."),(0,l.kt)("h2",{id:"liquidexceptionsnosuchfilterfunc"},"liquid.exceptions.NoSuchFilterFunc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.NoSuchFilterFunc(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filter lookup fails."),(0,l.kt)("h2",{id:"liquidexceptionsfiltererror"},"liquid.exceptions.FilterError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Base class of all filter related errors."),(0,l.kt)("h2",{id:"liquidexceptionsfilterargumenterror"},"liquid.exceptions.FilterArgumentError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterArgumentError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filters arguments are invalid."),(0,l.kt)("h2",{id:"liquidexceptionsfiltervalueerror"},"liquid.exceptions.FilterValueError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.FilterValueError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a filters value is invalid."),(0,l.kt)("h2",{id:"liquidexceptionstemplatenotfound"},"liquid.exceptions.TemplateNotFound"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.TemplateNotFound(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when a template could not be found."),(0,l.kt)("h2",{id:"liquidexceptionscontextdeptherror"},"liquid.exceptions.ContextDepthError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.ContextDepthError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised when the maximum context depth is reached."),(0,l.kt)("p",null,"Usually indicates recursive use of render or include tags."),(0,l.kt)("h2",{id:"liquidexceptionsundefinederror"},"liquid.exceptions.UndefinedError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"class liquid.exceptions.UndefinedError(*args, linenum=None, filename=None)")),(0,l.kt)("p",null,"Exception raised by the StrictUndefined type."))}x.isMDXComponent=!0}}]);