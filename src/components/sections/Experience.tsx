"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Calendar } from "lucide-react";
import { experiences } from "@/lib/content";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 dark:block hidden"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 85% 40%, rgba(71, 0, 95, 0.12), transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeLeft} className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              Work <span className="text-primary dark:text-light-header">Experience</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent dark:from-light-header dark:via-secondary" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeLeft}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-6 top-1.5 w-4 h-4 rounded-full bg-primary dark:bg-secondary border-2 border-white dark:border-[#0e0315] shadow-[0_0_8px_rgba(97,0,139,0.5)]" />

                  <div className="p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/45 hover:shadow-[0_0_24px_rgba(150,104,192,0.22)] transition-all duration-500 bg-white/50 dark:bg-[#300b40]/20">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-dark-text dark:text-[#FAF9E0]">
                          {exp.title}
                        </h3>
                        <p className="font-heading text-primary dark:text-secondary font-semibold text-sm">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="flex items-center gap-1 text-xs text-dark-header/60 dark:text-[#FAF9E0]/60">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary dark:bg-light-header flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    {exp.tech && (
                      <p className="text-xs text-dark-header/50 dark:text-[#FAF9E0]/60 border-t border-[#9668C0]/25 pt-3">
                        <span className="text-primary dark:text-secondary font-semibold">Tech: </span>
                        {exp.tech}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
