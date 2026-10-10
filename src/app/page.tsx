"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "../data/projects";

const navItems = [
  { label: "Projects", href: "#selected-work" },
  { label: "Studio", href: "/studio" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <main className="w-full">
      <section
        ref={heroRef}
        className="hero-section"
        aria-label="Arki architecture studio introduction"
      >
        <motion.div
          className="hero-image h-screen w-full"
          style={{ y: imageY, scale: imageScale }}
          aria-hidden="true"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0 z-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/40"
          aria-hidden="true"
        />

        <header className="site-header z-10">
          <a href="#top" className="wordmark" aria-label="Arki home">
            <span>MAXENE MACASAQUIT</span>
            <small>B.S. Architecture | Mapúa University</small>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="menu-button" aria-label="Open navigation menu">
            <Menu size={19} strokeWidth={1.5} />
          </button>
        </header>

        <div className="hero-content relative z-10" id="top">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Academic portfolio / 2026
          </motion.p>
          <motion.h1
            className="mb-24 text-[clamp(3.5rem,8vw,8rem)] leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Designing with empathy.
            <br />
            <em>Sustaining tomorrow.</em>
          </motion.h1>
        </div>

        <div className="hero-footer z-10">
          <p className="hero-note">Focus on community architecture &amp; urban design</p>
          <a className="scroll-cue" href="#selected-work">
            <span>Explore the work</span>
            <ArrowDown size={17} strokeWidth={1.2} />
          </a>
        </div>
      </section>

      <section
        id="selected-work"
        className="w-full max-w-[95vw] mx-auto py-24"
        aria-label="Projects preview"
      >
        <div className="section-label">02 / Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full mt-12">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/work/${project.id}`} className="block">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl mt-6">
                  {project.title}
                </h3>
                <p className="font-sans text-sm tracking-widest uppercase text-gray-500 mt-2">
                  {project.category} / {project.location}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
