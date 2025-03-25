import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  padding: vars.space.space3,
  gap: vars.space.space3,
});
