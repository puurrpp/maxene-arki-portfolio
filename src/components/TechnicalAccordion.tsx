"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { TechnicalDrawing } from "../data/projects";

export default function TechnicalAccordion({
  technicalDrawings,
}: {
  technicalDrawings: TechnicalDrawing[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-b border-white/20">
      <button
        type="button"
        className="flex w-full items-center justify-between py-8 text-left font-sans text-sm tracking-[0.18em] uppercase"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>Expand technical plans &amp; sections</span>
        <span aria-hidden="true" className="text-2xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
              {technicalDrawings.map((drawing) => (
                <figure key={drawing.title}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f3]">
                    <Image
                      src={drawing.src}
                      alt={drawing.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-4 font-sans text-xs tracking-widest uppercase">
                    {drawing.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
