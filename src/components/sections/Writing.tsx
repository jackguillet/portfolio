"use client";

import { PenLine, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Writing() {
  return (
    <SectionWrapper id="writing">
      <div className="flex items-center gap-3">
        <PenLine className="size-5 text-accent-cyan" />
        <h2 className="text-3xl font-bold tracking-tight">Writing</h2>
      </div>

      <div className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent-cyan/30 hover:bg-muted/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold group-hover:text-accent-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {post.date} &middot; {post.readTime}
                </p>
              </div>
              <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent-cyan" />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
