/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],
  docsSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/getting-started",
        "introduction/loading-templates",
        "introduction/render-context",
        "introduction/objects-and-drops",
        "introduction/strictness",
        "introduction/comments",
        "introduction/auto-escape",
        "introduction/async-support",
        "introduction/caching",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "guides/custom-filters",
        "guides/custom-tags",
        "guides/custom-loaders",
        "guides/security",
        "guides/static-template-analysis",
        "guides/contextual-template-analysis",
        "guides/undefined-variables",
        "guides/django-liquid",
        "guides/flask-liquid",
        // "guides/custom-template-cache",
      ],
    },
  ],

  languageSidebar: [
    {
      type: "category",
      label: "Language",
      collapsed: false,
      items: ["language/introduction", "language/filters", "language/tags"],
    },
    {
      type: "category",
      label: "Extra",
      collapsed: false,
      items: ["extra/introduction", "extra/filters", "extra/tags"],
    },
  ],

  apiSidebar: [
    {
      type: "category",
      label: "API",
      collapsed: false,
      items: [
        "api/Template",
        "api/Environment",
        "api/BoundTemplate",
        "api/filesystemloader",
        "api/fileextensionloader",
        "api/choiceloader",
        "api/dictloader",
        "api/context",
        "api/Tag",
        "api/node",
        "api/exceptions",
        "api/template-analysis",
        "api/contextual-template-analysis",
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
