import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { experience } from "@/data/profile";
import { projectAnchorId } from "@/lib/utils";

const linkButtonClass =
  "w-fit cursor-pointer gap-1.5 transition-colors duration-200";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-10 py-16">
      <h2
        id="experience-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Work Experience
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map((exp) => (
          <div
            key={exp.org}
            className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-[1fr_2fr]"
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-lg font-semibold leading-snug">{exp.org}</p>
              <p className="text-base font-medium text-foreground">{exp.role}</p>
              <p className="text-base text-muted-foreground">{exp.program}</p>
              <p className="text-base text-muted-foreground">{exp.duration}</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">{exp.project}</p>
              {exp.linkedProject && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className={linkButtonClass}
                >
                  <a
                    href={`#${projectAnchorId(exp.linkedProject)}`}
                    aria-label={`View ${exp.linkedProject} project`}
                  >
                    <ArrowRight className="size-3.5" />
                    View Project
                  </a>
                </Button>
              )}
              <p className="text-base leading-7 text-muted-foreground">
                {exp.description}
              </p>
              <ul className="flex flex-col gap-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-base text-muted-foreground"
                  >
                    <span
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground"
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
