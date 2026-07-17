"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BARS = [
  { t: "Hoy", cost: 20, risk: "Una revisión y limpieza", c: "bg-sage" },
  { t: "En 1 año", cost: 45, risk: "Empaste o pequeña caries", c: "bg-peri" },
  { t: "En 3 años", cost: 75, risk: "Endodoncia y corona", c: "bg-coral" },
  { t: "En 5+ años", cost: 100, risk: "Pérdida de pieza · implante", c: "bg-ink" }
];

export default function Consecuencias() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section id="consecuencias" className="relative bg-cream py-24 md:py-32">
      <div ref={ref} className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-4">
          <span className="text-coral uppercase tracking-[0.25em] text-xs">El coste de esperar</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink leading-[0.95]">
            Lo pequeño de hoy es lo caro de mañana.
          </h2>
          <p className="mt-5 text-ink-soft">Cuanto antes actúas, menos duele — en la boca y en el bolsillo.</p>
        </div>
        <div className="md:col-span-8">
          <div className="flex items-end gap-4 md:gap-6 h-[320px] md:h-[380px]">
            {BARS.map((b, i) => (
              <div key={b.t} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="mb-3 font-display font-extrabold text-2xl md:text-3xl text-ink">{b.cost}%</span>
                <motion.div
                  className={`w-full rounded-t-2xl ${b.c}`}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${b.cost}%` } : {}}
                  transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="mt-3 text-sm font-semibold text-ink text-center">{b.t}</span>
                <span className="mt-1 text-xs text-ink-soft text-center leading-tight">{b.risk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
