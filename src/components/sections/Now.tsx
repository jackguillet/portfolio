"use client";

import { Hammer, Wrench } from "lucide-react";
import { currentProject } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Now() {
  return (
    <SectionWrapper id="now">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold tracking-tight">
          Currently Building
        </h2>
        <span className="relative mt-1 flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-accent-cyan" />
        </span>
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-6 md:p-8">
        <div className="flex items-start gap-3">
          <Hammer className="mt-1 size-5 shrink-0 text-accent-cyan" />
          <div>
            <h3 className="text-xl font-bold">{currentProject.title}</h3>
            <p className="mt-0.5 font-mono text-xs text-accent-cyan">
              {currentProject.status}
            </p>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {currentProject.description}
        </p>

        <ul className="mt-4 space-y-2">
          {currentProject.details.map((detail, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-cyan/50" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2">
          <Wrench className="size-3.5 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {currentProject.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs font-medium text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
