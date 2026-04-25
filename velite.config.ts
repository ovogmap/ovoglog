import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s.object({
        title: s.string(),
        description: s.string().optional(),
        date: s.isodate(),
        slug: s.slug("posts"),
        tags: s.array(s.string()).optional(),
        toc: s.toc(),
        body: s.mdx(),
      }),
    },
  },
});
