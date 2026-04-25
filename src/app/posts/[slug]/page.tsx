import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { allPosts, formatDate, getPostBySlug } from "@/lib/posts";

const tagPill = "rounded-lg border border-primary/30 bg-surface-subtle px-2.5 py-1 text-sm text-primary-strong";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-[min(100%_-_28px,720px)] py-12 md:w-[min(1080px,calc(100%_-_40px))] md:py-[72px]">
      <article>
        <header className="mb-10 max-w-3xl">
          <div className="mb-5 flex flex-wrap gap-2">
            {(post.tags ?? []).map((tag) => (
              <span className={tagPill} key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
          <p className="max-w-2xl text-lg text-muted">{post.description}</p>
          <time className="text-sm text-muted">{formatDate(post.date)}</time>
        </header>
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,720px)_220px] md:gap-[72px]">
          <div className="prose prose-neutral max-w-none prose-a:text-primary-strong prose-a:underline-offset-4 prose-h2:scroll-mt-24 prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-code dark:prose-invert">
            <MdxContent code={post.body} />
          </div>
          {post.toc.length > 0 ? (
            <aside
              className="order-first grid gap-2 border-b border-border pb-4 text-sm text-muted md:sticky md:top-24 md:order-none md:border-b-0 md:border-l md:pb-0 md:pl-4"
              aria-label="글 목차"
            >
              <p className="mb-1 font-bold text-foreground">On this page</p>
              {post.toc.map((item) => (
                <a className="hover:text-primary-strong" href={item.url} key={item.url}>
                  {item.title}
                </a>
              ))}
            </aside>
          ) : null}
        </div>
      </article>
    </main>
  );
}
