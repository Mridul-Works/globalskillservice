"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories } from "@/lib/courses";

const levels = ["All levels", "Entry", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

function matchesLevel(courseLevel: string, filter: string) {
  if (filter === "All levels") return true;
  if (filter === "Entry") return courseLevel === "Entry";
  const n = filter.split(" ")[1];
  // "Level 1–2" should match both Level 1 and Level 2.
  return courseLevel.startsWith("Level") && courseLevel.replace("Level ", "").split("–").includes(n);
}

export function CourseFinder() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [level, setLevel] = useState("All levels");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => cat === "all" || c.slug === cat)
      .map((c) => ({
        ...c,
        courses: c.courses.filter(
          (course) => (!q || course.title.toLowerCase().includes(q)) && matchesLevel(course.level, level),
        ),
      }))
      .filter((c) => c.courses.length > 0);
  }, [query, cat, level]);

  const count = results.reduce((n, c) => n + c.courses.length, 0);
  const select =
    "rounded-xl border border-line bg-paper px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10";

  return (
    <div>
      <div className="grid gap-3 rounded-2xl border border-line bg-paper p-4 sm:grid-cols-[1fr_auto_auto]">
        <label className="sr-only" htmlFor="q">Search courses</label>
        <input
          id="q"
          type="search"
          placeholder="Search e.g. dementia, maths, management"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={select}
        />
        <label className="sr-only" htmlFor="cat">Subject</label>
        <select id="cat" value={cat} onChange={(e) => setCat(e.target.value)} className={select}>
          <option value="all">All subjects</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="level">Level</label>
        <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} className={select}>
          {levels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {count} {count === 1 ? "course" : "courses"}
      </p>

      <div className="mt-6 space-y-12">
        {results.map((c) => (
          <section key={c.slug} aria-labelledby={`h-${c.slug}`}>
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-3">
              <h2 id={`h-${c.slug}`} className="text-4xl text-ink">{c.name}</h2>
              <Link href={`/courses/${c.slug}`} className="text-sm font-medium text-accent hover:text-ink">
                About this subject →
              </Link>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.courses.map((course) => (
                <li key={course.title}>
                  <Link
                    href={`/contact?course=${encodeURIComponent(course.title)}`}
                    className="group flex h-full items-start justify-between gap-4 rounded-xl border border-line bg-paper p-4 transition-colors hover:border-ink/30"
                  >
                    <span>
                      <span className="block font-medium text-ink">{course.title}</span>
                      <span className="mt-1 block text-xs text-muted">
                        {[course.level, course.duration, course.fee].filter(Boolean).join(" · ")}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-medium text-accent group-hover:text-ink">
                      Enquire
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {count === 0 && (
          <div className="rounded-2xl border border-dashed border-line p-10 text-center">
            <p className="font-medium">No courses match those filters.</p>
            <p className="mt-1 text-sm text-muted">
              Try a different search, or <Link href="/contact" className="underline">ask us</Link> — we may still be able to help.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
