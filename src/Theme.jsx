import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    cadetGrey: "#829399",
    lightGrey: "#F2F2F2",
    mediumGrey: "#E5E5E5",
    yellow: "#FCA311",
    darkBlue: "#14213D",
    white: "#ffffff",
    black: "#000000"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  fonts: ["quicksand-italic", "quicksand-light", "quicksand-regular", "quicksand-bold"],
  bordersRadius: {
    input: "4px",
    button: "7px",
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