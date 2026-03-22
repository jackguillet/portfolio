"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.p
          className="mb-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m
        </motion.p>

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
            className="inline-flex items-center border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm text-muted-foreground transition-opacity hover:opacity-60"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
