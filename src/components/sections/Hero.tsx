"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { profile } = siteConfig;

  return (
    <section className="relative flex min-h-screen items-center pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-brand-400/5 blur-3xl" />
      </div>

      <div className="section-container relative w-full py-20">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] lg:gap-12">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 max-w-3xl"
          >
            <p className="mb-4 font-mono text-sm text-brand-400">
              Hi, my name is
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              {profile.name}.
            </h1>

            <h2 className="mt-2 break-words text-4xl font-bold tracking-tight text-[hsl(var(--muted-foreground))] sm:text-5xl">
              {profile.title}.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <Mail size={18} />
                Get in Touch
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  className="btn-secondary"
                  download
                >
                  <Download size={18} />
                  Download Resume
                </a>
              )}
            </div>
          </motion.div>

          {/* Profile Image — fixed in the right grid column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex w-full justify-center md:justify-end"
          >
            <div className="relative h-56 w-56 shrink-0 lg:h-72 lg:w-72">
              {/* Image Glow */}
              <div className="absolute inset-0 rounded-full bg-brand-600/20 blur-xl" />

              <Image
                src={profile.avatar || "/profile.jpg"}
                alt={`${profile.name} profile photo`}
                fill
                sizes="(max-width: 767px) 224px, (max-width: 1023px) 224px, 288px"
                className="rounded-full object-cover ring-4 ring-brand-600/30"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))] transition-colors hover:text-brand-400"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}