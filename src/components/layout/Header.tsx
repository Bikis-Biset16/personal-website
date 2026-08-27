"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight">
          {siteConfig.profile.name.split(" ")[0]}
          <span className="text-brand-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-brand-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <nav className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur-lg md:hidden">
          <div className="section-container flex flex-col gap-4 py-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-brand-400"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
