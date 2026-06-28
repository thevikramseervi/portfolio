import { education } from "@/data/profile";

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="flex flex-col gap-6 py-12">
      <h2
        id="education-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Education
      </h2>

      <div className="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium">{education.institution}</p>
          <p className="text-base text-muted-foreground">{education.location}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">{education.degree}</p>
            <p className="text-base text-muted-foreground">
              {education.duration} · Expected {education.expectedGraduation}
            </p>
          </div>

          <p className="text-base text-muted-foreground">
            CGPA:{" "}
            <span className="font-medium text-foreground">
              {education.cgpa} / 10
            </span>
          </p>

          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">Relevant Coursework</p>
            <p className="text-base text-muted-foreground">
              {education.coursework.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
