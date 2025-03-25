import type { Metadata } from "next";
import { cookies } from "next/headers";
import { pretendard } from "./styles/fonts";
import "./styles/globals.css";
import { darkTheme, lightTheme } from "./styles/theme.css";
import { clsx } from "./utils/clsx";

export const metadata: Metadata = {
  title: "ovoglog",
  description: "가끔씩 올리는 블로그",
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
    <html
      lang="ko"
      data-theme={isDark ? "dark" : "light"}
      className={clsx(theme, pretendard.variable)}
    >
      {children}
    </html>
  );
}
