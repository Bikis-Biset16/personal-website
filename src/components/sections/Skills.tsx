"use client";

import { motion } from "framer-motion";
import { skills } from "@/config/site";

const categoryLabels = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  tool: "Tools & Platforms",
  other: "Other",
};

export function Skills() {
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-24 bg-[hsl(var(--muted))]/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading">
            Technologies I work with on a daily basis.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {Object.entries(grouped).map(([category, items], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="card"
            >
              <h3 className="mb-4 text-lg font-semibold">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-[hsl(var(--muted-foreground))]">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[hsl(var(--muted))]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(skill.level / 5) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
