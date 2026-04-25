"use client";

const STORAGE_KEY = "ovoglog-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface px-3 text-foreground"
      type="button"
      onClick={toggleTheme}
      aria-label="테마 전환"
    >
      Theme
    </button>
  );
}
