"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Github, Wind, Map, BarChart3, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Map,
  BarChart3,
  Mail,
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(y * -8);
      rotateY.set(x * 8);
    },
    [rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export function Project() {
  const project = projects[0];

  return (
    <SectionWrapper id="project">
      <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>

      <div className="mt-10">
        <TiltCard>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <Wind className="size-6 text-accent-cyan" />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="mt-1 font-mono text-sm text-accent-cyan">
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
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Github className="size-4" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => {
                  const Icon = iconMap[feature.icon] || Wind;
                  return (
                    <div
                      key={feature.text}
                      className="flex items-start gap-3 rounded-lg bg-muted/50 p-3"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-accent-cyan" />
                      <span className="text-sm text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger className="cursor-default rounded-md bg-muted px-2.5 py-1 font-mono text-xs font-medium text-foreground transition-colors hover:bg-accent-cyan/10 hover:text-accent-cyan">
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
        </TiltCard>
      </div>
    </SectionWrapper>
  );
}
