"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[474],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},p="liquid.Context",d={unversionedId:"api/context",id:"api/context",title:"liquid.Context",description:"The result of rendering a template depends on the context in which it is rendered. That is,",source:"@site/docs/api/context.md",sourceDirName:"api",slug:"/api/context",permalink:"/liquid/api/context",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/context.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"liquid.loaders.DictLoader",permalink:"/liquid/api/dictloader"},next:{title:"liquid.tag.Tag",permalink:"/liquid/api/Tag"}},c=[{value:"<code>Context</code>",id:"context",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>env</code>",id:"env",children:[],level:3},{value:"<code>locals</code>",id:"locals",children:[],level:3},{value:"<code>globals</code>",id:"globals",children:[],level:3},{value:"<code>counters</code>",id:"counters",children:[],level:3},{value:"<code>scope</code>",id:"scope",children:[],level:3},{value:"<code>loops</code>",id:"loops",children:[],level:3},{value:"<code>disabled_tags</code>",id:"disabled_tags",children:[],level:3},{value:"<code>autoescape</code>",id:"autoescape",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>assign</code>",id:"assign",children:[],level:3},{value:"<code>get</code>",id:"get",children:[],level:3},{value:"<code>get_async</code>",id:"get_async",children:[],level:3},{value:"<code>resolve</code>",id:"resolve",children:[],level:3},{value:"<code>filter</code>",id:"filter",children:[],level:3},{value:"<code>get_template</code>",id:"get_template",children:[],level:3},{value:"<code>get_template_async</code>",id:"get_template_async",children:[],level:3},{value:"<code>extend</code>",id:"extend",children:[],level:3},{value:"<code>copy</code>",id:"copy",children:[],level:3},{value:"<code>error</code>",id:"error",children:[],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"liquidcontext"},"liquid.Context"),(0,r.kt)("p",null,"The result of rendering a template depends on the ",(0,r.kt)("em",{parentName:"p"},"context")," in which it is rendered. That is,\navailable variables and their values, and options set on the bound ",(0,r.kt)("a",{parentName:"p",href:"Environment"},"Environment"),"."),(0,r.kt)("p",null,"You probably don't want to instantiate a context directly. A new one is created automatically every\ntime a template is rendered. If you're writing custom tags, consider ",(0,r.kt)("a",{parentName:"p",href:"#copy"},"copying")," or\n",(0,r.kt)("a",{parentName:"p",href:"#extend"},"extending")," an existing context."),(0,r.kt)("h2",{id:"context"},(0,r.kt)("inlineCode",{parentName:"h2"},"Context")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"class Context(env, [options])")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"env: liquid.Environment")," - The ",(0,r.kt)("a",{parentName:"p",href:"Environment"},"Environment")," associated with this context.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"globals: Optional[Mapping[str, object]]")," - Template global variables.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"disabled_tags: Optional[List[str]]"),' - A list of tags names that are disallowed in this context.\nFor example, partial templates rendered using the "render" tag are not allowed to use "include"\ntags.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"copy_depth: int = 0")," - The number times a context was copied to create this one."))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"env"},(0,r.kt)("inlineCode",{parentName:"h3"},"env")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"liquid.Environment")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"Environment"},"Environment")," associated with this context."),(0,r.kt)("h3",{id:"locals"},(0,r.kt)("inlineCode",{parentName:"h3"},"locals")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Dict[str, Any]")),(0,r.kt)("p",null,"A namespace for template local variables. Those that are bound with ",(0,r.kt)("inlineCode",{parentName:"p"},"assign")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"capture"),"."),(0,r.kt)("h3",{id:"globals"},(0,r.kt)("inlineCode",{parentName:"h3"},"globals")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping[str, object]")),(0,r.kt)("p",null,"A read-only namespace containing globally available variables. Usually passed down from the\nenvironment."),(0,r.kt)("h3",{id:"counters"},(0,r.kt)("inlineCode",{parentName:"h3"},"counters")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Dict[str, int]")),(0,r.kt)("p",null,"A namespace for ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement")," counters."),(0,r.kt)("h3",{id:"scope"},(0,r.kt)("inlineCode",{parentName:"h3"},"scope")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlyChainMap")),(0,r.kt)("p",null,"Namespaces are searched using this chain map. When a context is extended, the temporary namespace is\npushed to the front of this chain."),(0,r.kt)("h3",{id:"loops"},(0,r.kt)("inlineCode",{parentName:"h3"},"loops")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"List[object]")),(0,r.kt)("p",null,"As stack of ",(0,r.kt)("inlineCode",{parentName:"p"},"forloop")," objects. Used for populating ",(0,r.kt)("inlineCode",{parentName:"p"},"forloop.parentloop"),"."),(0,r.kt)("h3",{id:"disabled_tags"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled_tags")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"List[str]")),(0,r.kt)("p",null,'A list of tags names that are disallowed in this context. For example, partial templates rendered\nusing the "render" tag are not allowed to use "include" tags.'),(0,r.kt)("h3",{id:"autoescape"},(0,r.kt)("inlineCode",{parentName:"h3"},"autoescape")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("p",null,"Indicates if HTML auto-escaping is enabled."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"assign"},(0,r.kt)("inlineCode",{parentName:"h3"},"assign")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assign(key: str, val: Any) -> None")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"val")," to the local namespace with key ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get(path: Union[str, Sequence[Union[str, int]]], default: object = _undefined) -> object:")),(0,r.kt)("p",null,"Return the value at path ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," if it is in scope, else default."),(0,r.kt)("h3",{id:"get_async"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_async")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"async assign_async(key: str, val: Any) -> None")),(0,r.kt)("p",null,"An async version of ",(0,r.kt)("a",{parentName:"p",href:"#get"},"get"),"."),(0,r.kt)("h3",{id:"resolve"},(0,r.kt)("inlineCode",{parentName:"h3"},"resolve")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resolve(name: str, default: object = _undefined) -> Any")),(0,r.kt)("p",null,"Return the object at ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," in the current scope. This is like ",(0,r.kt)("a",{parentName:"p",href:"#get"},"get"),", but does a single,\ntop-level lookup rather than a chained lookup from a sequence of keys.`"),(0,r.kt)("h3",{id:"filter"},(0,r.kt)("inlineCode",{parentName:"h3"},"filter")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"filter(name: str) -> Callable[..., object]")),(0,r.kt)("p",null,"Return the filter function with given name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),": NoSuchFilterFunc if a filter with the given name does not exist."),(0,r.kt)("h3",{id:"get_template"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_template")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get_template(name: str) -> BoundTemplate")),(0,r.kt)("p",null,"Load a template from the environment."),(0,r.kt)("h3",{id:"get_template_async"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_template_async")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"async get_template_async(name: str) -> BoundTemplate")),(0,r.kt)("p",null,"Load a template from the environment asynchronously."),(0,r.kt)("h3",{id:"extend"},(0,r.kt)("inlineCode",{parentName:"h3"},"extend")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"extend(namespace: Mapping[str, object]) -> Iterator[Context]")),(0,r.kt)("p",null,"A context manager that extends this context with the given read-only namespace."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextDepthError")," if the context has been extended too many times."),(0,r.kt)("h3",{id:"copy"},(0,r.kt)("inlineCode",{parentName:"h3"},"copy")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"copy( self, namespace: Dict[str, object], disabled_tags: Optional[List[str]] = None) -> Context:")),(0,r.kt)("p",null,"Return a copy of this context without any local variables or other state for stateful tags."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextDepthError")," if the context has been copied too many times."),(0,r.kt)("h3",{id:"error"},(0,r.kt)("inlineCode",{parentName:"h3"},"error")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"error(exc: Error) -> None:")),(0,r.kt)("p",null,"Ignore, raise or convert the given exception to a warning, according to the current tolerance mode."))}u.isMDXComponent=!0}}]);