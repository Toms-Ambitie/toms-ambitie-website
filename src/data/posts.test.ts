import { readFileSync } from "fs";
import { describe, it, expect } from "vitest";
import { POSTS } from "@/data/posts";
import { isoDate } from "@/components/site/newsHelpers";

// Guards the article list: every article must be reachable, findable and follow the design rules.
describe("articles (posts.ts)", () => {
  it("have unique addresses", () => {
    const slugs = POSTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("have a readable date and stand newest first", () => {
    const dates = POSTS.map((p) => isoDate(p.date));
    dates.forEach((d, i) => expect(d, POSTS[i].slug).toBeTruthy());
    expect(dates).toEqual([...dates].sort().reverse());
  });

  it("each have their own title and description for Google", () => {
    const seo = readFileSync("scripts/inject-seo.mjs", "utf8");
    for (const p of POSTS) expect(seo, p.slug).toContain(`slug: '${p.slug}'`);
  });

  it("only mark a word that is in the title", () => {
    for (const p of POSTS) if (p.hl) expect(p.title, p.slug).toContain(p.hl);
  });

  it("use no dashes as punctuation", () => {
    for (const p of POSTS) expect(JSON.stringify(p), p.slug).not.toMatch(/[–—]| - /);
  });
});
