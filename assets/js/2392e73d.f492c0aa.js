"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Extra Filters",p={unversionedId:"extra/filters",id:"extra/filters",title:"Extra Filters",description:"This page documents extra filters that are not included in standard Liquid. See the",source:"@site/docs/extra/filters.md",sourceDirName:"extra",slug:"/extra/filters",permalink:"/liquid/extra/filters",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/extra/filters.md",tags:[],version:"current",frontMatter:{},sidebar:"languageSidebar",previous:{title:"Python Liquid Extra",permalink:"/liquid/extra/introduction"},next:{title:"Extra Tags",permalink:"/liquid/extra/tags"}},m={},d=[{value:"index",id:"index",level:2},{value:"json",id:"json",level:2},{value:"stylesheet_tag",id:"stylesheet_tag",level:2},{value:"script_tag",id:"script_tag",level:2},{value:"t (translate)",id:"t-translate",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extra-filters"},"Extra Filters"),(0,i.kt)("p",null,"This page documents extra filters that are not included in standard Liquid. See the\n",(0,i.kt)("a",{parentName:"p",href:"/language/filters"},"filter reference")," for a details of all standard filters."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'These filters are not part of "standard" Liquid. If you choose to use them in your templates, those\ntemplates are unlikely to render correctly with other implementations of Liquid.'))),(0,i.kt)("h2",{id:"index"},"index"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<array> | index: <object>")),(0,i.kt)("p",null,"Return the zero-based index of the first occurrence of the argument object in the input array. If\nthe argument object is not in the array, ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," is returned."),(0,i.kt)("p",null,"Register ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," with a ",(0,i.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment")," to make it available to templates\nrendered from that environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\nenv.add_filter("index", filters.index)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},'{% assign colors = "red, blue, green" | split: ", "%}\n{{ colors | index \'blue\' }}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"1\n")),(0,i.kt)("h2",{id:"json"},"json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<object> | json")),(0,i.kt)("p",null,"Serialize objects as a JSON (JavaScript Object Notation) formatted string."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," filter uses Python's default ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3.8/library/json.html#json.JSONEncoder"},"JSONEncoder"),",\nsupporting ",(0,i.kt)("inlineCode",{parentName:"p"},"dict"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"str"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),", some Enums, ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,"Register ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," with a ",(0,i.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment")," to make it available to templates\nrendered from that environment. Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"filters.JSON")," is a class that need instantiating."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\nenv.add_filter("json", filters.JSON())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "product": {\n    "id": 1234,\n    "name": "Football"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},'<script type="application/json">\n    {{ product | json }}\n<\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=output",title:"output"},'<script type="application/json">\n  { "id": 1234, "name": "Football" }\n<\/script>\n')),(0,i.kt)("p",null,"When registering the ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," filter, you can optionally pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," argument. ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," will be\npassed to ",(0,i.kt)("inlineCode",{parentName:"p"},"json.dumps")," and should be a function that gets called for objects that can't otherwise be\nserialized. For example, this default function adds support for serializing\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/dataclasses.html"},"data classes"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\nfrom dataclasses import asdict\nfrom dataclasses import is_dataclass\n\nfrom liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\n\ndef default(obj):\n    if is_dataclass(obj):\n        return asdict(obj)\n    raise TypeError(f"can\'t serialize object {obj}")\n\nenv.add_filter("json", filters.JSON(default=default))\n')),(0,i.kt)("h2",{id:"stylesheet_tag"},"stylesheet_tag"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<string> | stylesheet_tag")),(0,i.kt)("p",null,"Return an HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," tag, as a string, with ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," equal to the input string, which should be a\nURL."),(0,i.kt)("p",null,"Register ",(0,i.kt)("inlineCode",{parentName:"p"},"stylesheet_tag")," with a ",(0,i.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment")," to make it available to\ntemplates rendered from that environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\nenv.add_filter("stylesheet_tag", filters.stylesheet_tag)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "url": "https://example.com/static/style.css"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ url | stylesheet_tag }}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},'<link href="https://example.com/static/style.css" rel="stylesheet" type="text/css" media="all" />\n')),(0,i.kt)("h2",{id:"script_tag"},"script_tag"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<string> | script_tag")),(0,i.kt)("p",null,"Return an HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," tag, as a string, with ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," equal to the input string, which should be a\nURL."),(0,i.kt)("p",null,"Register ",(0,i.kt)("inlineCode",{parentName:"p"},"script_tag")," with a ",(0,i.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment")," to make it available to\ntemplates rendered from that environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\nenv.add_filter("script_tag", filters.script_tag)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "url": "https://example.com/static/app.js"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ url | script_tag }}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},'<script src="https://example.com/static/app.js" type="text/javascript"><\/script>\n')),(0,i.kt)("h2",{id:"t-translate"},"t (translate)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<string> | t [: <identifier>: <object> [, <identifier>: object] ... ]")),(0,i.kt)("p",null,"Replace translation keys with strings for the current locale."),(0,i.kt)("p",null,"Pass a mapping of locales to translations to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Translate")," filter when you register it. The\ncurrent locale is read from the template context at render time, by looking for a variable named\n",(0,i.kt)("inlineCode",{parentName:"p"},"locale"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," if it is undefined."),(0,i.kt)("p",null,"Register ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," with a ",(0,i.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment")," to make it available to templates\nrendered from that environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra.filters import Translate\n\nsome_locales = {\n    "default": {\n        "layout": {\n            "greeting": r"Hello {{ name }}",\n        },\n        "cart": {\n            "general": {\n                "title": "Shopping Basket",\n            },\n        },\n        "pagination": {\n            "next": "Next Page",\n        },\n    },\n    "de": {\n        "layout": {\n            "greeting": r"Hallo {{ name }}",\n        },\n        "cart": {\n            "general": {\n                "title": "Warenkorb",\n            },\n        },\n        "pagination": {\n            "next": "N\xe4chste Seite",\n        },\n    },\n}\n\nenv = Environment()\nenv.add_filter(Translate.name, Translate(locales=some_locales))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "locale": "de",\n  "user": {\n    "name": "Welt"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ 'layout.cart.general.title' | t }}\n{{ 'layout.greeting' | t: name: user.name }}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"Warenkorb\nHallo Welt\n")),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," filter accepts arbitrary named parameters. Named parameters can be used to\nsubstitute fields in translation strings with values from the template context."),(0,i.kt)("p",null,"It you don't give ",(0,i.kt)("inlineCode",{parentName:"p"},"Translate")," any locales or you leave it empty, you'll always get the translation\nkey back unchanged."))}c.isMDXComponent=!0}}]);