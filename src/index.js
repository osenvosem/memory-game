import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import App from "./App";
import "./globalStyles";

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

render(<Root />, document.getElementById("root"));
