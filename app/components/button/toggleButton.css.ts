// styles/components/button.css.ts
import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const toggleButton = style({
  border: "none",
  borderRadius: vars.radius.radiusSm,
  width: vars.space.space6,
  height: vars.space.space6,
  backgroundColor: vars.colors.background,
  cursor: "pointer",
});
