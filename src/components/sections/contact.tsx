import { Button } from "@/components/ui/button";
import { links } from "@/data/profile";

const contactLinks = [
  { label: "Email",    href: links.email,    external: false },
  { label: "GitHub",   href: links.github,   external: true  },
  { label: "LinkedIn", href: links.linkedin, external: true  },
  { label: "Resume",   href: links.resume,   external: false },
];

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="contact-heading"
        className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
      >
        Contact
      </h2>

      <div className="flex flex-wrap gap-1 -ml-2 border-t border-border pt-8">
        {contactLinks.map(({ label, href, external }) => (
          <Button key={label} variant="ghost" size="sm" asChild>
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
