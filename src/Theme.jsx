import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    cadetGrey: "#829399",
    lightGrey: "#F2F2F2",
    mediumGrey: "#E5E5E5",
    yellow: "#FCA311",
    deepBlue: "#14213D",
    darkBlue: "#003459",
    white: "#ffffff",
    black: "#000000"
  },
  fontSizes: {
    extraSmall: "1.5em",
    small: "2em",
    medium: "2.5em",
    semiLarge: "3em",
    large: "3.5em"
  },
  fonts: ["catamaran-light", "catamaran-regular", "catamaran-semiBold'", "catamaran-bold"],
  bordersRadius: {
    input: "4px",
    button: "4px",
    card: "4px",
    modal: "4px"
  },
  boxShadows: {
    card: "0 10px 30px 0 rgb(0 0 0 / 5%)",
    modal: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;