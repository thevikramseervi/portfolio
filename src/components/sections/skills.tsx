import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-6 py-12">
      <h2
        id="skills-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Skills
      </h2>

      <div className="flex flex-col gap-y-6 border-t border-border pt-6 sm:gap-y-7">
        {skillGroups.map(({ label, skills }) => (
          <div
            key={label}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:gap-x-8 sm:items-start"
          >
            <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground sm:pt-0.5">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border/50 bg-muted/20 px-2.5 py-1 font-mono text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
