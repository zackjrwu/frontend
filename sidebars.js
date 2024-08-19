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
  // topicsSidebar: [{ type: "autogenerated", dirName: "." }],

  topicsSidebar: [
    "intro",
    {
      type: "category",
      label: "Javascript",
      items: [
        "javascriptThings/what-is-javascript",
        {
          type: "category",
          label: "Just Javascript",
          items: [
            "javascriptThings/justJavascript/01 Build Mental Model",
            "javascriptThings/justJavascript/02 JavaScript Universe",
          ],
        },
        "javascriptThings/what-is-scope",
        "javascriptThings/what-is-hoisting",
        "javascriptThings/what-is-var",
        "javascriptThings/what-is-closure",
        "javascriptThings/rest-vs-spread",
        "javascriptThings/error-handling"
      ],
    },
    {
      type: "category",
      label: "React",
      items: [
        "reactThings/what-is-react",
        "reactThings/what-is-react-hook",
        "reactThings/causes-of-re-rendering",
        "reactThings/music-player",
        {
          type: "category",
          label: "React Hooks",
          items: [
            "reactThings/reactHooks/useState",
            "reactThings/reactHooks/useReducer",
            "reactThings/reactHooks/useEffect",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
