import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const editorContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flex: 1,
});

export const editorHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: `${vars.space.space2}`,
});

export const editorTitleInput = style({
  width: "500px",
  height: "40px",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "24px",
  fontWeight: "bold",
  color: vars.colors.text,
  outline: "none",
});

export const editorWrapper = style({
  width: "100%",
  flex: 1,
});

export const mdEditor = style({
  width: "100%",
  height: "100%",
});
