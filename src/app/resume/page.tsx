import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  profile,
  experience,
  competitiveProgramming,
  achievements,
} from "@/data/profile";

const cfProfile = competitiveProgramming.profiles.find(
  (p) => p.platform === "Codeforces",
)!;

const highlights = [
  `${experience[0].orgShort} Intern`,
  `${competitiveProgramming.problemsSolved} Problems Solved`,
  `CGPA ${profile.cgpa} / 10`,
  `${cfProfile.platform} ${cfProfile.rank} · ${cfProfile.peakRating}`,
  `${achievements[0].headline} — ${achievements[0].subtitle}`,
];

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Resume
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
            <p className="text-sm text-muted-foreground">
              View my latest resume online.
            </p>
          </div>

          <Button asChild className="w-fit">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Open PDF
            </a>
          </Button>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — PDF viewer */}
        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            src="/resume.pdf#navpanes=0"
            className="h-[80vh] w-full"
            title="B Vikram Seervi Resume"
          />
        </div>
      </div>
    </Container>
  );
}
