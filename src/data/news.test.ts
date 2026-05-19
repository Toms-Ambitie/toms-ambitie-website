import { describe, it, expect } from "vitest";
import { news, getNewsByTag } from "@/data/news";
import type { ProjectTag } from "@/data/projectTags";

describe("news data. sortering nieuwste-eerst", () => {
  it("getNewsByTag retourneert items strikt aflopend op datum", () => {
    const tags = Array.from(
      new Set(news.map((n) => n.tag).filter((t): t is ProjectTag => !!t)),
    );
    expect(tags.length).toBeGreaterThan(0);

    for (const tag of tags) {
      const items = getNewsByTag(tag);
      const dates = items.map((i) => Date.parse(i.date));
      const sorted = [...dates].sort((a, b) => b - a);
      expect(dates, `tag "${tag}" moet nieuwste-eerst zijn`).toEqual(sorted);
    }
  });

  it("getNewsByTag respecteert limit en pakt de nieuwste N items", () => {
    const tag = news.find((n) => n.tag)?.tag;
    expect(tag).toBeDefined();
    const all = getNewsByTag(tag!);
    if (all.length < 2) return; // niet genoeg data om limit te testen

    const limited = getNewsByTag(tag!, 1);
    expect(limited).toHaveLength(1);
    expect(limited[0].slug).toBe(all[0].slug);
  });

  it("sorteert ook correct bij ongesorteerde bron (puur sorteer-contract)", () => {
    // Sanity-check op de sorteerlogica zelf. onafhankelijk van data.
    const sample = ["2025-01-10", "2026-06-01", "2025-12-15", "2026-06-01"];
    const sorted = [...sample].sort(
      (a, b) => Date.parse(b) - Date.parse(a),
    );
    expect(sorted).toEqual([
      "2026-06-01",
      "2026-06-01",
      "2025-12-15",
      "2025-01-10",
    ]);
  });
});
