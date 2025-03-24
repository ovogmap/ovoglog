import { container } from "./stylex.css";

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={container}>{children}</div>;
}
