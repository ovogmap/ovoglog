const themeScript = `
(function () {
  try {
    var storageKey = "ovoglog-theme";
    var savedTheme = window.localStorage.getItem(storageKey);
    var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
