import { main } from "./main.css";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className={main}>{children}</main>;
};
