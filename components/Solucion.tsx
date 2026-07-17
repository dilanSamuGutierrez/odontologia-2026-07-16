"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  { k: "01", t: "Escuchamos y diagnosticamos", d: "Escaneo 3D intraoral y radiografía. Sin prisa: entendemos qué te preocupa y qué quieres lograr." },
  { k: "02", t: "Diseñamos tu sonrisa", d: "Te enseñamos una simulación del resultado antes de empezar. Decides con toda la información delante." },
  { k: "03", t: "Presupuesto transparente", d: "Un plan por fases, con precios claros y opciones de financiación sin intereses. Cero sorpresas." },
  { k: "04", t: "Tratamiento y seguimiento", d: "Trabajamos con calma y control del dolor. Después, seguimiento cercano por WhatsApp." }
];

export default function Solucion() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let ctx: any;
    let mounted = true;
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (!mounted) return;
      const gsap = gsapMod.gsap || gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const rows = gsap.utils.toArray<HTMLElement>(".sol-step");
        rows.forEach((row, i) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top center",
            end: "bottom center",
            onToggle: (self: any) => self.isActive && setActive(i)
          });
        });
      }, wrap);
    })();
    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="solucion" ref={wrap} className="relative bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10">
        {/* sticky big index */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <span className="text-coral uppercase tracking-[0.25em] text-xs">Cómo trabajamos</span>
            <div className="mt-4 font-display font-extrabold text-ink leading-none text-[34vw] md:text-[16vw]">
              <motion.span key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-block">
                {STEPS[active].k}
              </motion.span>
            </div>
            <p className="mt-2 font-display font-bold text-2xl md:text-3xl text-ink max-w-xs">{STEPS[active].t}</p>
          </div>
        </div>
        {/* steps */}
        <div className="md:col-span-7 space-y-4">
          {STEPS.map((s, i) => (
            <div
              key={s.k}
              className={`sol-step rounded-3xl p-7 md:p-9 border transition-colors duration-500 ${
                active === i ? "bg-ink text-cream border-ink" : "bg-cream border-ink/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`h-10 w-10 rounded-full grid place-items-center font-semibold ${active === i ? "bg-coral text-cream" : "bg-cream-dim text-ink"}`}>{s.k}</span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{s.t}</h3>
              </div>
              <p className={`mt-4 leading-relaxed ${active === i ? "text-cream/75" : "text-ink-soft"}`}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
