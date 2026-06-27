import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          404
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="w-fit text-sm font-medium underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </Container>
  );
}
