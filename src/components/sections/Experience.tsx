"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/config/site";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[hsl(var(--muted))]/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey so far.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[hsl(var(--border))] md:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-2.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-brand-500 bg-[hsl(var(--background))] md:block" />

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Briefcase
                        size={20}
                        className="text-brand-400 md:hidden"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-brand-400">{job.company}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-[hsl(var(--muted-foreground))]">
                      <p>
                        {job.startDate} — {job.endDate}
                      </p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[hsl(var(--muted))] px-2 py-0.5 font-mono text-xs text-[hsl(var(--muted-foreground))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
