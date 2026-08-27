"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { aboutText } from "@/config/site";
import { getInitials } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            A brief introduction to who I am and what I do.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:col-span-2"
          >
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-6xl font-bold text-brand-400">
                {getInitials(siteConfig.profile.name)}
              </div>
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-brand-500/30 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              {aboutText.intro}
            </p>

            <ul className="mt-8 space-y-3">
              {aboutText.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-500"
                  />
                  <span className="text-[hsl(var(--muted-foreground))]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-[hsl(var(--border))] px-4 py-1.5 text-[hsl(var(--muted-foreground))]">
                📍 {siteConfig.profile.location}
              </span>
              <a
                href={`mailto:${siteConfig.profile.email}`}
                className="rounded-full border border-[hsl(var(--border))] px-4 py-1.5 text-[hsl(var(--muted-foreground))] transition-colors hover:border-brand-500/50 hover:text-brand-400"
              >
                ✉️ {siteConfig.profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
