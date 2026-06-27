import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container asChild>
        <nav className="flex h-14 items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            className="font-mono text-sm font-medium tracking-tight"
          >
            vikramseervi
          </Link>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}

export { Navbar };
