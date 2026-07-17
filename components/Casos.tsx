"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES, ALT } from "@/lib/images";

const CASES = [
  { a: IMAGES.caseA1, aAlt: ALT.caseA1, b: IMAGES.caseB1, bAlt: ALT.caseB1, t: "Diseño de sonrisa", d: "Carillas de porcelana · 3 semanas" },
  { a: IMAGES.caseA2, aAlt: ALT.caseA2, b: IMAGES.caseB2, bAlt: ALT.caseB2, t: "Rehabilitación", d: "Implantes + corona · 4 meses" },
  { a: IMAGES.caseA3, aAlt: ALT.caseA3, b: IMAGES.caseB3, bAlt: ALT.caseB3, t: "Estética gingival", d: "Contorneado + blanqueamiento · 2 semanas" }
];

export default function Casos() {
  const band = useRef<HTMLDivElement>(null);
  const bandImg = useRef<HTMLImageElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const inView = useInView(grid, { once: true, margin: "-10%" });

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
        gsap.fromTo(
          bandImg.current,
          { yPercent: -12 },
          { yPercent: 12, ease: "none", scrollTrigger: { trigger: band.current, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });
    })();
    return () => { mounted = false; if (ctx) ctx.revert(); };
  }, []);

  return (
    <section id="casos" className="relative bg-cream">
      {/* grid of hover crossfade cases */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink max-w-2xl">
            Pasa el ratón: <span className="text-coral italic">antes</span> → después
          </h2>
          <p className="text-ink-soft max-w-xs">Casos reales de nuestros pacientes. Toca o desliza en móvil.</p>
        </div>
        <div ref={grid} className="grid md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-ink"
            >
              <img src={c.a} alt={c.aAlt} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
              <img src={c.b} alt={c.bAlt} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute top-4 left-4 z-10 bg-cream/90 text-ink text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-coral group-hover:text-cream transition-colors">
                antes / después
              </span>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 bg-gradient-to-t from-ink/85 to-transparent">
                <h3 className="font-display font-extrabold text-xl text-cream">{c.t}</h3>
                <p className="text-cream/70 text-sm">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* full-bleed clinic band with GSAP parallax */}
      <div ref={band} className="relative w-full h-[46vh] md:h-[62vh] overflow-hidden">
        <img ref={bandImg} src={IMAGES.clinicBand} alt={ALT.clinicBand} className="absolute inset-0 h-[130%] w-full object-cover" />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 h-full flex items-center px-5 md:px-10 max-w-[1400px] mx-auto">
          <h3 className="font-display font-extrabold text-4xl md:text-7xl tracking-tight text-cream max-w-3xl leading-[0.95]">
            Una clínica que no parece una clínica.
          </h3>
        </div>
      </div>
    </section>
  );
}
