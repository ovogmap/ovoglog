import type { Metadata } from "next";
import { cookies } from "next/headers";
import Header from "./components/header/header";
import { Main } from "./components/main/main";
import "./styles/globals.css";
import { darkTheme, lightTheme } from "./styles/theme.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isDark = cookieStore.get("theme")?.value === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <html lang="ko" data-theme={isDark ? "dark" : "light"} className={theme}>
      <body>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
