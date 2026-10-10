"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#20211f] px-6 py-32 text-[#eeece6] md:px-16">
      <motion.a
        href="mailto:maxene@example.com"
        className="block border-b border-[#eeece6]/30 pb-8 font-serif text-6xl leading-[0.9] md:text-9xl"
        whileHover={{ x: 12, fontStyle: "italic" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Let&apos;s Build Together.
      </motion.a>
      <div className="mt-8 flex flex-col gap-4 font-sans text-xs tracking-widest uppercase md:flex-row md:items-center md:justify-between">
        <span>Manila, Philippines</span>
        <a href="#" className="transition-opacity hover:opacity-60">
          LinkedIn
        </a>
        <span>© 2026 Maxene Macasaquit</span>
      </div>
    </footer>
  );
}
