import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 mx-auto flex min-h-16 w-[min(100%_-_28px,720px)] items-center justify-between bg-canvas/90 backdrop-blur-lg md:min-h-[72px] md:w-[min(1080px,calc(100%_-_40px))]">
      <Link className="text-lg font-bold" href="/" aria-label="ovoglog home">
        ovoglog
      </Link>
      <nav className="flex items-center gap-3 text-sm text-muted md:gap-4" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link className="hover:text-foreground" key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
