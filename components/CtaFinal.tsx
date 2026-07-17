"use client";
import { motion } from "framer-motion";
import { IMAGES, ALT } from "@/lib/images";
import MagneticButton from "./MagneticButton";
import { WHATSAPP } from "@/lib/utils";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative bg-ink text-cream overflow-hidden">
      <img src={IMAGES.ctaBack} alt={ALT.ctaBack} className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[13vw] md:text-[9vw] leading-[0.85] tracking-tight"
          >
            Empieza a <span className="text-coral italic">sonreír</span>
          </motion.h2>
          <p className="mt-6 max-w-md mx-auto text-cream/65 text-lg">
            Tu valoración es gratis y sin compromiso. El primer paso es el más fácil.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="#reserva"
              className="group inline-flex items-center gap-3 bg-coral text-cream pl-7 pr-2 py-2 rounded-full font-semibold hover:bg-coral-deep transition-colors"
            >
              Reservar cita gratis
              <span className="h-10 w-10 rounded-full bg-cream text-coral grid place-items-center">→</span>
            </MagneticButton>
            <MagneticButton
              href={WHATSAPP}
              className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 rounded-full font-semibold hover:border-coral transition-colors"
            >
              Escríbenos por WhatsApp
            </MagneticButton>
          </div>
        </div>

        {/* contact strip */}
        <div className="mt-16 grid sm:grid-cols-3 gap-5 text-center">
          {[
            { t: "Dónde", d: "Calle Serrano 45, Madrid", href: "https://maps.google.com/?q=Calle+Serrano+45+Madrid", cta: "Ver en el mapa →" },
            { t: "Horario", d: "Lun–Vie · 9:00–20:00", href: "#reserva", cta: "Pedir hora →" },
            { t: "Teléfono", d: "+34 600 111 222", href: "tel:+34600111222", cta: "Llamar ahora →" }
          ].map((c) => (
            <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
               className="glass-lite rounded-3xl p-6 hover:bg-cream/10 transition-colors">
              <div className="text-coral text-xs uppercase tracking-[0.2em]">{c.t}</div>
              <div className="mt-2 font-display font-bold text-xl text-cream">{c.d}</div>
              <div className="mt-3 text-cream/60 text-sm">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
