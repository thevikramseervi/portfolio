import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="experience-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Work Experience
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map((exp) => (
          <div
            key={exp.org}
            className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-[1fr_2fr]"
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">{exp.org}</p>
              <p className="text-sm text-muted-foreground">{exp.program}</p>
              <p className="text-sm text-muted-foreground">{exp.role}</p>
              <p className="text-sm text-muted-foreground">{exp.duration}</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium">{exp.project}</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {exp.description}
              </p>
              <ul className="flex flex-col gap-2">
                {exp.highlights.map((h) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
