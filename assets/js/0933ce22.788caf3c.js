"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[9086],{2897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],p={},o="Extra Tags",s={unversionedId:"extra/tags",id:"extra/tags",title:"Extra Tags",description:"This page documents extra tags that are not included in standard Liquid. See the tag reference for a details of all standard tags.",source:"@site/docs/extra/tags.md",sourceDirName:"extra",slug:"/extra/tags",permalink:"/liquid/extra/tags",draft:!1,editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/extra/tags.md",tags:[],version:"current",frontMatter:{},sidebar:"languageSidebar",previous:{title:"Extra Filters",permalink:"/liquid/extra/filters"}},d={},u=[{value:"if (not)",id:"if-not",level:2},{value:"not",id:"not",level:3},{value:"Parentheses",id:"parentheses",level:3},{value:"inline if / else",id:"inline-if--else",level:2},{value:"With Filters",id:"with-filters",level:3},{value:"macro / call",id:"macro--call",level:2},{value:"Excess Arguments",id:"excess-arguments",level:3},{value:"with",id:"with",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extra-tags"},"Extra Tags"),(0,r.kt)("p",null,"This page documents extra tags that are not included in standard Liquid. See the ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags"},"tag reference")," for a details of all standard tags."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'These tags are not part of "standard" Liquid. If you choose to use them in your templates, those templates are unlikely to render correctly with other implementations of Liquid.')),(0,r.kt)("h2",{id:"if-not"},"if (not)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{% if <expression> %}\n  <literal,statement,tag> ...\n  [ {% elsif <expression> %} <literal,statement,tag> ... [ {% elsif <expression> %} ... ]]\n  [ {% else %} <literal,statement,tag> ... ]\n{% endif %}\n")),(0,r.kt)("p",null,"A drop-in replacement for the standard ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#if"},(0,r.kt)("inlineCode",{parentName:"a"},"if"))," tag that supports logical ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," and grouping with parentheses. See ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#expressions"},"the tag reference")," for a description of standard if expressions."),(0,r.kt)("p",null,"Register ",(0,r.kt)("inlineCode",{parentName:"p"},"IfNotTag")," with a ",(0,r.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"liquid.Environment"))," to make it available to templates rendered from that environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nfrom liquid_extra.tags import IfNotTag\n\nenv = Environment()\nenv.add_tag(IfNotTag)\n")),(0,r.kt)("h3",{id:"not"},"not"),(0,r.kt)("p",null,"A logical ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," operator. Reverse the truthiness of an object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "user": {\n    "eligible": false,\n    "score": 5\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{% if not user %}\n    please log in\n{% else %}\n    hello user\n{% endif %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"hello user\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," prefix operator uses Liquid ",(0,r.kt)("em",{parentName:"p"},"truthiness"),". Only ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," are not truthy. Empty strings, arrays and objects all evaluate to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". You can, however, use ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," in front of a comparison to ",(0,r.kt)("inlineCode",{parentName:"p"},"empty")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"blank"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid"},"{% if not something == empty %}\n    ...\n{% endif %}\n")),(0,r.kt)("h3",{id:"parentheses"},"Parentheses"),(0,r.kt)("p",null,"Control the order of evaluation with parentheses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "user": {\n    "eligible": false,\n    "score": 5\n  },\n  "exempt": true\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template with parentheses"',title:'"template',with:!0,'parentheses"':!0},"{% if (user != empty and user.eligible and user.score > 100) or exempt %}\n    user is special\n{% else %}\n    denied\n{% endif %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"user is special\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template without parentheses"',title:'"template',without:!0,'parentheses"':!0},"{% if user != empty and user.eligible and user.score > 100 or exempt %}\n    user is special\n{% else %}\n    denied\n{% endif %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"denied\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," operators in Liquid are right associative. Where ",(0,r.kt)("inlineCode",{parentName:"p"},"true and false and false or true")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"(true and (false and (false or true)))"),", evaluating to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Python, on the other hand, would parse the same expression as ",(0,r.kt)("inlineCode",{parentName:"p"},"(((true and false) and false) or true)"),", evaluating to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"This implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," maintains that right associativity so that any standard ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," expression will behave the same, with or without non-standard ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),". Only when ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," or parentheses are used will behavior deviate from the standard."),(0,r.kt)("h2",{id:"inline-if--else"},"inline if / else"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{ <primitive,identifier> [| <filter> [| <filter> ... ]]\n    [ if <expression> [ else <primitive,identifier> [| <filter> [| <filter> ... ]]]] }}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{% assign <identifier> = <primitive,identifier> [| <filter> [| <filter> ... ]]\n    [ if <expression> [ else <primitive,identifier> [| <filter> [| <filter> ... ]]]] %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{% echo <primitive,identifier> [| <filter> [| <filter> ... ]]\n    [ if <expression> [ else <primitive,identifier> [| <filter> [| <filter> ... ]]]] %}\n")),(0,r.kt)("p",null,"Drop-in replacements for the standard output statement and ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#assign"},(0,r.kt)("inlineCode",{parentName:"a"},"assign"))," and ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#echo"},(0,r.kt)("inlineCode",{parentName:"a"},"echo"))," tags that supports inline ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"else")," expressions."),(0,r.kt)("p",null,"If the condition evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (Liquid truthiness), the leading object is not evaluated. Equally, if the condition evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", any ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," object is not evaluated. This is not terribly important if the objects are Liquid literals or simple Python objects, but could matter if the objects are custom drops that do time consuming IO or processing."),(0,r.kt)("p",null,"Register ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineIfAssignTag"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineIfEchoTag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineIfStatement")," with a ",(0,r.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"liquid.Environment"))," to make them available to templates rendered from that environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nfrom liquid_extra.tags import InlineIfAssignTag\nfrom liquid_extra.tags import InlineIfEchoTag\nfrom liquid_extra.tags import InlineIfStatement\n\nenv = Environment()\nenv.add_tag(InlineIfAssignTag)\nenv.add_tag(InlineIfEchoTag)\nenv.add_tag(InlineIfStatement)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "user": {\n    "logged_in": false\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ 'hello user' if user.logged_in else 'please log in' }}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"please log in\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," part of an inline expression defaults to ",(0,r.kt)("a",{parentName:"p",href:"/liquid/introduction/strictness#undefined-variables"},"undefined"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ 'hello user' if user.logged_in }}!\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"!\n")),(0,r.kt)("h3",{id:"with-filters"},"With Filters"),(0,r.kt)("p",null,"Filters can appear before an inline ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{ 'hello user' | capitalize if user.logged_in else 'please log in' }}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"please log in\n")),(0,r.kt)("p",null,"Or after an inline ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," expression. In which case filters will be applied even if the else clause is triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{% assign param = 'hello user' if user.logged_in else 'please log in' | url_encode %}\n")),(0,r.kt)("p",null,"Or both."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{{% assign param = 'hello user' | capitalize if user.logged_in else 'please log in' | url_encode %}\n")),(0,r.kt)("h2",{id:"macro--call"},"macro / call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"{% macro <string> [[,] [ <object>, ... ] [ <identifier>: <object>, ... ]] %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"{% call <string> [[,] [ <object>, ... ] [ <identifier>: <object>, ... ]] %}\n")),(0,r.kt)("p",null,"Define parameterized Liquid snippets using the ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," tag and call them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," tag. Macros are intended to make code reuse easier, especially for small Liquid snippets that are only needed within one template."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"macro")," is a bit like the standard ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#capture"},(0,r.kt)("inlineCode",{parentName:"a"},"capture"))," tag, where a block is stored on the render context for later use. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"capture"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," accepts parameters, possibly with default values, and the block is not evaluated until it is called using a ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," tag."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call")," is a bit like ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#render"},(0,r.kt)("inlineCode",{parentName:"a"},"render")),", in that a new context is created including any arguments supplied in the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," expression. That context is then used to render the named macro. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"render"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," can take positional arguments and does not hit any template loader or the template cache."),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#include"},(0,r.kt)("inlineCode",{parentName:"a"},"include"))," and ",(0,r.kt)("a",{parentName:"p",href:"/liquid/language/tags#render"},(0,r.kt)("inlineCode",{parentName:"a"},"render")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," take a string literal identifying the macro, followed by zero or more arguments. Neither ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," accept ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"with"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"as")," style expressions."),(0,r.kt)("p",null,"Note that argument defaults are bound late. Defaults are evaluated when a ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," expression is evaluated, not when the macro is defined."),(0,r.kt)("p",null,"Register ",(0,r.kt)("inlineCode",{parentName:"p"},"MacroTag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CallTag")," with a ",(0,r.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"liquid.Environment"))," to make ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," available to templates rendered from that environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nfrom liquid import StrictUndefined\n\nfrom liquid_extra.tags import MacroTag\nfrom liquid_extra.tags import CallTag\n\n# Setting strict undefined is strongly recommended.\nenv = Environment(undefined=StrictUndefined)\nenv.add_tag(MacroTag)\nenv.add_tag(CallTag)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{\n  "products": [\n    {\n      "title": "Some Shoes",\n      "regular_price": "5.99",\n      "price": "4.99"\n    },\n    {\n      "title": "A Hat",\n      "regular_price": "16.00",\n      "price": "12.00"\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{% macro 'price' product, on_sale: false %}\n  <div class=\"price-wrapper\">\n  {% if on_sale %}\n    <p>Was {{ product.regular_price | prepend: '$' }}</p>\n    <p>Now {{ product.price | prepend: '$' }}</p>\n  {% else %}\n    <p>{{ product.price | prepend: '$' }}</p>\n  {% endif %}\n  </div>\n{% endmacro %}\n\n{% call 'price' products[0], on_sale: true %}\n{% call 'price' products[1] %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="output"',title:'"output"'},'<div class="price-wrapper">\n  <p>Was $5.99</p>\n  <p>Now $4.99</p>\n</div>\n\n<div class="price-wrapper">\n  <p>$12.00</p>\n</div>\n')),(0,r.kt)("h3",{id:"excess-arguments"},"Excess Arguments"),(0,r.kt)("p",null,"Excess arguments passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," are collected into ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{% macro 'foo' %}\n  {% for arg in args %}\n    - {{ arg }}\n  {% endfor %}\n\n  {% for arg in kwargs %}\n    - {{ arg.0 }} => {{ arg.1 }}\n  {% endfor %}\n{% endmacro %}\n\n{% call 'foo' 42, 43, 99, a: 3.14, b: 2.71828 %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"- 42\n- 43\n- 99\n\n- a => 3.14\n- b => 2.71828\n")),(0,r.kt)("h2",{id:"with"},"with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"{% with <identifier>: <object> [, <identifier>: object ... ] %}\n  <literal,statement,tag> ...\n{% endwith %}\n")),(0,r.kt)("p",null,"Extend the local namespace with block scoped variables."),(0,r.kt)("p",null,"Register ",(0,r.kt)("inlineCode",{parentName:"p"},"WithTag")," with a ",(0,r.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"liquid.Environment"))," to make ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," available to templates rendered from that environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nfrom liquid_extra.tags import WithTag\n\nenv = Environment()\nenv.add_tag(WithTag)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="data"',title:'"data"'},'{ "collection": { "products": [{ "title": "A Shoe" }] } }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"{% with p: collection.products.first %}\n  {{ p.title }}\n{% endwith %}\n{{ p.title }}\n\n{% with a: 1, b: 3.4 %}\n  {{ a }} + {{ b }} = {{ a | plus: b }}\n{% endwith %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"A Shoe\n\n1 + 3.4 = 4.4\n")))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);