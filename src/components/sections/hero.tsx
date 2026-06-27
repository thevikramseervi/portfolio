"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  profile,
  links,
  experience,
  competitiveProgramming,
} from "@/data/profile";

const cfProfile = competitiveProgramming.profiles.find(
  (p) => p.platform === "Codeforces",
)!;

const highlights = [
  `${experience[0].program} Intern`,
  `${cfProfile.platform} ${cfProfile.rank} · Peak ${cfProfile.peakRating}`,
  `CGPA ${profile.cgpa} / 10`,
];

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-8 py-16 sm:py-24"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="font-mono text-lg text-muted-foreground">
          {profile.role}
        </p>
      </div>

      <p className="max-w-xl text-base leading-7 text-muted-foreground">
        {profile.headline}
      </p>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={links.resume}>
            <FileText className="size-4" />
            Resume
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            LinkedIn
          </a>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {highlights.map((item, i) => (
          <React.Fragment key={item}>
            {i > 0 && <span className="h-4 w-px bg-border" aria-hidden />}
            <span className="text-sm text-muted-foreground">{item}</span>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
