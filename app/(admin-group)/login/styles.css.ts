import { vars } from "@/app/styles/contract.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  gap: vars.space.space2,
});

export const Input = style({
  width: "200px",
  height: "25px",
  padding: "0 16px",
  borderRadius: vars.radius.radiusSm,
  border: "1px solid #E5E7EB",
  backgroundColor: "#FFFFFF",
  fontSize: vars.textSize.textSm,
  color: vars.colors.text,
  transition: "all 0.2s ease-in-out",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
  "::placeholder": {
    color: "#9CA3AF",
  },
});

export const Button = style({
  width: "200px",
  height: "25px",
  borderRadius: vars.radius.radiusSm,
  border: "1px solid #E5E7EB",
  backgroundColor: vars.colors.primary,
  color: "#FFFFFF",
  cursor: "pointer",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "all 0.2s ease-in-out",
  outline: "none",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
});
