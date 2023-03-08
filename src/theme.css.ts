import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
    colors: {
        topBarBg: "",
        topBarText: "",
        buttonBg: "",
        buttonText: "",
        leftBg: "",
        leftText: "",
        rightBg: "",
        rightText: "",
    },
  })

export const light = createTheme(vars, {
    colors: {
        topBarBg: "#808080",
        topBarText: "#ffff00",
        buttonBg: "#cc0000",
        buttonText: "white",
        leftBg: "#cecece",
        leftText: "#2f4f4f",
        rightBg: "white",
        rightText: "#000000",
    },
  })
  
  export const dark = createTheme(vars, {
    colors: {
        topBarBg: "#c0c0c0",
        topBarText: "#2f4f4f",
        buttonBg: "#f0f8ff",
        buttonText: "#800080",
        leftBg: "white",
        leftText: "#696969",
        rightBg: "#008080",
        rightText: "white",
    },
  })