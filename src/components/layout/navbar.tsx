"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems, type NavItemId } from "@/config/nav";
import { cn } from "@/lib/utils";

const NAV_OFFSET = 56;

function scrollToSection(id: NavItemId) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET - 8;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

function NavLink({
  label,
  id,
  active,
  onNavigate,
  className,
}: {
  label: string;
  id: NavItemId;
  active: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const linkClass = cn(
    "rounded-md px-2.5 py-1.5 font-mono text-sm transition-colors duration-150",
    active
      ? "text-foreground underline decoration-border underline-offset-4"
      : "text-muted-foreground hover:text-foreground",
    className,
  );

  if (isHome) {
    return (
      <button type="button" onClick={() => { scrollToSection(id); onNavigate?.(); }} className={linkClass}>
        {label}
      </button>
    );
  }

  return (
    <Link href={`/#${id}`} onClick={onNavigate} className={linkClass}>
      {label}
    </Link>
  );
}

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = React.useState<NavItemId | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const highlightedId = isHome ? activeId : null;

  React.useEffect(() => {
    if (!isHome) return;

    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id as NavItemId);
        }
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 120) {
        setActiveId(null);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  React.useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-14 items-center gap-4" aria-label="Main">
          <Link
            href="/"
            aria-label="Home"
            className="shrink-0 font-mono text-sm font-medium tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            vikramseervi
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                id={item.id}
                active={highlightedId === item.id}
              />
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150 hover:text-foreground md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div
            id="mobile-nav"
            className="border-t border-border pb-3 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  label={item.label}
                  id={item.id}
                  active={highlightedId === item.id}
                  onNavigate={() => setMobileOpen(false)}
                  className="w-full px-3 py-2 text-left"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export { Navbar };
