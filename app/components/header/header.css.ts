import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

const headerHeight = "50px";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `${vars.border.border2} solid ${vars.colors.primary}`,
  height: headerHeight,
  backgroundColor: vars.colors.background,
});
