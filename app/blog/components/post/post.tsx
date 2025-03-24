import { Text } from "@/app/components/text/text";
import sadCat from "@/public/sad_cat.webp";
import Image from "next/image";
import { post, postImage, postTextArea } from "./post.css";

export default function Post() {
  return (
    <li className={post}>
      <div className={postTextArea}>
        <Text as="h3" size="lg" weight="bold">
          제목 입니다.
        </Text>
        <Text>설명입니다.</Text>
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
