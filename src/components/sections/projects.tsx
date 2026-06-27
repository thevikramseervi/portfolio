import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="projects-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Projects
      </h2>

      <div className="flex flex-col">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3 border-t border-border py-8"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium">{project.name}</p>
              <div className="flex shrink-0 items-center gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <ExternalLink className="size-3.5" />
                    GitHub
                  </a>
                </Button>
                {project.live && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink className="size-3.5" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground"
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {project.achievement && (
              <span className="w-fit rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                {project.achievement}
              </span>
            )}

            <p className="font-mono text-xs text-muted-foreground">
              {project.tech.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
