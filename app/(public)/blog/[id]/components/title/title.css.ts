import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  justifyContent: "start",
  alignItems: "end",
  gap: vars.space.space1,
});
