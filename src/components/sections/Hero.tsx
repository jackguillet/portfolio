"use client";

import { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    container.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    container.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex min-h-screen items-center overflow-hidden"
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background:
            "radial-gradient(600px circle at var(--glow-x) var(--glow-y), oklch(0.715 0.143 215 / 0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-4 font-mono text-sm text-accent-cyan">
            Hi, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold tracking-tight md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-lg text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#project"
            className="inline-flex items-center rounded-lg bg-accent-cyan px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="size-6 text-muted-foreground" />
        </a>
      </motion.div>
    </div>
  );
}
