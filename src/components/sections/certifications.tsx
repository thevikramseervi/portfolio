import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="flex flex-col gap-8 py-16"
    >
      <h2
        id="certifications-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Certifications
      </h2>

      <div className="flex flex-col">
        {certifications.map((cert) => {
          const scoreText = [cert.score, cert.badge].filter(Boolean).join(" · ");

          return (
            <div
              key={cert.title}
              className="grid grid-cols-1 gap-1 border-t border-border py-6 sm:grid-cols-[2fr_1fr_1fr] sm:items-start sm:gap-4"
            >
              <p className="text-sm font-medium">{cert.title}</p>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="font-mono text-xs text-muted-foreground sm:text-right">
                {cert.inProgress ? "In Progress" : scoreText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
