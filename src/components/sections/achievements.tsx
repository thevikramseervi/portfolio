import { achievements } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading" className="flex flex-col gap-6 py-12">
      <h2
        id="achievements-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Achievements
      </h2>

      <div className="grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.headline}
            className={cn(
              "flex h-full flex-col gap-2 rounded-lg border border-border p-5",
              "transition-[border-color,background-color] duration-200",
              "hover:border-muted-foreground/30 hover:bg-muted/10",
            )}
          >
            <span className="text-xl leading-none" aria-hidden>
              {achievement.icon}
            </span>
            <p className="text-lg font-semibold leading-snug tracking-tight text-foreground">
              {achievement.headline}
            </p>
            <p className="text-base leading-snug text-muted-foreground">
              {achievement.subtitle}
            </p>
            {achievement.detail && (
              <p className="font-mono text-sm text-muted-foreground">{achievement.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
