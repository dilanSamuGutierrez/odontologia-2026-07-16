"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = ["Diseño de sonrisa", "Ortodoncia invisible", "Implantes", "Blanqueamiento", "Revisión general"];
const SLOTS = ["09:30", "11:00", "12:30", "16:00", "17:30", "19:00"];

export default function Reserva() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [slot, setSlot] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="reserva" className="relative bg-peri/40 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-coral uppercase tracking-[0.25em] text-xs">Reserva en 30 segundos</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink">
            Tu primera cita es gratis.
          </h2>
          <p className="mt-4 text-ink-soft">Valoración + escaneo 3D + plan de tratamiento, sin compromiso.</p>
        </div>

        <div className="mt-12 bg-cream rounded-[2rem] border border-ink/10 p-6 md:p-10 shadow-sm">
          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className="mx-auto h-16 w-16 rounded-full bg-coral text-cream grid place-items-center text-3xl">✓</div>
              <h3 className="mt-5 font-display font-extrabold text-3xl text-ink">¡Cita solicitada!</h3>
              <p className="mt-2 text-ink-soft">{service} · {slot}h. Te confirmamos por WhatsApp enseguida.</p>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-8">
                {[0, 1].map((s) => (
                  <div key={s} className="flex-1 h-1.5 rounded-full bg-cream-dim overflow-hidden">
                    <motion.div className="h-full bg-coral" animate={{ width: step >= s ? "100%" : "0%" }} transition={{ duration: 0.4 }} />
                  </div>
                ))}
              </div>
              <AnimatePresence mode="wait">
                {step === 0 ? (
                  <motion.div key="s0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <h3 className="font-display font-bold text-2xl text-ink mb-5">1. ¿Qué te interesa?</h3>
                    <div className="flex flex-wrap gap-3">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          onClick={() => { setService(s); setStep(1); }}
                          className={`px-5 py-3 rounded-full border text-sm md:text-base font-medium transition-colors ${
                            service === s ? "bg-ink text-cream border-ink" : "border-ink/20 text-ink hover:border-coral hover:text-coral"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                    <button onClick={() => setStep(0)} className="text-ink-soft text-sm mb-4">← Cambiar servicio ({service})</button>
                    <h3 className="font-display font-bold text-2xl text-ink mb-5">2. Elige hora y deja tu contacto</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {SLOTS.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSlot(s)}
                          className={`px-5 py-2.5 rounded-full border font-medium transition-colors ${
                            slot === s ? "bg-coral text-cream border-coral" : "border-ink/20 text-ink hover:border-coral"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); if (slot) setDone(true); }} className="grid sm:grid-cols-2 gap-4">
                      <input required placeholder="Tu nombre" className="bg-cream border border-ink/20 rounded-full px-5 py-3 outline-none focus:border-coral" />
                      <input required type="tel" placeholder="Teléfono" className="bg-cream border border-ink/20 rounded-full px-5 py-3 outline-none focus:border-coral" />
                      <button
                        disabled={!slot}
                        className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-3 bg-ink text-cream py-4 rounded-full font-semibold hover:bg-coral transition-colors disabled:opacity-40"
                      >
                        {slot ? `Confirmar cita a las ${slot}h →` : "Selecciona una hora"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
