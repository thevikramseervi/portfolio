import { Award, Medal } from "lucide-react";

import { certifications, type Certification } from "@/data/profile";
import { cn } from "@/lib/utils";

function CertificationIcon({ cert }: { cert: Certification }) {
  const className = "mt-0.5 size-[18px] shrink-0 text-muted-foreground";

  if (cert.badge) {
    return <Medal className={className} aria-hidden />;
  }

  return <Award className={className} aria-hidden />;
}

function CertificationStatus({
  inProgress,
  badge,
  score,
}: {
  inProgress?: boolean;
  badge?: string;
  score?: string;
}) {
  if (inProgress) {
    return (
      <span className="inline-flex w-fit items-center gap-1.5 rounded border border-border bg-accent px-2.5 py-1 font-mono text-xs font-medium text-foreground sm:ml-auto">
        <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground" aria-hidden />
        In Progress
      </span>
    );
  }

  if (score && badge) {
    return (
      <div className="flex flex-col gap-0.5 sm:items-end">
        <span className="font-mono text-sm font-semibold text-foreground">{score}</span>
        <span className="font-mono text-xs text-muted-foreground">{badge}</span>
      </div>
    );
  }

  if (score) {
    return (
      <p className="font-mono text-sm font-semibold text-foreground sm:text-right">{score}</p>
    );
  }

  return null;
}

export function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="flex flex-col gap-6 py-12"
    >
      <h2
        id="certifications-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Certifications
      </h2>

      <div className="flex flex-col">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className={cn(
              "grid grid-cols-1 gap-2 border-t border-border py-6",
              "transition-[border-color,background-color] duration-200",
              "hover:border-muted-foreground/30 hover:bg-muted/10",
              "sm:grid-cols-[2fr_1fr_1fr] sm:items-start sm:gap-4",
            )}
          >
            <p className="text-sm font-semibold leading-snug text-foreground">
              {cert.title}
            </p>

            <div className="flex items-start gap-2.5 sm:pt-0.5">
              <CertificationIcon cert={cert} />
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>

            <div className="sm:flex sm:justify-end">
              <CertificationStatus
                inProgress={cert.inProgress}
                badge={cert.badge}
                score={cert.score}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
