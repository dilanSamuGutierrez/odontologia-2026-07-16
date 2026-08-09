"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROT = ["serena", "precisa", "cálida", "tuya"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROT.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="grain-lite relative min-h-[100svh] w-full overflow-hidden pt-28 md:pt-32 flex items-end"
    >
      {/* mesh blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full mesh blur-3xl opacity-70 animate-blob-soft" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full mesh blur-3xl opacity-50" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-6 items-end">
        {/* text */}
        <div className="md:col-span-6 pb-6 md:pb-12 md:pt-10">
          <h1 className="font-display font-extrabold leading-[0.86] tracking-tight text-ink text-[16vw] md:text-[8.5vw]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Tu sonrisa,
              </motion.span>
            </span>
            <span className="block overflow-hidden h-[0.9em]">
              <motion.span
                key={idx}
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic text-coral"
              >
                {ROT[idx]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-7 max-w-md text-ink-soft text-lg leading-relaxed"
          >
            Odontología tranquila, estética y sin sustos. Diseñamos tu sonrisa antes de tocarla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#reserva"
              className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-coral transition-colors"
            >
              Reservar valoración gratis
              <span className="h-9 w-9 rounded-full bg-coral text-cream grid place-items-center group-hover:bg-cream group-hover:text-coral transition-colors">
                →
              </span>
            </a>
            <a
              href="#casos"
              className="text-ink font-semibold underline decoration-coral decoration-2 underline-offset-4"
            >
              Ver casos reales
            </a>
          </motion.div>

          {/* trust line inline (reemplaza la tarjeta flotante) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-3 text-ink-soft"
          >
            <span className="text-coral text-lg tracking-tight">★★★★★</span>
            <span className="text-sm">
              <span className="font-semibold text-ink">4.9</span> · +1.900 reseñas en Google
            </span>
          </motion.div>
        </div>

        {/* imagen propia SIN FONDO — derecha, anclada abajo, con sombras de marca */}
        <div className="md:col-span-6 relative flex justify-center md:justify-end self-end">
          <div className="relative">
            {/* sombra de suelo en tono de marca (coral) para que la figura no flote */}
            <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 h-6 md:h-9 w-[74%] rounded-[100%] bg-coral/30 blur-2xl" />
            <motion.img
              src="/hero_new.png"
              alt="BRIEF: persona (dentista o paciente sonriendo) recortada SIN FONDO en PNG transparente, medio cuerpo, mirada cálida, luz suave natural, tonos neutros — colocada a la derecha del hero, apoyada sobre la línea inferior, sin recuadro"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[92vw] max-w-[520px] md:max-w-[620px] h-[56vh] md:h-[88vh] object-contain object-bottom select-none pointer-events-none [filter:drop-shadow(0_16px_26px_rgba(255,90,60,0.30))_drop-shadow(0_44px_66px_rgba(124,111,240,0.20))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
