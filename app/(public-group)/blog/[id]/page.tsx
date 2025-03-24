import Content from "./components/content/content";
import Title from "./components/title/title";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  // TODO: getPost(postId)
  console.log(postId);
  return (
    <>
      <Title title="title" date="date" />
      <Content />
    </>
  );
}
