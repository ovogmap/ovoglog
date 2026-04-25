import type { Metadata } from "next";
import Link from "next/link";
import { allPosts, formatDate, getAllTags } from "@/lib/posts";

const pageShell = "mx-auto w-[min(100%_-_28px,720px)] py-12 md:w-[min(1080px,calc(100%_-_40px))] md:py-20";
const eyebrow = "mb-3 text-sm font-bold uppercase text-primary";
const tagPill = "rounded-lg border border-border bg-surface-subtle px-2.5 py-1 text-sm text-muted";

export const metadata: Metadata = {
  title: "Posts",
  description: "ovoglog에 작성된 기술 글 목록",
};

type PostsPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const { tag } = await searchParams;
  const tags = getAllTags();
  const filteredPosts = tag ? allPosts.filter((post) => post.tags?.includes(tag)) : allPosts;

  return (
    <main className={pageShell}>
      <section className="max-w-3xl pb-14 pt-9">
        <p className={eyebrow}>Archive</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">글 목록</h1>
        <p className="max-w-2xl text-lg text-muted">
          기술을 배운 과정, 설계 판단, 트러블슈팅 기록을 주제별로 모아둡니다.
        </p>
      </section>

      <div className="mb-7 flex flex-wrap gap-2" aria-label="태그 필터">
        <Link
          className={`inline-flex min-h-9 items-center justify-center rounded-lg border px-3 text-sm ${
            !tag
              ? "border-primary bg-surface-subtle text-primary-strong"
              : "border-border bg-surface-subtle text-muted"
          }`}
          href="/posts"
        >
          All
        </Link>
        {tags.map((item) => (
          <Link
            className={`inline-flex min-h-9 items-center justify-center rounded-lg border px-3 text-sm ${
              tag === item
                ? "border-primary bg-surface-subtle text-primary-strong"
                : "border-border bg-surface-subtle text-muted"
            }`}
            href={`/posts?tag=${encodeURIComponent(item)}`}
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="grid gap-3.5">
        {filteredPosts.map((post) => (
          <Link
            className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            href={`/posts/${post.slug}`}
            key={post.slug}
          >
            <article className="grid gap-6 rounded-lg border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/50 md:flex md:items-start md:justify-between">
              <div>
                <time className="text-sm text-muted">{formatDate(post.date)}</time>
                <h2 className="my-3.5 text-xl font-bold leading-snug">{post.title}</h2>
                <p className="text-muted">{post.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(post.tags ?? []).map((item) => (
                  <span className={tagPill} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
