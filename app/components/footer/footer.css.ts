import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  height: "50px",
  backgroundColor: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.space1,
});
