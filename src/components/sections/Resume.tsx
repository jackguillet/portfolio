"use client";

import { Download } from "lucide-react";
import { experience, education, skills } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
        >
          <Download className="size-4" />
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-6">Experience</h3>

        <div className="space-y-8 border-t border-border pt-8">
          {experience.map((job, i) => (
            <div key={i}>
              <h4 className="font-semibold">{job.role}</h4>
              <p className="text-sm text-muted-foreground">
                {job.company} &middot; {job.team}
              </p>
              <p className="text-xs text-muted-foreground">
                {job.period} &middot; {job.location}
              </p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Education</h3>
        {education.map((edu, i) => (
          <div key={i}>
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">
              {edu.school} &middot; {edu.graduated}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
