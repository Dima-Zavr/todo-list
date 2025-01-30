import { createGlobalStyle } from "styled-components"

import { baseTheme } from "./theme.ts"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
  
  html {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  body {
    font-family: "Verdana", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: ${baseTheme.colors.font};
    background-color: ${baseTheme.colors.bg};
    width: 100%;
    height: 100%;
  }

  li {
    list-style-type: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${baseTheme.colors.font};
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${baseTheme.colors.font};
    margin-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: ${baseTheme.colors.font};
    margin-bottom: 8px;
  }
`
