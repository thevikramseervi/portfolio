import { achievements } from "@/data/profile";

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="achievements-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Achievements
      </h2>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-3">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="flex flex-col gap-2 border-t border-border pb-6 pt-6"
          >
            <p className="text-sm font-medium leading-snug">{a.title}</p>
            {a.detail && (
              <p className="font-mono text-xs text-muted-foreground">
                {a.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
