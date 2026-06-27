import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Resume
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <p className="text-sm text-muted-foreground">
            View or download the latest version of my resume.
          </p>
        </div>

        <Button asChild className="w-fit">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </Button>

        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            src="/resume.pdf"
            className="h-[80vh] w-full"
            title="B Vikram Seervi Resume"
          />
        </div>
      </div>
    </Container>
  );
}
