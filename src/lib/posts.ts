import { posts } from "../../.velite";

export type Post = (typeof posts)[number];

export const allPosts = posts
  .filter((post) => post.slug)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(allPosts.flatMap((post) => post.tags ?? []))).sort();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
