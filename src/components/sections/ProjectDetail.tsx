"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Play, Code2 } from "lucide-react";
import type { Project } from "@/lib/content";
import type { ProjectDetailData } from "@/lib/projectDetails";

type Props = {
  project: Project;
  detail: ProjectDetailData;
};

export function ProjectDetail({ project, detail }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { screenshots } = detail;

  useEffect(() => {
    if (screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 mb-8 text-sm font-heading font-semibold text-primary dark:text-light-header hover:opacity-80 transition-opacity group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Projects
        </Link>

        {/* Page header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-text dark:text-[#FAF9E0] mb-3">
                {project.title}
              </h1>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-heading border border-primary/30 dark:border-secondary/30 text-primary dark:text-secondary bg-primary/5 dark:bg-secondary/10">
                {detail.projectType}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 dark:border-secondary/40 text-primary dark:text-secondary text-sm font-heading font-semibold hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-primary dark:hover:border-secondary transition-all duration-200"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 dark:border-secondary/40 text-primary dark:text-secondary text-sm font-heading font-semibold hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-primary dark:hover:border-secondary transition-all duration-200"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} video`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 dark:border-secondary/40 text-primary dark:text-secondary text-sm font-heading font-semibold hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-primary dark:hover:border-secondary transition-all duration-200"
                >
                  <Play size={14} /> Video
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-primary/70 dark:text-secondary/80 font-heading">{project.context}</p>
        </div>

        {/* Main card */}
        <div className="rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 bg-white/60 dark:bg-[#300b40]/15 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column — description + key learnings */}
            <div className="flex-1 min-w-0">
              <h2 className="font-heading text-xl font-bold text-dark-text dark:text-[#FAF9E0] mb-1">
                {project.title}
              </h2>
              <p className="text-xs text-dark-header/50 dark:text-[#FAF9E0]/50 font-heading mb-4">
                {project.context}
              </p>

              <div className="max-h-52 overflow-y-auto pr-1 mb-6 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80 leading-relaxed whitespace-pre-line">
                {detail.fullDescription}
              </div>

              <h3 className="font-heading text-base font-bold text-dark-text dark:text-[#FAF9E0] mb-3">
                Key Learnings:
              </h3>
              <ul className="space-y-2">
                {detail.keyLearnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — screenshots + tech */}
            <div className="lg:w-[44%] flex-shrink-0">
              <h3 className="font-heading text-base font-bold text-dark-text dark:text-[#FAF9E0] mb-3">
                Screenshots
              </h3>

              {/* Carousel */}
              <div className="relative w-full h-60 rounded-lg overflow-hidden bg-[#300b40]/20 dark:bg-[#300b40]/40">
                {screenshots.map((src, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 44vw"
                    />
                  </div>
                ))}

                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
                      }
                      aria-label="Previous screenshot"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
                      aria-label="Next screenshot"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          aria-label={`Go to screenshot ${i + 1}`}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            i === currentIndex ? "bg-white w-3" : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Tech stack */}
              <h3 className="font-heading text-base font-bold text-dark-text dark:text-[#FAF9E0] mt-5 mb-3">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-primary/20 dark:border-secondary/25 bg-primary/5 dark:bg-secondary/10 text-primary dark:text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution */}
          <div className="mt-8 pt-8 border-t border-[#9668C0]/15 dark:border-[#9668C0]/20">
            <h3 className="font-heading text-xl font-bold text-dark-text dark:text-[#FAF9E0] mb-4">
              My Contribution
            </h3>
            <p className="text-sm text-dark-header/75 dark:text-[#FAF9E0]/80 leading-relaxed whitespace-pre-line">
              {detail.contribution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
