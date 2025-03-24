"use client";

import { vars } from "@/app/styles/contract.css";
import { darkTheme, lightTheme } from "@/app/styles/theme.css";
import { setCookie } from "cookies-next";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toggleButton } from "./toggleButton.css";

export const ToggleButton = () => {
  const [isDark, setIsDark] = useState<"dark" | "light">("dark");

  const handleToggle = () => {
    const newTheme = isDark === "dark" ? "light" : "dark";
    setIsDark(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = root.getAttribute("data-theme") as "dark" | "light";
    if (savedTheme) {
      setIsDark(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const themeClass = isDark === "dark" ? darkTheme : lightTheme;
    const oppositeThemeClass = isDark === "dark" ? lightTheme : darkTheme;

    root.classList.remove(oppositeThemeClass);
    root.classList.add(themeClass);
    root.setAttribute("data-theme", isDark);
    setCookie("theme", isDark);
  }, [isDark]);

  return (
    <button className={toggleButton} onClick={handleToggle}>
      {isDark === "dark" ? (
        <Moon size={20} color={vars.colors.primary} />
      ) : (
        <Sun size={20} color={vars.colors.primary} />
      )}
    </button>
  );
};
