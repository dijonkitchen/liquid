"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[295],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],p={id:"BoundTemplate"},o="liquid.BoundTemplate",d={unversionedId:"api/BoundTemplate",id:"api/BoundTemplate",title:"liquid.BoundTemplate",description:"A liquid template that has been parsed and is bound to a liquid.Environment.",source:"@site/docs/api/bound-template.md",sourceDirName:"api",slug:"/api/BoundTemplate",permalink:"/liquid/api/BoundTemplate",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/bound-template.md",tags:[],version:"current",frontMatter:{id:"BoundTemplate"},sidebar:"apiSidebar",previous:{title:"liquid.Environment",permalink:"/liquid/api/Environment"},next:{title:"liquid.loaders.FileSystemLoader",permalink:"/liquid/api/filesystemloader"}},s={},m=[{value:"<code>BoundTemplate</code>",id:"boundtemplate",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>globals</code>",id:"globals",level:3},{value:"<code>matter</code>",id:"matter",level:3},{value:"<code>is_up_to_date</code>",id:"is_up_to_date",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>analyze</code>",id:"analyze",level:3},{value:"<code>analyze_async</code>",id:"analyze_async",level:3},{value:"<code>render</code>",id:"render",level:3},{value:"<code>render_async</code>",id:"render_async",level:3},{value:"<code>render_with_context</code>",id:"render_with_context",level:3},{value:"<code>render_with_context_async</code>",id:"render_with_context_async",level:3},{value:"<code>is_up_to_date_async</code>",id:"is_up_to_date_async",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liquidboundtemplate"},"liquid.BoundTemplate"),(0,i.kt)("p",null,"A liquid template that has been parsed and is bound to a ",(0,i.kt)("a",{parentName:"p",href:"Environment"},"liquid.Environment"),"."),(0,i.kt)("p",null,"You probably don't want to instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"BoundTemplate")," directly. Use\n",(0,i.kt)("a",{parentName:"p",href:"Environment#from_string"},"liquid.Environment.from_string()")," or\n",(0,i.kt)("a",{parentName:"p",href:"Environment#get_template"},"liquid.Environment.get_template()")," instead."),(0,i.kt)("h2",{id:"boundtemplate"},(0,i.kt)("inlineCode",{parentName:"h2"},"BoundTemplate")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"class BoundTemplate(env, parse_tree, [options])")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"env: liquid.Environment")," - The environment this template is bound to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parse_tree: liquid.ast.ParseTree")," - The parse tree representing this template.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name: str")," - Optional name of the template. Defaults to an empty string.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path: Optional[Union[str, Path]]")," - Optional origin path or identifier for the template.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"globals: Optional[Dict[str, object]]")," - An optional mapping of context variables made available\nevery time the resulting template is rendered. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"matter: Optional[Mapping[str, object]]"),' - Optional mapping containing variables associated with\nthe template. Could be "front matter" or other meta data.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"uptodate: Optional[Callable[[], bool]]")," - Optional callable that will return ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," if the\ntemplate is up to date, or ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," if it needs to be reloaded. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,"The template's name. As it would been passed to ",(0,i.kt)("a",{parentName:"p",href:"Environment#get_template"},"liquid.Environment.get_template()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"str")),(0,i.kt)("h3",{id:"globals"},(0,i.kt)("inlineCode",{parentName:"h3"},"globals")),(0,i.kt)("p",null,"A dictionary of context variables made available every time this template is rendered."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dict[str, object]")),(0,i.kt)("h3",{id:"matter"},(0,i.kt)("inlineCode",{parentName:"h3"},"matter")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"globals"),", a dictionary of context variables made available every time this template is\nrendered. ",(0,i.kt)("inlineCode",{parentName:"p"},"globals")," is usually passed down from the environment, ",(0,i.kt)("inlineCode",{parentName:"p"},"matter")," usually originates from\na template loader. They are kept separate so subclasses can choose how to merge them."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping[str, object]")),(0,i.kt)("h3",{id:"is_up_to_date"},(0,i.kt)("inlineCode",{parentName:"h3"},"is_up_to_date")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"True")," if the template is up to date, ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"analyze"},(0,i.kt)("inlineCode",{parentName:"h3"},"analyze")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"analyze(follow_partials, raise_for_failures)")),(0,i.kt)("p",null,"Statically analyze the template and any included/rendered templates."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"follow_partials: bool")," - If ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", we will try to load partial templates and analyze those templates too. Default's to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"raise_for_failures: bool")," - If ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", will raise an exception if an ",(0,i.kt)("inlineCode",{parentName:"p"},"ast.Node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"expression.Expression")," does not define a ",(0,i.kt)("inlineCode",{parentName:"p"},"children()")," method, or if a partial template can not be loaded. When ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", no exception is raised and a mapping of failed nodes and expressions is available as the ",(0,i.kt)("inlineCode",{parentName:"p"},"failed_visits")," property. A mapping of unloadable partial templates is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"unloadable_partials")," property."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": An object containing analysis results.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/template-analysis"},"liquid.template.TemplateAnalysis")),(0,i.kt)("h3",{id:"analyze_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"analyze_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async analyze_async(follow_partials, raise_for_failures)")),(0,i.kt)("p",null,"Statically analyze the template and any included/rendered templates."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"follow_partials: bool")," - If ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", we will try to load partial templates and analyze those templates too. Default's to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"raise_for_failures: bool")," - If ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", will raise an exception if an ",(0,i.kt)("inlineCode",{parentName:"p"},"ast.Node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"expression.Expression")," does not define a ",(0,i.kt)("inlineCode",{parentName:"p"},"children()")," method, or if a partial template can not be loaded. When ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", no exception is raised and a mapping of failed nodes and expressions is available as the ",(0,i.kt)("inlineCode",{parentName:"p"},"failed_visits")," property. A mapping of unloadable partial templates is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"unloadable_partials")," property."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": An object containing analysis results.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/template-analysis"},"liquid.template.TemplateAnalysis")),(0,i.kt)("h3",{id:"render"},(0,i.kt)("inlineCode",{parentName:"h3"},"render")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"render(*args, **kwargs) -> str")),(0,i.kt)("p",null,"Render the template with ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kwargs")," included in the render context. Accepts the same\narguments as ",(0,i.kt)("inlineCode",{parentName:"p"},"dict()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": The rendered template as a string.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"str")),(0,i.kt)("h3",{id:"render_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"render_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async render_async(*args, **kwargs) -> str")),(0,i.kt)("p",null,"An async version of ",(0,i.kt)("a",{parentName:"p",href:"#render"},"liquid.BoundTemplate.render()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": The rendered template as a string.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"str")),(0,i.kt)("h3",{id:"render_with_context"},(0,i.kt)("inlineCode",{parentName:"h3"},"render_with_context")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"render_with_context(context, buffer, *args, **kwargs) -> None")),(0,i.kt)("p",null,"Render the template using an existing ",(0,i.kt)("a",{parentName:"p",href:"Context"},"liquid.Context")," and output buffer. ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"kwargs")," are passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"dict()"),". The resulting dictionary is added to the render context."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"context: liquid.Context")," - A render context.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"buffer: TextIO")," - File-like object to which rendered text is written."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"None")),(0,i.kt)("h3",{id:"render_with_context_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"render_with_context_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async render_with_context_async(context, buffer, *args, **kwargs) -> None")),(0,i.kt)("p",null,"An async version of ",(0,i.kt)("a",{parentName:"p",href:"#async-render_with_context_async"},"liquid.BoundTemplate.render_with_context_async()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"None")),(0,i.kt)("h3",{id:"is_up_to_date_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"is_up_to_date_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async is_up_to_date_async() -> bool")),(0,i.kt)("p",null,"Return ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," if the template is up to date, ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," otherwise."))}k.isMDXComponent=!0}}]);