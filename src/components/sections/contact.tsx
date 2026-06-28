import { FileText, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { links } from "@/data/profile";

const contactLinks = [
  { label: "Email", href: links.email, external: false, icon: Mail },
  { label: "GitHub", href: links.github, external: true, icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin, external: true, icon: LinkedInIcon },
  { label: "Resume", href: links.resume, external: false, icon: FileText },
] as const;

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="flex flex-col gap-8 py-16">
      <h2
        id="contact-heading"
        className="font-mono text-base font-medium uppercase tracking-widest text-muted-foreground"
      >
        Contact
      </h2>

      <div className="flex flex-col gap-6 border-t border-border pt-8">
        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          Let's build something great.
        </p>

        <div className="flex flex-wrap gap-3">
          {contactLinks.map(({ label, href, external, icon: Icon }) => (
            <Button key={label} variant="outline" asChild>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon className="size-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
