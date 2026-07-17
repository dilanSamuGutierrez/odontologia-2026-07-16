"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES, ALT } from "@/lib/images";

const ITEMS = [
  { n: "01", t: "Te da miedo ir", d: "Y por eso lo pospones año tras año.", img: IMAGES.problemPeek1, alt: ALT.problemPeek1 },
  { n: "02", t: "No entiendes el presupuesto", d: "Cifras sin explicar y letra pequeña.", img: IMAGES.problemPeek2, alt: ALT.problemPeek2 },
  { n: "03", t: "Sales sin saber qué te hicieron", d: "Prisas, tecnicismos y cero contexto.", img: IMAGES.problemPeek3, alt: ALT.problemPeek3 },
  { n: "04", t: "No ves el resultado antes", d: "Firmas a ciegas y cruzas los dedos.", img: IMAGES.problemPeek4, alt: ALT.problemPeek4 }
];

export default function Problema() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="problema" className="relative bg-ink text-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <span className="text-coral uppercase tracking-[0.25em] text-xs">Por qué la gente no va</span>
        <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-3xl">
          El problema no eres tú. Es cómo te lo han contado.
        </h2>

        <div className="mt-14 relative">
          {ITEMS.map((it, i) => (
            <div
              key={it.n}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group relative border-t border-cream/15 py-7 md:py-9 flex items-baseline gap-5 md:gap-10 cursor-default"
            >
              <span className="font-display text-coral text-xl md:text-2xl w-10 shrink-0">{it.n}</span>
              <h3 className={`font-display font-extrabold text-3xl md:text-6xl tracking-tight transition-colors ${hover === i ? "text-coral" : "text-cream"}`}>
                {it.t}
              </h3>
              <p className="hidden lg:block ml-auto max-w-xs text-cream/50 text-right self-center">{it.d}</p>
            </div>
          ))}
          <div className="border-t border-cream/15" />

          {/* peeking image following the hovered row */}
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -4 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none hidden md:block absolute right-[26%] top-1/2 -translate-y-1/2 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl z-20"
              >
                <img src={ITEMS[hover].img} alt={ITEMS[hover].alt} className="h-full w-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
