"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[848],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="Flask Liquid",d={unversionedId:"guides/flask-liquid",id:"guides/flask-liquid",title:"Flask Liquid",description:"A Flask extension for Python Liquid.",source:"@site/docs/guides/flask-liquid.md",sourceDirName:"guides",slug:"/guides/flask-liquid",permalink:"/liquid/guides/flask-liquid",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/guides/flask-liquid.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Django Liquid",permalink:"/liquid/guides/django-liquid"}},s={},u=[{value:"Install",id:"install",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Factories and Blueprints",id:"factories-and-blueprints",level:2},{value:"Mixing Jinja and Liquid",id:"mixing-jinja-and-liquid",level:2},{value:"Auto Escape",id:"auto-escape",level:2},{value:"Flask Standard Context",id:"flask-standard-context",level:2},{value:"Context Processors",id:"context-processors",level:2},{value:"Signals",id:"signals",level:2},{value:"Async Support",id:"async-support",level:2},{value:"Configuration Values",id:"configuration-values",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flask-liquid"},"Flask Liquid"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://palletsprojects.com/p/flask/"},"Flask")," extension for Python Liquid."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Install Flask Liquid using ",(0,l.kt)("a",{parentName:"p",href:"https://pipenv.pypa.io/en/latest/"},"Pipenv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pipenv install flask-liquid\n")),(0,l.kt)("p",null,"Or ",(0,l.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/getting-started/"},"pip"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ python -m pip install -U flask-liquid\n")),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Flask Liquid provides ",(0,l.kt)("inlineCode",{parentName:"p"},"render_template")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"render_template_string")," functions that behave much like the ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.0.x/quickstart/#rendering-templates"},"Flask equivalents")," of the same name. By default Flask Liquid will look for templates in ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.0.x/api/#flask.Flask.template_folder"},"app.template_folder"),". The same location Flask uses for Jinja templates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template\n\napp = Flask(__name__)\nliquid = Liquid(app)\n\n@app.route("/hello/")\n@app.route("/hello/<name>")\ndef index(name=None):\n    return render_template("index.html", name=name)\n')),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_TEMPLATE_FOLDER")," configuration value to change the Liquid template folder independently of ",(0,l.kt)("inlineCode",{parentName:"p"},"app.template_folder"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'app = Flask(__name__)\napp.config.update(\n    LIQUID_TEMPLATE_FOLDER="/path/to/liquid/templates/",\n)\n\nliquid = Liquid(app)\n')),(0,l.kt)("h2",{id:"factories-and-blueprints"},"Factories and Blueprints"),(0,l.kt)("p",null,"When using the factory pattern, use ",(0,l.kt)("inlineCode",{parentName:"p"},"Liquid.init_app(app)")," instead. Any ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_*")," configuration values stored on the app will override ",(0,l.kt)("inlineCode",{parentName:"p"},"Liquid")," constructor arguments when ",(0,l.kt)("inlineCode",{parentName:"p"},"init_app")," is called."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from flask import Flask\nfrom flask_liquid import Liquid\n\nfrom yourapp.blueprints import some_blueprint\n\nliquid = Liquid()\n\ndef create_app(config=None):\n    app = Flask(__name__)\n    app.register_blueprint(some_blueprint.bp)\n\n    liquid.init_app(app)\n\n    return app\n")),(0,l.kt)("h2",{id:"mixing-jinja-and-liquid"},"Mixing Jinja and Liquid"),(0,l.kt)("p",null,"If you want to use Jinja and Liquid templates side by side, import Liquid render functions using an alias."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from flask import render_template\nfrom flask_liquid import render_template as render_liquid_template\n")),(0,l.kt)("h2",{id:"auto-escape"},"Auto Escape"),(0,l.kt)("p",null,"Unlike a standard ",(0,l.kt)("a",{parentName:"p",href:"/api/Environment"},"liquid.Environment()"),", Flask Liquid enables HTML auto-escaping by default. You can disable auto-escaping by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"autoescape=False")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_liquid.Liquid()")," or setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_AUTOESCAPE")," configuration value to ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,l.kt)("p",null,"To render markup from a Liquid snippet inside a Jinja template (or vice versa), mark the string returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"render_liquid_template")," as safe using ",(0,l.kt)("inlineCode",{parentName:"p"},"Markup"),", then include it in the Jinja template context. That is assuming you trust values in the Liquid render context or have HTML escaped them already."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\nfrom flask import Markup\nfrom flask import render_template\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template as render_liquid_template\n\napp = Flask(__name__)\nliquid = Liquid(app)\n\n@app.route("/hello")\ndef hello():\n    user_content = render_liquid_template("content.liquid")\n    return render_template("page.html", content=Markup(user_content))\n')),(0,l.kt)("h2",{id:"flask-standard-context"},"Flask Standard Context"),(0,l.kt)("p",null,"Flask has some ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/1.1.x/templating/#standard-context"},"standard context variables")," that are included in each Jinja template context automatically. Flask Liquid does not include these variables. If you need access to the Flask session or request, for example, you'll need to manually map session or request properties to Liquid context keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\nfrom flask import request\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template\n\napp = Flask(__name__)\nliquid = Liquid(app)\n\n@app.route("/hello/")\n@app.route("/hello/<name>")\ndef index(name=None):\n    return render_template("index.html", name=name, path=request.path)\n')),(0,l.kt)("h2",{id:"context-processors"},"Context Processors"),(0,l.kt)("p",null,"When the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_FLASK_CONTEXT_PROCESSORS")," configuration value is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),", Flask context processors will update Liquid template contexts too."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Remember that Python Liquid uses the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence"},"Sequence")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping"},"Mapping")," interfaces for resolving object properties. See ",(0,l.kt)("a",{parentName:"p",href:"/introduction/objects-and-drops"},"Objects and Drops"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\nfrom flask import request\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template\n\napp = Flask(__name__)\napp.config.update(\n    LIQUID_FLASK_CONTEXT_PROCESSORS=True,\n)\n\nliquid = Liquid(app)\n\n@app.context_processor\ndef extra_context():\n    return {"request_path": request.path}\n\n@app.route("/hello/")\n@app.route("/hello/<name>")\ndef index(name=None):\n    return render_template("index.html", name=name)\n')),(0,l.kt)("h2",{id:"signals"},"Signals"),(0,l.kt)("p",null,"By default, when ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/1.1.x/api/#flask.signals.signals_available"},"signals are available"),", Flask Liquid will send a ",(0,l.kt)("inlineCode",{parentName:"p"},"before_render_template")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"template_rendered")," signal for each successful call to ",(0,l.kt)("inlineCode",{parentName:"p"},"render_template")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"render_template_string"),"."),(0,l.kt)("p",null,"You can disable these signals for Liquid templates by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_FLASK_SIGNALS")," configuration value to ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,l.kt)("h2",{id:"async-support"},"Async Support"),(0,l.kt)("p",null,"Render templates asynchronously using ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_liquid.render_template_async()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_liquid.render_template_string_async()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template_async\n\napp = Flask(__name__)\nliquid = Liquid(app)\n\n@app.route("/render/<name>")\nasync def render_by_name(name=None):\n    return await render_template_async(name)\n')),(0,l.kt)("h2",{id:"configuration-values"},"Configuration Values"),(0,l.kt)("p",null,"The following ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.0.x/config/"},"configuration values")," can be used instead of passing arguments to ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_liquid.Liquid()"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Liquid Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_TAG_START_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"tag_start_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"{%"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_TAG_END_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"tag_end_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"%}"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_STATEMENT_START_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"statement_start_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"{{"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_STATEMENT_END_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"statement_end_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"}}"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_TEMPLATE_COMMENTS"),(0,l.kt)("td",{parentName:"tr",align:null},"template_comments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_COMMENT_START_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"statement_start_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"{#"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_COMMENT_END_STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"statement_end_string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"#}"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_TOLERANCE"),(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"liquid.Mode.STRICT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_UNDEFINED"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"liquid.Undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_STRICT_FILTERS"),(0,l.kt)("td",{parentName:"tr",align:null},"strict_filters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_TEMPLATE_FOLDER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"app.template_folder"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"loader"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FileSystemLoader(app.template_folder)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_AUTOESCAPE"),(0,l.kt)("td",{parentName:"tr",align:null},"autoescape"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_AUTO_RELOAD"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_reload"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_EXPRESSION_CACHE_SIZE"),(0,l.kt)("td",{parentName:"tr",align:null},"expression_cache_size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_FLASK_CONTEXT_PROCESSORS"),(0,l.kt)("td",{parentName:"tr",align:null},"flask_context_processors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LIQUID_FLASK_SIGNALS"),(0,l.kt)("td",{parentName:"tr",align:null},"flask_signals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))))),(0,l.kt)("p",null,"Note that if you specify a ",(0,l.kt)("a",{parentName:"p",href:"/introduction/loading-templates"},"loader")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"loader")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_liquid.Liquid()"),", Flask Liquid will use that instead of creating a ",(0,l.kt)("a",{parentName:"p",href:"/api/FileSystemLoader"},"FileSystemLoader")," pointing to ",(0,l.kt)("inlineCode",{parentName:"p"},"LIQUID_TEMPLATE_FOLDER"),"."))}k.isMDXComponent=!0}}]);