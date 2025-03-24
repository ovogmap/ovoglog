import { Text } from "@/app/components/text/text";
import sadCat from "@/public/sad_cat.webp";
import Image from "next/image";
import { Post } from "../../types";
import { postContainer, postImage, postTextArea } from "./postItem.css";

export default function PostItem({ post }: { post: Post }) {
  return (
    <li className={postContainer}>
      <div className={postTextArea}>
        <Text size="lg" weight="bold">
          {post.title}
        </Text>
        <Text size="sm">{post.description}</Text>
        <Text size="xs" color="secondary">
          {post.date.toLocaleDateString()}
        </Text>
      </div>
      <Image
        src={sadCat}
        alt="sad cat"
        width={70}
        height={70}
        className={postImage}
      />
    </li>
  );
}
