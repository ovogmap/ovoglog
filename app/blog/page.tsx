import Post from "./components/post/post";
import Posts from "./components/posts/posts";

// todo: 여기서 post get 요청 해야함
export default function Blog() {
  return (
    <Posts>
      <Post />
      <Post />
      <Post />
    </Posts>
  );
}
