"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/content";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeLeft} className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              My <span className="text-primary dark:text-light-header">Education</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                className="flex gap-5 p-6 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/45 hover:shadow-[0_0_24px_rgba(150,104,192,0.22)] transition-all duration-500 bg-white/50 dark:bg-[#300b40]/20"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/15 flex items-center justify-center">
                  <GraduationCap size={22} className="text-primary dark:text-secondary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-dark-text dark:text-[#FAF9E0]">
                        {edu.degree}
                      </h3>
                      <p className="text-primary dark:text-secondary font-heading font-semibold text-sm">
                        {edu.specialization}
                      </p>
                    </div>
                    {edu.grade && (
                      <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold font-heading">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>

                  <p className="font-semibold text-dark-header dark:text-[#FAF9E0]/85 text-sm mt-1">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-dark-header/60 dark:text-[#FAF9E0]/60">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
