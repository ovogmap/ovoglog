"use client";

import { darkTheme, lightTheme } from "@/app/styles/theme.css";
import { setCookie } from "cookies-next";
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
    const theme = isDark === "dark" ? darkTheme : lightTheme;
    root.className = theme;
    root.setAttribute("data-theme", isDark);
    setCookie("theme", isDark);
  }, [isDark]);

  return (
    <button className={toggleButton} onClick={handleToggle}>
      {isDark === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
