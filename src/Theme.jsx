import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    cadetGrey: "#829399",
    mediumGrey: "#F2F2F2",
    white: "#ffffff",
    black: "#000000"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  bordersRadius: {
    input: "4px",
    button: "7px",
    category: "10px",
    card: "14px"
  },
  boxShadows: {
    card: "0 10px 30px 0 rgb(0 0 0 / 5%)"
  }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;