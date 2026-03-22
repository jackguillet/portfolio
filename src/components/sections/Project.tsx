"use client";

import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

export function Project() {
  const project = projects[0];

  return (
    <SectionWrapper id="project">
      <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>

      <div className="mt-10">
        <div className="border-t border-border pt-8">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.tagline}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  <Github className="size-4" />
                  Source Code
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 py-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger className="cursor-default border border-border px-2.5 py-1 text-xs text-foreground transition-opacity hover:opacity-60">
                      {tech.name}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
