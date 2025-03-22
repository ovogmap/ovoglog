import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";
import { colorTokens } from "./tokens/colors";
import { spacingTokens } from "./tokens/spacing";
import { typographyTokens } from "./tokens/typography";

export const lightTheme = createTheme(vars, {
  colors: {
    primary: colorTokens.light.primary,
    secondary: colorTokens.light.secondary,
    accent: colorTokens.light.accent,
    background: colorTokens.light.background,
    text: colorTokens.light.text,
  },
  space: {
    space1: spacingTokens.space.space1,
    space2: spacingTokens.space.space2,
    space3: spacingTokens.space.space3,
    space4: spacingTokens.space.space4,
    space6: spacingTokens.space.space6,
    space8: spacingTokens.space.space8,
    space12: spacingTokens.space.space12,
    space16: spacingTokens.space.space16,
  },
  radius: {
    radiusSm: spacingTokens.radius.radiusSm,
    radiusMd: spacingTokens.radius.radiusMd,
    radiusLg: spacingTokens.radius.radiusLg,
    radiusFull: spacingTokens.radius.radiusFull,
  },
  border: {
    border0: spacingTokens.border.border0,
    border1: spacingTokens.border.border1,
    border2: spacingTokens.border.border2,
    border4: spacingTokens.border.border4,
    border8: spacingTokens.border.border8,
  },
  shadow: {
    shadowSm: spacingTokens.shadow.shadowSm,
    shadowMd: spacingTokens.shadow.shadowMd,
    shadowLg: spacingTokens.shadow.shadowLg,
  },
  zIndex: {
    z0: spacingTokens.zIndex.z0,
    z10: spacingTokens.zIndex.z10,
    z20: spacingTokens.zIndex.z20,
    z30: spacingTokens.zIndex.z30,
    z40: spacingTokens.zIndex.z40,
    z50: spacingTokens.zIndex.z50,
    zAuto: spacingTokens.zIndex.zAuto,
  },
  container: {
    containerSm: spacingTokens.container.containerSm,
    containerMd: spacingTokens.container.containerMd,
    containerLg: spacingTokens.container.containerLg,
    containerXl: spacingTokens.container.containerXl,
  },
  fontWeight: {
    fontLight: typographyTokens.fontWeight.fontLight,
    fontNormal: typographyTokens.fontWeight.fontNormal,
    fontMedium: typographyTokens.fontWeight.fontMedium,
    fontSemibold: typographyTokens.fontWeight.fontSemibold,
    fontBold: typographyTokens.fontWeight.fontBold,
  },
  textSize: {
    textXs: typographyTokens.textSize.textXs,
    textSm: typographyTokens.textSize.textSm,
    textBase: typographyTokens.textSize.textBase,
    textLg: typographyTokens.textSize.textLg,
    textXl: typographyTokens.textSize.textXl,
    text2xl: typographyTokens.textSize.text2xl,
    text3xl: typographyTokens.textSize.text3xl,
    text4xl: typographyTokens.textSize.text4xl,
  },
});

export const darkTheme = createTheme(vars, {
  colors: {
    primary: colorTokens.dark.primary,
    secondary: colorTokens.dark.secondary,
    accent: colorTokens.dark.accent,
    background: colorTokens.dark.background,
    text: colorTokens.dark.text,
  },
  space: {
    space1: spacingTokens.space.space1,
    space2: spacingTokens.space.space2,
    space3: spacingTokens.space.space3,
    space4: spacingTokens.space.space4,
    space6: spacingTokens.space.space6,
    space8: spacingTokens.space.space8,
    space12: spacingTokens.space.space12,
    space16: spacingTokens.space.space16,
  },
  radius: {
    radiusSm: spacingTokens.radius.radiusSm,
    radiusMd: spacingTokens.radius.radiusMd,
    radiusLg: spacingTokens.radius.radiusLg,
    radiusFull: spacingTokens.radius.radiusFull,
  },
  border: {
    border0: spacingTokens.border.border0,
    border1: spacingTokens.border.border1,
    border2: spacingTokens.border.border2,
    border4: spacingTokens.border.border4,
    border8: spacingTokens.border.border8,
  },
  shadow: {
    shadowSm: spacingTokens.shadow.shadowSm,
    shadowMd: spacingTokens.shadow.shadowMd,
    shadowLg: spacingTokens.shadow.shadowLg,
  },
  zIndex: {
    z0: spacingTokens.zIndex.z0,
    z10: spacingTokens.zIndex.z10,
    z20: spacingTokens.zIndex.z20,
    z30: spacingTokens.zIndex.z30,
    z40: spacingTokens.zIndex.z40,
    z50: spacingTokens.zIndex.z50,
    zAuto: spacingTokens.zIndex.zAuto,
  },
  container: {
    containerSm: spacingTokens.container.containerSm,
    containerMd: spacingTokens.container.containerMd,
    containerLg: spacingTokens.container.containerLg,
    containerXl: spacingTokens.container.containerXl,
  },
  fontWeight: {
    fontLight: typographyTokens.fontWeight.fontLight,
    fontNormal: typographyTokens.fontWeight.fontNormal,
    fontMedium: typographyTokens.fontWeight.fontMedium,
    fontSemibold: typographyTokens.fontWeight.fontSemibold,
    fontBold: typographyTokens.fontWeight.fontBold,
  },
  textSize: {
    textXs: typographyTokens.textSize.textXs,
    textSm: typographyTokens.textSize.textSm,
    textBase: typographyTokens.textSize.textBase,
    textLg: typographyTokens.textSize.textLg,
    textXl: typographyTokens.textSize.textXl,
    text2xl: typographyTokens.textSize.text2xl,
    text3xl: typographyTokens.textSize.text3xl,
    text4xl: typographyTokens.textSize.text4xl,
  },
});
