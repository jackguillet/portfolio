"use client";

import { currentProject } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Now() {
  return (
    <SectionWrapper id="now">
      <h2 className="text-3xl font-bold tracking-tight">Currently Building</h2>

      <div className="mt-10 border-t border-border pt-8">
        <h3 className="text-xl font-bold">{currentProject.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {currentProject.status}
        </p>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {currentProject.description}
        </p>

        <ul className="mt-4 space-y-2">
          {currentProject.details.map((detail, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {currentProject.tools.map((tool) => (
            <span
              key={tool}
              className="border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
