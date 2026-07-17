"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV } from "@/lib/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 md:top-5 inset-x-0 z-50 px-3 md:px-6"
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between gap-3">
        <a
          href="#top"
          className={`glass-lite rounded-full px-5 py-2.5 font-display font-extrabold text-xl tracking-tight ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          SVANE<span className="text-coral">.</span>
        </a>
        <nav className="hidden md:flex glass-lite rounded-full px-3 py-2 items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-ink/75 hover:bg-ink hover:text-cream transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserva"
          className="hidden md:inline-flex items-center gap-2 bg-coral text-cream rounded-full pl-5 pr-2 py-2 text-sm font-semibold hover:bg-coral-deep transition-colors"
        >
          Pedir cita
          <span className="h-7 w-7 rounded-full bg-cream text-coral grid place-items-center">→</span>
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden glass-lite rounded-full px-4 py-2.5 text-sm font-semibold"
          aria-label="Menú"
        >
          {open ? "✕" : "Menú"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 glass-lite rounded-3xl p-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl font-display text-lg hover:bg-cream-dim">
              {n.label}
            </a>
          ))}
          <a href="#reserva" onClick={() => setOpen(false)} className="mt-1 bg-coral text-cream rounded-2xl px-4 py-3 font-semibold text-center">
            Pedir cita →
          </a>
        </div>
      )}
    </motion.header>
  );
}
