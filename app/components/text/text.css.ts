import { vars } from "@/app/styles/contract.css";
import { recipe } from "@vanilla-extract/recipes";

export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
  },

  variants: {
    color: {
      default: { color: vars.colors.text },
      secondary: { color: vars.colors.secondary },
    },
    size: {
      xs: { fontSize: vars.textSize.textXs },
      sm: { fontSize: vars.textSize.textSm },
      base: { fontSize: vars.textSize.textBase },
      lg: { fontSize: vars.textSize.textLg },
      xl: { fontSize: vars.textSize.textXl },
      "2xl": { fontSize: vars.textSize.text2xl },
      "3xl": { fontSize: vars.textSize.text3xl },
      "4xl": { fontSize: vars.textSize.text4xl },
    },
    weight: {
      light: { fontWeight: vars.fontWeight.fontLight },
      normal: { fontWeight: vars.fontWeight.fontNormal },
      medium: { fontWeight: vars.fontWeight.fontMedium },
      semibold: { fontWeight: vars.fontWeight.fontSemibold },
      bold: { fontWeight: vars.fontWeight.fontBold },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
  },

  defaultVariants: {
    size: "base",
    weight: "normal",
    align: "left",
  },
});
