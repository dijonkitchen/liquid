"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[6506],{4973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>q,frontMatter:()=>b,metadata:()=>v,toc:()=>N});var a=n(3117),r=n(7294),l=n(3905),i=n(4334),o=n(5730),p=n(636),u=n(6602),d=n(3735);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:o,values:c,groupId:f,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,p.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,u.U)(),[T,q]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&b.some((t=>t.value===e))&&q(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==T&&(E(t),q(a),null!=f&&N(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function f(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}const g="tabItem_Ymn6";function h(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(g,a),hidden:n},t)}const b={},y="Getting Started",v={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Python Liquid is a Python engine for Liquid, the safe, customer-facing template language for flexible web apps.",source:"@site/docs/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/liquid/introduction/getting-started",draft:!1,editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/introduction/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Loading Templates",permalink:"/liquid/introduction/loading-templates"}},k={},N=[{value:"Install",id:"install",level:2},{value:"Render",id:"render",level:2},{value:"Configure",id:"configure",level:2},{value:"Environment",id:"environment",level:2}],T={toc:N};function q(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Python Liquid is a ",(0,l.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python")," engine for ",(0,l.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"Liquid"),", the safe, customer-facing template language for flexible web apps."),(0,l.kt)("p",null,"This page gets you started using Liquid with Python. See ",(0,l.kt)("a",{parentName:"p",href:"/liquid/language/introduction"},"Introduction to Liquid"),", the ",(0,l.kt)("a",{parentName:"p",href:"/liquid/language/filters"},"filter reference")," and the ",(0,l.kt)("a",{parentName:"p",href:"/liquid/language/tags"},"tag reference")," to learn about writing Liquid templates."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Install Python Liquid from ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/python-liquid/"},"PyPi"),":"),(0,l.kt)(f,{groupId:"pypi-manager",mdxType:"Tabs"},(0,l.kt)(h,{value:"pip",label:"pip",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install -U python-liquid\n"))),(0,l.kt)(h,{value:"pipenv",label:"pipenv",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv install python-liquid\n"))),(0,l.kt)(h,{value:"poetry",label:"poetry",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"poetry add python-liquid\n")))),(0,l.kt)("p",null,"Or ",(0,l.kt)("a",{parentName:"p",href:"https://anaconda.org/conda-forge/python-liquid"},"conda-forge"),":"),(0,l.kt)(f,{groupId:"conda-manager",mdxType:"Tabs"},(0,l.kt)(h,{value:"anaconda",label:"anaconda",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge python-liquid\n"))),(0,l.kt)(h,{value:"miniconda",label:"miniconda",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge python-liquid\n"))),(0,l.kt)(h,{value:"miniforge",label:"miniforge",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda install python-liquid\n"))),(0,l.kt)(h,{value:"mamba",label:"mamba",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda install python-liquid\n")))),(0,l.kt)("h2",{id:"render"},"Render"),(0,l.kt)("p",null,"Render a template string by creating a ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," and calling its ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/BoundTemplate#render"},(0,l.kt)("inlineCode",{parentName:"a"},"render()"))," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Template\n\ntemplate = Template("Hello, {{ you }}!")\nprint(template.render(you="World"))  # Hello, World!\nprint(template.render(you="Liquid"))  # Hello, Liquid!\n')),(0,l.kt)("p",null,"Keyword arguments passed to ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/BoundTemplate#render"},(0,l.kt)("inlineCode",{parentName:"a"},"render()"))," are available as variables for templates to use in Liquid expressions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Template\n\ntemplate = Template(\n    "{% for person in people %}"\n    "Hello, {{ person.name }}!\\n"\n    "{% endfor %}"\n)\n\ndata = {\n    "people": [\n        {"name": "John"},\n        {"name": "Sally"},\n    ]\n}\n\nprint(template.render(**data))\n# Hello, John!\n# Hello, Sally!\n')),(0,l.kt)("h2",{id:"configure"},"Configure"),(0,l.kt)("p",null,"Configure template parsing and rendering behavior with extra arguments to ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template")),". The following example renders a template in ",(0,l.kt)("a",{parentName:"p",href:"/liquid/introduction/strictness"},"strict mode")," and will raise an exception whenever an undefined variable is used. See ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"liquid.Template"))," for all available options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Template\nfrom liquid import Mode\nfrom liquid import StrictUndefined\n\ntemplate = Template(\n    "Hello, {{ you }}!",\n    tolerance=Mode.STRICT,\n    undefined=StrictUndefined,\n)\n\nresult = template.render(you="World")\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Keep reading to see how to configure an environment once, then load and render templates from it.")),(0,l.kt)("h2",{id:"environment"},"Environment"),(0,l.kt)("p",null,"While ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," can be convenient, more often than not an application will want to configure a single ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,l.kt)("inlineCode",{parentName:"a"},"Environment")),", then load and render templates from it. This is usually more efficient than using ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," directly."),(0,l.kt)("p",null,"All templates rendered from an ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,l.kt)("inlineCode",{parentName:"a"},"Environment"))," will share the environment's configuration. See ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,l.kt)("inlineCode",{parentName:"a"},"liquid.Environment"))," for all available options. Notice that ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,l.kt)("inlineCode",{parentName:"a"},"Environment"))," accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"loader")," argument, whereas ",(0,l.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," does not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid import Mode\nfrom liquid import StrictUndefined\nfrom liquid import FileSystemLoader\n\nenv = Environment(\n    tolerance=Mode.STRICT,\n    undefined=StrictUndefined,\n    loader=FileSystemLoader("./templates/"),\n)\n\ntemplate = env.from_string("Hello, {{ you }}!")\nresult = template.render(you="World")\n')))}q.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,f=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);