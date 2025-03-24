import PostItem from "./components/postItem/postItem";
import Posts from "./components/posts/posts";
import { Post } from "./types";

// todo: 여기서 post get 요청 해야함
export default function Blog() {
  return (
    <Posts>
      {mockPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Posts>
  );
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "포스트 1",
    description: "포스트 1 설명",
    date: new Date(),
  },
  {
    id: 2,
    title: "포스트 2",
    description: "포스트 2 설명",
    date: new Date(),
  },
  {
    id: 3,
    title: "포스트 3",
    description: "포스트 3 설명",
    date: new Date(),
  },
  {
    id: 4,
    title: "포스트 4",
    description: "포스트 4 설명",
    date: new Date(),
  },
];
