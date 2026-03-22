"use client";

import { blogPosts } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Writing() {
  return (
    <SectionWrapper id="writing">
      <h2 className="text-3xl font-bold tracking-tight">Writing</h2>

      <div className="mt-10 border-t border-border">
        {blogPosts.map((post) => {
          const inner = (
            <>
              <span
                className={`font-medium ${post.inProgress ? "text-muted-foreground" : "text-foreground"}`}
              >
                {post.title}
              </span>
              <span className="ml-4 shrink-0 text-sm text-muted-foreground italic">
                {post.date}
              </span>
            </>
          );

          if (post.inProgress) {
            return (
              <div
                key={post.title}
                className="flex items-baseline justify-between border-b border-border py-5"
              >
                {inner}
              </div>
            );
          }

          return (
            <a
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex items-baseline justify-between border-b border-border py-5 transition-opacity hover:opacity-60"
            >
              {inner}
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
