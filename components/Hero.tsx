"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IMAGES, ALT } from "@/lib/images";

const ROT = ["serena", "precisa", "cálida", "tuya"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROT.length), 2200);
    return () => clearInterval(t);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rot = useTransform(sx, [-200, 200], [-8, 8]);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => setDesktop(window.matchMedia("(min-width:768px)").matches), []);

  function move(e: React.MouseEvent) {
    if (!desktop) return;
    mx.set(e.clientX - window.innerWidth * 0.72);
    my.set(e.clientY - window.innerHeight * 0.5);
  }

  return (
    <section id="top" onMouseMove={move} className="grain-lite relative min-h-[100svh] w-full overflow-hidden pt-28 md:pt-36 pb-16">
      {/* mesh blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full mesh blur-3xl opacity-70 animate-blob-soft" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full mesh blur-3xl opacity-60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass-lite rounded-full px-4 py-2 text-sm font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-coral animate-pulse" /> Clínica dental · Madrid
          </motion.span>

          <h1 className="mt-6 font-display font-extrabold leading-[0.86] tracking-tight text-ink text-[15vw] md:text-[9.5vw]">
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                Tu sonrisa,
              </motion.span>
            </span>
            <span className="block overflow-hidden h-[0.9em]">
              <motion.span
                key={idx}
                initial={{ y: "110%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} exit={{ y: "-110%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic text-coral"
              >
                {ROT[idx]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="mt-7 max-w-md text-ink-soft text-lg leading-relaxed"
          >
            Odontología tranquila, estética y sin sustos. Diseñamos tu sonrisa antes de tocarla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#reserva" className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-coral transition-colors">
              Reservar valoración gratis
              <span className="h-9 w-9 rounded-full bg-coral text-cream grid place-items-center group-hover:bg-cream group-hover:text-coral transition-colors">→</span>
            </a>
            <a href="#casos" className="text-ink font-semibold underline decoration-coral decoration-2 underline-offset-4">
              Ver casos reales
            </a>
          </motion.div>
        </div>

        {/* cursor-follow floating image */}
        <div className="md:col-span-4 relative flex justify-center md:justify-end">
          <motion.div
            style={{ x: sx, y: sy, rotate: rot }}
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.9 }}
            className="relative w-[70vw] max-w-[300px] aspect-[3/4]"
          >
            <img src={IMAGES.heroFloat} alt={ALT.heroFloat} className="h-full w-full object-cover rounded-[2rem] shadow-2xl shadow-ink/20" />
            <div className="absolute -bottom-5 -left-5 glass-lite rounded-2xl px-4 py-3">
              <div className="font-display font-extrabold text-2xl text-ink">4.9★</div>
              <div className="text-xs text-ink-soft">+1.900 reseñas</div>
            </div>
            <div className="absolute -top-4 -right-3 bg-coral text-cream rounded-full h-16 w-16 grid place-items-center text-center text-[11px] font-semibold leading-tight animate-spin-slow">
              sin<br/>dolor
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
