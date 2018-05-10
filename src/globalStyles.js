import { injectGlobal } from "styled-components";
import theme from "./theme";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin:0;
    height: 100%;
  }

  #root {
    height: 100%;
    padding-top: ${theme.scale.second};
    background: ${theme.colors.blueGrey100};
    font-family: Lato, sans-serif;
  }
`;
