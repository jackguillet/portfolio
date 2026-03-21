"use client";

import { Briefcase, GraduationCap, Download } from "lucide-react";
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
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Download className="size-4" />
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="size-5 text-accent-cyan" />
          <h3 className="text-lg font-semibold">Experience</h3>
        </div>

        <div className="relative space-y-8 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
          {experience.map((job, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-6 top-2 size-2 rounded-full bg-accent-cyan" />
              <div>
                <h4 className="font-semibold">{job.role}</h4>
                <p className="text-sm text-accent-cyan">
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
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-lg border border-border p-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                {category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
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
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-5 text-accent-cyan" />
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
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
