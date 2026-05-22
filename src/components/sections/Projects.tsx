"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, ExternalLink, Play, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 overflow-hidden hover:shadow-[0_0_25px_rgba(97,0,139,0.18)] hover:-translate-y-1 transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
    >
      {/* Image */}
      <div className="relative h-44 bg-[#300b40]/20 dark:bg-[#300b40]/40 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-primary/30 dark:text-secondary/30 text-4xl font-bold">
              {project.title[0]}
            </span>
          </div>
        )}
        {project.award && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-400/90 text-yellow-900 text-xs font-bold">
            <Trophy size={10} />
            Best Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs text-primary dark:text-secondary font-heading font-semibold mb-1">
          {project.context}
        </p>
        <h3 className="font-heading text-lg font-bold text-dark-text dark:text-[#FAF9E0] mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/80 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md bg-primary/8 dark:bg-secondary/15 text-primary dark:text-secondary text-xs font-medium border border-primary/15 dark:border-secondary/20"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-0.5 rounded-md text-dark-header/50 dark:text-[#FAF9E0]/60 text-xs">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex items-center gap-1 text-xs text-dark-header/60 dark:text-[#FAF9E0]/65 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <Code2 size={14} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1 text-xs text-dark-header/60 dark:text-[#FAF9E0]/65 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} demo video`}
              className="flex items-center gap-1 text-xs text-dark-header/60 dark:text-[#FAF9E0]/65 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <Play size={14} /> Video
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            aria-label={`View details for ${project.title}`}
            className="ml-auto flex items-center gap-1 text-xs font-heading font-semibold text-primary dark:text-secondary hover:opacity-75 transition-opacity group"
          >
            View Details
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "semester" | "practice">("all");

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header — one-time entrance animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-10"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              My <span className="text-primary dark:text-light-header">Projects</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-dark-header/70 dark:text-[#FAF9E0]/75 mb-8">
            {projects.length} projects across full-stack, cloud, AI/ML, data science, and DevOps.
          </motion.p>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} className="flex gap-2 flex-wrap">
            {(["all", "semester", "practice"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-400 to-purple-800 text-white shadow-md"
                    : "bg-white dark:bg-transparent text-primary dark:text-light-header border border-primary/30 dark:border-light-header/30 hover:border-primary"
                }`}
                aria-pressed={activeTab === tab}
              >
                {tab === "all"
                  ? `All (${projects.length})`
                  : tab === "semester"
                  ? `Semester (${projects.filter((p) => p.category === "semester").length})`
                  : `Practice (${projects.filter((p) => p.category === "practice").length})`}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid — independent of the header stagger, re-animates on every tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
