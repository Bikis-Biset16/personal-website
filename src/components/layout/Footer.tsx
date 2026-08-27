import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const { social, profile } = siteConfig;

  return (
    <footer className="border-t border-[hsl(var(--border))] py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          &copy; {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {Object.entries(social).map(([key, url]) => {
            if (!url) return null;
            const Icon = socialIcons[key as keyof typeof socialIcons];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-brand-400"
                aria-label={key}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
