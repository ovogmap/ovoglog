import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const Button = style({
  padding: `0 ${vars.space.space2}`,
  height: "25px",
  borderRadius: vars.radius.radiusLg,
  border: `2px solid ${vars.colors.primary}`,
  backgroundColor: "inherit",
  color: vars.colors.primary,
  cursor: "pointer",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "all 0.2s ease-in-out",
  outline: "none",
});
