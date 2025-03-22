// styles/contract.css.ts
import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    primary: "",
    secondary: "",
    accent: "",
    background: "",
    text: "",
  },
  space: {
    space1: "",
    space2: "",
    space3: "",
    space4: "",
    space6: "",
    space8: "",
    space12: "",
    space16: "",
  },
  radius: {
    radiusSm: "",
    radiusMd: "",
    radiusLg: "",
    radiusFull: "",
  },
  border: {
    border0: "",
    border1: "",
    border2: "",
    border4: "",
    border8: "",
  },
  shadow: {
    shadowSm: "",
    shadowMd: "",
    shadowLg: "",
  },
  zIndex: {
    z0: "",
    z10: "",
    z20: "",
    z30: "",
    z40: "",
    z50: "",
    zAuto: "",
  },
  container: {
    containerSm: "",
    containerMd: "",
    containerLg: "",
    containerXl: "",
  },
  fontWeight: {
    fontLight: "",
    fontNormal: "",
    fontMedium: "",
    fontSemibold: "",
    fontBold: "",
  },
  textSize: {
    textXs: "",
    textSm: "",
    textBase: "",
    textLg: "",
    textXl: "",
    text2xl: "",
    text3xl: "",
    text4xl: "",
  },
});
