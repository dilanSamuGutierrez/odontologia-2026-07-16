"use client";
import { motion } from "framer-motion";

const WORDS = "Llevaba diez años tapándome la boca al reír. En SVANE me lo explicaron todo, vi el resultado antes de empezar y hoy no paro de sonreír.".split(" ");

export default function Testimonio() {
  return (
    <section id="testimonio" className="relative bg-coral text-cream py-24 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute top-6 left-6 font-display font-extrabold text-[30vw] leading-none opacity-10 select-none">“</div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
        <p className="font-display font-extrabold text-3xl md:text-6xl leading-[1.05] tracking-tight flex flex-wrap gap-x-3 gap-y-1">
          {WORDS.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.18 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035, duration: 0.3 }}
              className="inline-block"
            >
              {w}
            </motion.span>
          ))}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-14 w-14 rounded-full bg-cream text-coral grid place-items-center font-display font-extrabold text-xl">C</span>
          <div>
            <div className="font-semibold text-lg">Carolina Díaz</div>
            <div className="text-cream/70">Paciente de diseño de sonrisa · Madrid</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
