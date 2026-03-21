"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import { SectionWrapper } from "../SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

export function Contact() {
  return (
    <SectionWrapper id="contact" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>

      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        I&apos;m currently looking for new opportunities. Whether you have a
        question or just want to say hello, my inbox is open.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" />
        Say Hello
      </a>

      <div className="mt-10 flex items-center justify-center gap-4">
        {socials.map((social) => {
          const Icon = iconMap[social.icon] || Mail;
          return (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.url.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="rounded-lg p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-accent-cyan"
              aria-label={social.name}
            >
              <Icon className="size-5" />
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
