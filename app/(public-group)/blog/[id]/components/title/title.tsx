import { Text } from "@/app/components/text/text";
import { PostData } from "../../types";
import { Container } from "./title.css";

interface TitleProps {
  title: PostData["title"];
  date: PostData["createdAt"] | PostData["updatedAt"];
}

export default function Title({ title, date }: TitleProps) {
  return (
    <div className={Container}>
      <Text size="lg" weight="bold">
        {title}
      </Text>
      <Text size="xs" color="secondary">
        {date}
      </Text>
    </div>
  );
}
