"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QA = [
  { q: "¿La primera cita es de verdad gratis?", a: "Sí. Incluye valoración, escaneo 3D y plan de tratamiento con presupuesto. Sin compromiso de continuar." },
  { q: "¿Duele el tratamiento?", a: "Trabajamos con anestesia de última generación y técnicas mínimamente invasivas. La mayoría de pacientes no sienten dolor." },
  { q: "¿Puedo financiar el tratamiento?", a: "Sí, ofrecemos financiación hasta 24 meses sin intereses, adaptada a cada plan." },
  { q: "¿Cuánto dura una ortodoncia invisible?", a: "Depende del caso, pero la media está entre 6 y 14 meses. En la valoración te damos una estimación real." },
  { q: "¿Atendéis urgencias?", a: "Sí, reservamos huecos diarios para urgencias. Escríbenos por WhatsApp y te damos hora el mismo día." },
  { q: "¿Trabajáis con niños?", a: "Contamos con odontopediatría y una sala pensada para que los peques vengan sin miedo." }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const cols: typeof QA[] = [[], []];
  QA.forEach((item, i) => cols[i % 2].push(item));
  let idx = -1;
  return (
    <section id="faq" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink mb-12">
          Preguntas <span className="text-coral italic">frecuentes</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {cols.map((col, ci) => (
            <div key={ci} className="space-y-5">
              {col.map((item) => {
                idx++;
                const myIdx = QA.indexOf(item);
                const isOpen = open === myIdx;
                return (
                  <button
                    key={myIdx}
                    onClick={() => setOpen(isOpen ? null : myIdx)}
                    className={`w-full text-left rounded-3xl border p-6 transition-colors ${
                      isOpen ? "bg-ink text-cream border-ink" : "bg-cream border-ink/12 hover:border-coral"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display font-extrabold text-lg md:text-xl tracking-tight">{item.q}</span>
                      <span className={`text-2xl shrink-0 transition-transform ${isOpen ? "rotate-45 text-coral" : "text-coral"}`}>+</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden text-cream/75 leading-relaxed"
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
