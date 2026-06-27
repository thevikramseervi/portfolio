import { Container } from "@/components/layout/container";

function Footer() {
  return (
    <footer className="border-t border-border">
      <Container asChild>
        <div className="flex h-14 items-center justify-between text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Vikram Seervi</span>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
