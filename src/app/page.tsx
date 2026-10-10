"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "../data/projects";

const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Selected work", href: "/#selected-work" },
  { label: "Contact", href: "mailto:maxene@example.com" },
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
    <main>
      <section
        ref={heroRef}
        className="hero-section"
        aria-label="Arki architecture studio introduction"
      >
        <motion.div
          className="hero-image"
          style={{ y: imageY, scale: imageScale }}
          aria-hidden="true"
        >
          <Image
            src="/images/kasarinlan-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="hero-wash bg-black/50" aria-hidden="true" />

        <header className="site-header">
          <a href="#top" className="wordmark" aria-label="Arki home">
            <span>MAXENE MACASAQUIT</span>
            <small>B.S. Architecture | Mapúa University</small>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button className="menu-button" aria-label="Open navigation menu">
            <Menu size={19} strokeWidth={1.5} />
          </button>
        </header>

        <div className="hero-content" id="top">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Academic portfolio / 2026
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[10rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Designing with empathy.
            <br />
            <em>Sustaining tomorrow.</em>
          </motion.h1>
        </div>

        <div className="hero-footer">
          <p className="hero-note">Focus on community architecture &amp; urban design</p>
          <a className="scroll-cue" href="#selected-work">
            <span>Explore the work</span>
            <ArrowDown size={17} strokeWidth={1.2} />
          </a>
          <p className="hero-index">
            01 <span>/</span> 04
          </p>
        </div>
      </section>

      <section className="intro-section" id="studio">
        <div className="section-label">01 / Studio</div>
        <div className="intro-copy">
          <p className="display-copy">
            We shape quiet, considered environments for the way life unfolds.
          </p>
          <a className="text-link" href="#contact">
            Our approach
            <ArrowUpRight size={16} strokeWidth={1.3} />
          </a>
        </div>
      </section>

      <section
        className="next-section"
        id="selected-work"
        aria-label="Selected work preview"
      >
        <div className="section-label">02 / Selected work</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`group ${
                index === 0
                  ? "md:col-span-8"
                  : "md:col-span-4 md:mt-32"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/work/${project.id}`} className="block">
                <div
                  className={`relative w-full ${
                    index === 0 ? "aspect-[4/3]" : "aspect-[3/4]"
                  } overflow-hidden`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 768px) 66vw, 100vw"
                        : "(min-width: 768px) 33vw, 100vw"
                    }
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl mt-6">
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
