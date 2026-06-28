import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { competitiveProgramming } from "@/data/profile";
import { cn } from "@/lib/utils";

function PlatformLogo({
  platform,
  className,
}: {
  platform: string;
  className?: string;
}) {
  const props = {
    className: cn("size-5 shrink-0 text-muted-foreground", className),
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (platform) {
    case "Codeforces":
      return (
        <svg {...props}>
          <rect x="3" y="14" width="4" height="7" rx="0.5" />
          <rect x="10" y="10" width="4" height="11" rx="0.5" />
          <rect x="17" y="5" width="4" height="16" rx="0.5" />
        </svg>
      );
    case "CodeChef":
      return (
        <svg {...props}>
          <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm1.5 6.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-1zm5 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-1z" />
        </svg>
      );
    case "LeetCode":
      return (
        <svg {...props}>
          <path d="M7 6l-4 6 4 6h2.5l-4-6 4-6H7zm10 0h-2.5l4 6-4 6H17l4-6-4-6z" />
        </svg>
      );
    case "AtCoder":
      return (
        <svg {...props}>
          <path d="M12 3L3 20h18L12 3zm0 5.2L16.8 18H7.2L12 8.2z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

function PlatformCard({
  platform,
  peakRating,
  problemsSolved,
  rank,
  url,
}: {
  platform: string;
  peakRating: number;
  problemsSolved?: number;
  rank?: string;
  url: string;
}) {
  return (
    <div
      className={cn(
        "group/card flex h-full flex-col gap-2 rounded-lg border border-border p-4",
        "transition-[border-color,background-color,transform] duration-200",
        "hover:-translate-y-0.5 hover:border-muted-foreground/40 hover:bg-muted/20",
      )}
    >
      <PlatformLogo platform={platform} />
      <p className="text-base font-medium leading-snug">{platform}</p>

      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold tracking-tight">{peakRating}</span>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Peak Rating
        </span>
      </div>

      <p className="min-h-5 font-mono text-sm text-foreground/80">
        {problemsSolved !== undefined ? `${problemsSolved} Solved` : ""}
      </p>

      <div className="min-h-6">
        {rank && (
          <span className="inline-flex rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
            {rank}
          </span>
        )}
      </div>

      <div className="mt-auto pt-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-fit cursor-pointer gap-1.5 transition-colors duration-200"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${platform} profile`}
          >
            <ExternalLink className="size-3.5" />
            View Profile
          </a>
        </Button>
      </div>
    </div>
  );
}

export function CompetitiveProgramming() {
  const { profiles, problemsSolved } = competitiveProgramming;

  return (
    <section aria-labelledby="cp-heading" className="flex flex-col gap-6 py-12">
      <h2
        id="cp-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Competitive Programming
      </h2>

      <div className="flex flex-col gap-4 border-t border-border pt-6">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {problemsSolved}
          </span>
          <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Problems Solved Across Platforms
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <PlatformCard
              key={p.platform}
              platform={p.platform}
              peakRating={p.peakRating}
              problemsSolved={p.problemsSolved}
              rank={p.rank}
              url={p.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
