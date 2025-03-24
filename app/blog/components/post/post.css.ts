import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const post = style({
  padding: vars.space.space4,
  display: "flex",
  justifyContent: "space-between",
});

export const postTextArea = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.space2,
});

export const postImage = style({
  objectFit: "cover",
  borderRadius: vars.radius.radiusSm,
});
