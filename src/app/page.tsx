import Link from "next/link";
import { allPosts, formatDate, getAllTags } from "@/lib/posts";

const pageShell = "mx-auto w-[min(100%_-_28px,720px)] py-12 md:w-[min(1080px,calc(100%_-_40px))] md:py-20";
const eyebrow = "mb-3 text-sm font-bold uppercase text-primary";
const section = "border-t border-border py-11";
const tagPill = "rounded-lg border border-border bg-surface-subtle px-2.5 py-1 text-sm text-muted";

export default function Home() {
  const featuredPosts = allPosts.slice(0, 3);
  const tags = getAllTags().slice(0, 8);

  return (
    <main className={pageShell}>
      <section className="max-w-3xl pb-16 pt-10">
        <p className={eyebrow}>Quiet Engineering Notes</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          깊게 이해하고, 단정하게 기록하는 기술 블로그
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Next.js, React, 프론트엔드 아키텍처, 그리고 문제 해결 과정을 차분하게 정리합니다.
          과한 장식보다 읽기 좋은 구조와 오래 남는 글을 우선합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link
            className="inline-flex min-h-9 items-center justify-center rounded-lg border border-primary bg-primary px-4 text-sm font-bold text-white"
            href="/posts"
          >
            글 보러가기
          </Link>
          <Link
            className="inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-surface px-4 text-sm font-bold"
            href="/about"
          >
            소개
          </Link>
        </div>
      </section>

      <section className={section} aria-labelledby="recent-posts">
        <div className="grid gap-8 md:flex md:items-start md:justify-between">
          <div>
            <p className={eyebrow}>Recently Written</p>
            <h2 className="text-2xl font-bold leading-tight" id="recent-posts">
              최근 글
            </h2>
          </div>
          <Link className="text-sm font-bold text-primary hover:text-foreground" href="/posts">
            전체 글
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              className="min-h-64 rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors hover:border-primary/50"
              href={`/posts/${post.slug}`}
              key={post.slug}
            >
              <time className="text-sm text-muted">{formatDate(post.date)}</time>
              <h3 className="my-3.5 text-xl font-bold leading-snug">{post.title}</h3>
              <p className="text-muted">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(post.tags ?? []).map((tag) => (
                  <span className={tagPill} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${section} grid gap-8 md:flex md:items-start md:justify-between`} aria-labelledby="topics">
        <div>
          <p className={eyebrow}>Topics</p>
          <h2 className="text-2xl font-bold leading-tight" id="topics">
            자주 다루는 주제
          </h2>
        </div>
        <div className="flex max-w-xl flex-wrap gap-2 md:justify-end">
          {tags.map((tag) => (
            <Link className={tagPill} href={`/posts?tag=${encodeURIComponent(tag)}`} key={tag}>
              {tag}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
