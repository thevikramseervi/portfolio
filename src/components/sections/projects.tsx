import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/profile";
import { projectAnchorId } from "@/lib/utils";

function ProjectCardContent({ project }: { project: Project }) {
  const linkButtonClass =
    "w-fit cursor-pointer gap-1.5 transition-colors duration-200";

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="text-lg font-semibold leading-snug">{project.name}</p>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          <Button variant="outline" size="sm" asChild className={linkButtonClass}>
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
            <Button variant="outline" size="sm" asChild className={linkButtonClass}>
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

      {project.achievement && (
        <span className="w-fit rounded border border-border bg-accent px-2.5 py-1 font-mono text-xs font-medium text-foreground">
          {project.achievement}
        </span>
      )}

      <p className="text-base leading-8 text-muted-foreground">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-base text-muted-foreground">
              <span
                className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground"
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={projectAnchorId(project.name)}
      className="group scroll-mt-14 rounded-lg border border-border transition-colors duration-200 hover:border-muted-foreground/40"
    >
      <div className="flex flex-col gap-6 p-6 lg:grid lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-10 lg:p-8">
        {project.image && (
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted/20">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        )}

        <div className="flex flex-col gap-5 lg:gap-6">
          <ProjectCardContent project={project} />
        </div>
      </div>
    </div>
  );
}

function RegularProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={projectAnchorId(project.name)}
      className="group flex scroll-mt-14 flex-col gap-0 rounded-lg border border-border transition-colors duration-200 hover:border-muted-foreground/40"
    >
      {project.image && (
        <div className="relative h-80 overflow-hidden rounded-t-lg border-b border-border bg-muted/20 sm:h-96 md:h-[28rem]">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            unoptimized
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>
      )}

      <div className="flex flex-col gap-5 p-6">
        <ProjectCardContent project={project} />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="flex flex-col gap-10 py-16">
      <h2
        id="projects-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project) =>
          project.name === "JanaDhristi" && project.image ? (
            <FeaturedProjectCard key={project.name} project={project} />
          ) : (
            <RegularProjectCard key={project.name} project={project} />
          ),
        )}
      </div>
    </section>
  );
}
