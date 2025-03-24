import { HTMLAttributes } from "react";
import { text } from "./text.css";

type TextProps = {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "default" | "secondary";
} & HTMLAttributes<HTMLElement>;

export const Text = ({
  children,
  size,
  weight,
  align,
  color = "default",
  as: Component = "p",
  ...props
}: TextProps) => {
  return (
    <Component className={text({ size, weight, align, color })} {...props}>
      {children}
    </Component>
  );
};
