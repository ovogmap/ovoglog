import { Container } from "./body.css";

export default function Body({ children }: { children: React.ReactNode }) {
  return <body className={Container}>{children}</body>;
}
