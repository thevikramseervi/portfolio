import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { competitiveProgramming } from "@/data/profile";

export function CompetitiveProgramming() {
  const { profiles, problemsSolved } = competitiveProgramming;

  return (
    <section aria-labelledby="cp-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="cp-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Competitive Programming
      </h2>

      <div className="flex items-baseline gap-3 border-t border-border pt-8">
        <span className="text-2xl font-semibold tracking-tight">
          {problemsSolved}
        </span>
        <span className="font-mono text-sm text-muted-foreground">
          problems solved across platforms
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
        {profiles.map((p) => (
          <div key={p.platform} className="flex flex-col gap-2">
            <p className="text-sm font-medium">{p.platform}</p>
            <p className="text-2xl font-semibold tracking-tight">
              {p.peakRating}
            </p>
            {p.rank && (
              <p className="font-mono text-xs text-muted-foreground">
                {p.rank}
              </p>
            )}
            <p className="font-mono text-xs text-muted-foreground">
              {p.handle}
            </p>
            <Button variant="ghost" size="sm" className="-ml-2 w-fit" asChild>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.platform} profile`}
              >
                <ExternalLink className="size-3.5" />
                Profile
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
