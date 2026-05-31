import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

export async function GET(context: APIContext) {
  // Phase 1: drafts included so the feed isn't empty in preview. Add
  // `.filter(({ data }) => !data.draft)` once real content lands.
  const posts = (await getCollection("writing")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${SITE.title} — Writing`,
    description:
      "Research highlights, technique explainers, mentoring philosophy, field notes, and news.",
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
