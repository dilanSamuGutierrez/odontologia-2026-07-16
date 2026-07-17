"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const R = [
  { n: "Marta L.", i: "ML", c: "#FF5A3C", t: "Me daba pánico el dentista y aquí me quitaron el miedo. La valoración fue clarísima." },
  { n: "David R.", i: "DR", c: "#7C6FF0", t: "Ortodoncia invisible en 8 meses. Resultado espectacular y sin molestias." },
  { n: "Nuria P.", i: "NP", c: "#2FA67B", t: "Diseño de sonrisa impecable. Se nota que planifican todo antes de tocar nada." },
  { n: "Álvaro G.", i: "AG", c: "#E8A33D", t: "Trato exquisito, clínica preciosa y precios transparentes. 10/10." },
  { n: "Sara M.", i: "SM", c: "#3E7CC4", t: "Vine por una urgencia y salí encantada. Ahora va toda mi familia." },
  { n: "Jon B.", i: "JB", c: "#C0556E", t: "Implantes sin dolor y un seguimiento por WhatsApp que da mucha tranquilidad." }
];

function Stars() {
  return <div className="text-coral text-sm">{"★★★★★"}</div>;
}

export default function Resenas() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-ink">
          Reseñas de verdad, <span className="text-coral italic">arrástralas</span>.
        </h2>
        <div className="flex items-center gap-3 text-ink-soft">
          <span className="font-display font-extrabold text-4xl text-ink">4.9</span>
          <div><Stars /><span className="text-sm">Google · +1.900 opiniones</span></div>
        </div>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -900, right: 0 }}
        className="flex gap-5 px-5 md:px-10 cursor-grab active:cursor-grabbing"
      >
        {R.map((r, i) => (
          <div key={i} className="shrink-0 w-[300px] md:w-[360px] bg-cream border border-ink/10 rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-full grid place-items-center text-cream font-semibold" style={{ background: r.c }}>{r.i}</span>
              <div>
                <div className="font-semibold text-ink">{r.n}</div>
                <Stars />
              </div>
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed">{r.t}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
