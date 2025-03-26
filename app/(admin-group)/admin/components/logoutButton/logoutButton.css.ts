import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const Button = style({
  padding: `${vars.space.space1} ${vars.space.space2}`,
  borderRadius: vars.radius.radiusMd,
  border: `1px solid ${vars.colors.font.tertiary}`,
  backgroundColor: "inherit",
  color: vars.colors.font.tertiary,
  cursor: "pointer",
  textAlign: "center",
  fontSize: vars.textSize.textXs,
  fontWeight: vars.fontWeight.fontBold,
  outline: "none",
});
