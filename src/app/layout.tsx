import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ovoglog.dev"),
  title: {
    default: "ovoglog",
    template: "%s | ovoglog",
  },
  description: "Next.js와 MDX로 운영하는 조용하고 밀도 있는 기술 블로그",
  openGraph: {
    title: "ovoglog",
    description: "Next.js와 MDX로 운영하는 조용하고 밀도 있는 기술 블로그",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
