"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechnicalAccordion from "../../../components/TechnicalAccordion";

type Project = (typeof import("../../../data/projects").projects)[number];

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="bg-[#11110f] text-[#f4f4f3]">
      <section className="relative flex h-svh min-h-[42rem] items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10 w-full px-6 py-10 md:px-16 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-sans text-xs tracking-[0.24em] uppercase text-white/70">
            {project.location} / 2026
          </p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.9] md:text-9xl">
            {project.title}
          </h1>
        </motion.div>
      </section>

      <motion.section
        className="px-6 py-32 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <blockquote className="max-w-6xl font-serif text-5xl font-bold leading-[0.95] md:text-8xl">
          “{project.philosophy}”
        </blockquote>
        <p className="mt-20 max-w-prose font-sans text-lg leading-relaxed text-white/65 md:ml-[25%]">
          {project.concept}
        </p>
      </motion.section>

      {project.elevationImage && (
        <motion.section
          className="bg-[#f4f4f3] px-6 py-24 text-black md:px-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={project.elevationImage}
              alt={`${project.title} front elevation`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 flex justify-between font-sans text-xs tracking-[0.2em] uppercase">
            <span>01 / Front elevation</span>
            <span>West facade elevation</span>
          </div>
        </motion.section>
      )}

      <motion.footer
        className="px-6 py-32 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {project.hasResearchPaper && (
          <a
            href="/solana-research.pdf"
            download
            target="_blank"
            className="inline-flex border border-white/30 px-5 py-4 font-sans text-xs tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-black"
          >
            ↓ Download academic research (PDF)
          </a>
        )}

        <TechnicalAccordion technicalDrawings={project.technicalDrawings} />
      </motion.footer>
    </main>
  );
}
