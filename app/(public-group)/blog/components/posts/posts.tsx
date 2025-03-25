import { post } from "./post.css";

export default function Posts({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ul className={post}>{children}</ul>
    </div>
  );
}
