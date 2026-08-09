"use client";
import { useState } from "react";

const ITEMS = [
  { n: "01", t: "Te da miedo ir", d: "Y por eso lo pospones año tras año." },
  { n: "02", t: "No entiendes el presupuesto", d: "Cifras sin explicar y letra pequeña." },
  { n: "03", t: "Sales sin saber qué te hicieron", d: "Prisas, tecnicismos y cero contexto." },
  { n: "04", t: "No ves el resultado antes", d: "Firmas a ciegas y cruzas los dedos." }
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

        <div className="mt-14">
          {ITEMS.map((it, i) => {
            const active = hover === i;
            return (
              <div
                key={it.n}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group border-t border-cream/15 py-7 md:py-9 flex items-center gap-5 md:gap-10 cursor-default"
              >
                <span className={`font-display text-xl md:text-2xl w-10 shrink-0 transition-colors ${active ? "text-cream" : "text-coral"}`}>
                  {it.n}
                </span>
                <h3
                  className={`font-display font-extrabold text-3xl md:text-6xl tracking-tight transition-all duration-300 ${
                    active ? "text-coral md:translate-x-3" : "text-cream"
                  }`}
                >
                  {it.t}
                </h3>
                <div className="ml-auto flex items-center gap-5">
                  <p
                    className={`hidden md:block max-w-[15rem] text-right text-sm leading-snug transition-colors duration-300 ${
                      active ? "text-cream/80" : "text-cream/40"
                    }`}
                  >
                    {it.d}
                  </p>
                  <span
                    className={`hidden md:grid h-10 w-10 place-items-center rounded-full border text-lg shrink-0 transition-all duration-300 ${
                      active
                        ? "bg-coral border-coral text-cream"
                        : "border-cream/20 text-cream/40"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            );
          })}
          <div className="border-t border-cream/15" />
        </div>
      </div>
    </section>
  );
}
