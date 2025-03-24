import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const post = style({
  listStyle: "none",
});

export const Container = style({
  paddingTop: vars.space.space4,
  paddingBottom: vars.space.space4,
});
