"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { skillGroups } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              My <span className="text-primary dark:text-light-header">Skills</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
            {skillGroups.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-gradient-to-r from-purple-400 to-purple-800 text-white shadow-md"
                    : "bg-white dark:bg-transparent text-primary dark:text-light-header border border-primary/30 dark:border-light-header/30 hover:border-primary dark:hover:border-secondary"
                }`}
                aria-pressed={activeTab === i}
              >
                {group.category}
              </button>
            ))}
          </motion.div>

          {/* Active skill badges */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {skillGroups[activeTab].skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-[#300b40]/40 border border-[#9668C0]/30 dark:border-[#9668C0]/40 text-dark-header dark:text-[#FAF9E0] text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-secondary/30 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* All skills overview */}
          <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                className="group text-left p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 hover:shadow-[0_0_20px_rgba(97,0,139,0.15)] hover:-translate-y-2 transition-all duration-500 bg-white/50 dark:bg-[#300b40]/10"
              >
                <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0] mb-2 group-hover:text-primary dark:group-hover:text-light-header transition-colors">
                  {group.category}
                </h3>
                <p className="text-xs text-dark-header/60 dark:text-[#FAF9E0]/65 leading-relaxed">
                  {group.skills.slice(0, 5).join(" · ")}
                  {group.skills.length > 5 && ` · +${group.skills.length - 5} more`}
                </p>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
