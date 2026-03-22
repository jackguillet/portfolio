"use client";

import { siteConfig, skills } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          {siteConfig.about.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6 md:w-64">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-2.5 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
