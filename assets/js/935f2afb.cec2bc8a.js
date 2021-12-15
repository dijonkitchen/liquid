"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"Introduction","collapsed":false,"items":[{"type":"link","label":"Getting Started","href":"/liquid/","docId":"introduction/getting-started"},{"type":"link","label":"Loading Templates","href":"/liquid/introduction/loading-templates","docId":"introduction/loading-templates"},{"type":"link","label":"Render Context","href":"/liquid/introduction/render-context","docId":"introduction/render-context"},{"type":"link","label":"Objects and Drops","href":"/liquid/introduction/objects-and-drops","docId":"introduction/objects-and-drops"},{"type":"link","label":"Strictness","href":"/liquid/introduction/strictness","docId":"introduction/strictness"},{"type":"link","label":"HTML Auto-Escape","href":"/liquid/introduction/auto-escape","docId":"introduction/auto-escape"},{"type":"link","label":"Async Support","href":"/liquid/introduction/async-support","docId":"introduction/async-support"}],"collapsible":true},{"type":"category","label":"Guides","collapsed":false,"items":[{"type":"link","label":"Custom Filters","href":"/liquid/guides/custom-filters","docId":"guides/custom-filters"},{"type":"link","label":"Custom Tags","href":"/liquid/guides/custom-tags","docId":"guides/custom-tags"},{"type":"link","label":"Custom Loaders","href":"/liquid/guides/custom-loaders","docId":"guides/custom-loaders"},{"type":"link","label":"Custom Template Cache","href":"/liquid/guides/custom-template-cache","docId":"guides/custom-template-cache"}],"collapsible":true}],"languageSidebar":[{"type":"category","label":"Language","collapsed":false,"items":[{"type":"link","label":"Introduction to Liquid","href":"/liquid/language/introduction","docId":"language/introduction"},{"type":"link","label":"Liquid Filters","href":"/liquid/language/filters","docId":"language/filters"},{"type":"link","label":"Liquid Tags","href":"/liquid/language/tags","docId":"language/tags"}],"collapsible":true},{"type":"category","label":"Extra","collapsed":false,"items":[{"type":"link","label":"Python Liquid Extra","href":"/liquid/extra/introduction","docId":"extra/introduction"},{"type":"link","label":"Extra Filters","href":"/liquid/extra/filters","docId":"extra/filters"},{"type":"link","label":"Extra Tags","href":"/liquid/extra/tags","docId":"extra/tags"}],"collapsible":true}],"apiSidebar":[{"type":"category","label":"API","collapsed":false,"items":[{"type":"link","label":"liquid.Template","href":"/liquid/api/Template","docId":"api/Template"},{"type":"link","label":"liquid.Environment","href":"/liquid/api/Environment","docId":"api/Environment"},{"type":"link","label":"liquid.BoundTemplate","href":"/liquid/api/BoundTemplate","docId":"api/BoundTemplate"},{"type":"link","label":"liquid.loaders.FileSystemLoader","href":"/liquid/api/filesystemloader","docId":"api/filesystemloader"},{"type":"link","label":"liquid.loaders.ChoiceLoader","href":"/liquid/api/choiceloader","docId":"api/choiceloader"},{"type":"link","label":"liquid.loaders.DictLoader","href":"/liquid/api/dictloader","docId":"api/dictloader"},{"type":"link","label":"liquid.Context","href":"/liquid/api/context","docId":"api/context"},{"type":"link","label":"liquid.tag.Tag","href":"/liquid/api/Tag","docId":"api/Tag"},{"type":"link","label":"liquid.ast.Node","href":"/liquid/api/node","docId":"api/node"},{"type":"link","label":"liquid.exceptions","href":"/liquid/api/exceptions","docId":"api/exceptions"}],"collapsible":true}]},"docs":{"api/BoundTemplate":{"id":"api/BoundTemplate","title":"liquid.BoundTemplate","description":"A liquid template that has been parsed and is bound to a liquid.Environment.","sidebar":"apiSidebar"},"api/choiceloader":{"id":"api/choiceloader","title":"liquid.loaders.ChoiceLoader","description":"A template loader that will try each of a list of loaders until a template is found.","sidebar":"apiSidebar"},"api/context":{"id":"api/context","title":"liquid.Context","description":"The result of rendering a template depends on the context in which it is rendered. That is,","sidebar":"apiSidebar"},"api/dictloader":{"id":"api/dictloader","title":"liquid.loaders.DictLoader","description":"A loader that loads templates from a dictionary mapping template names to template source strings.","sidebar":"apiSidebar"},"api/Environment":{"id":"api/Environment","title":"liquid.Environment","description":"Shared configuration from which templates can be loaded and parsed. An environment is where you","sidebar":"apiSidebar"},"api/exceptions":{"id":"api/exceptions","title":"liquid.exceptions","description":"liquid.exceptions.Error","sidebar":"apiSidebar"},"api/filesystemloader":{"id":"api/filesystemloader","title":"liquid.loaders.FileSystemLoader","description":"A loader that loads templates from one or more directories on the file system.","sidebar":"apiSidebar"},"api/node":{"id":"api/node","title":"liquid.ast.Node","description":"Abstract base class for all nodes in a parse tree.","sidebar":"apiSidebar"},"api/Tag":{"id":"api/Tag","title":"liquid.tag.Tag","description":"Base class for all built-in and custom template tags.","sidebar":"apiSidebar"},"api/Template":{"id":"api/Template","title":"liquid.Template","description":"A factory function. Create a liquid.template.BoundTemplate, automatically creating","sidebar":"apiSidebar"},"extra/filters":{"id":"extra/filters","title":"Extra Filters","description":"This page documents extra filters that are not included in standard Liquid. See the","sidebar":"languageSidebar"},"extra/introduction":{"id":"extra/introduction","title":"Python Liquid Extra","description":"Python Liquid Extra is a repository of extra tags and filters for Python Liquid.","sidebar":"languageSidebar"},"extra/tags":{"id":"extra/tags","title":"Extra Tags","description":"This page documents extra tags that are not included in standard Liquid. See the","sidebar":"languageSidebar"},"guides/custom-filters":{"id":"guides/custom-filters","title":"Custom Filters","description":"In Liquid, variables can be modified prior to output or assignment using filters. Filters are","sidebar":"docsSidebar"},"guides/custom-loaders":{"id":"guides/custom-loaders","title":"Custom Loaders","description":"Loaders are responsible for finding a template\'s source text given a name or identifier. Built-in","sidebar":"docsSidebar"},"guides/custom-tags":{"id":"guides/custom-tags","title":"Custom Tags","description":"Tags allow us to include logic, like loops and conditions, in our Liquid templates. A tag can be","sidebar":"docsSidebar"},"guides/custom-template-cache":{"id":"guides/custom-template-cache","title":"Custom Template Cache","description":"An in-memory template cache is included with every liquid.Environment. It","sidebar":"docsSidebar"},"introduction/async-support":{"id":"introduction/async-support","title":"Async Support","description":"Python Liquid supports loading and rendering templates asynchronously. When Template.render_async()","sidebar":"docsSidebar"},"introduction/auto-escape":{"id":"introduction/auto-escape","title":"HTML Auto-Escape","description":"Python Liquid offers HTML auto-escaping. Where context variables are automatically escaped on","sidebar":"docsSidebar"},"introduction/getting-started":{"id":"introduction/getting-started","title":"Getting Started","description":"Python Liquid is a Python engine for Liquid,","sidebar":"docsSidebar"},"introduction/loading-templates":{"id":"introduction/loading-templates","title":"Loading Templates","description":"You can load templates from a file system or database, for example, by creating an","sidebar":"docsSidebar"},"introduction/objects-and-drops":{"id":"introduction/objects-and-drops","title":"Objects and Drops","description":"Python Liquid uses getitem","sidebar":"docsSidebar"},"introduction/render-context":{"id":"introduction/render-context","title":"Render Context","description":"The result of rendering a template depends on the context in which it is rendered.","sidebar":"docsSidebar"},"introduction/strictness":{"id":"introduction/strictness","title":"Strictness","description":"Templates are parsed and rendered in strict mode by default. Where syntax and render-time type","sidebar":"docsSidebar"},"language/filters":{"id":"language/filters","title":"Liquid Filters","description":"Some of the examples here are borrowed from Shopify\'s Liquid documentation.","sidebar":"languageSidebar"},"language/introduction":{"id":"language/introduction","title":"Introduction to Liquid","description":"Liquid is a template language, where source text (the template) contains placeholders for variables,","sidebar":"languageSidebar"},"language/tags":{"id":"language/tags","title":"Liquid Tags","description":"Some of the examples here are borrowed from Shopify\'s Liquid documentation.","sidebar":"languageSidebar"}}}')}}]);